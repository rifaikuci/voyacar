import axios from 'axios';

import { useEffect, useState } from 'react';
import { getDeviceInfo } from '../utils/deviceInfo'
import deepForEach from 'deep-for-each';


axios.defaults.baseURL = 'http://localhost:9000/';
axios.defaults.withCredentials = true;
axios.defaults.headers = {
   'X-Parse-Application-Id': 'Wllt3Q',
    //'X-Parse-Application-Id': 'uz8wxfLTKuyWu9gM',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
};


axios.interceptors.response.use((response) => {
    if (response.data.responseObject) {
        deepForEach(response.data.responseObject, (value, key, subject, path) => {
            if (typeof value === "string") {
                const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
                const dateFormat2 = /^\d{4}-\d{2}-\d{2}$/;
                if (value.indexOf('T00:00:00.000') > -1) {
                    subject[key] = new Date(value.substring(0, 10));
                } else if (dateFormat.test(value)) {
                    subject[key] = new Date(value);
                } else if (dateFormat2.test(value))
                    subject[key] = new Date(value);
            }
        });
    }


    return response
});

getDeviceInfo().then(deviceInfo => {

    axios.defaults.headers['device-id'] = deviceInfo.deviceID;
    axios.defaults.headers['app-version'] = deviceInfo.appVersion;
    axios.defaults.headers['user-agent'] = deviceInfo.userAgent;
    axios.defaults.headers['device-key'] = deviceInfo.deviceID;
    axios.defaults.headers['platform'] = deviceInfo.systemName;
    axios.defaults.headers['platform-version'] = deviceInfo.systemVersion;
    axios.defaults.headers['brand-model'] = `${deviceInfo.deviceManufacturer}-${deviceInfo.model}`;
    axios.defaults.headers['application-invoker'] = 'MOBIL';
    axios.defaults.headers['application-name'] = 'WALLET';
    axios.defaults.headers['X-Forwarded-For'] = deviceInfo.ip;
    axios.defaults.headers['accept-language'] = 'tr-TR';
    axios.defaults.headers['mac-address'] = deviceInfo.macAddress;

}).catch()

const useRequest = (initialRequest) => {

    const [request, setRequest] = useState(initialRequest);
    //const [isLoading, setIsLoading] = useState({ loading: false, err: { message: '' } });
    //const [isLoading, setIsLoading] = useState();

    const [responseObject, setResponseObject] = useState({ loading: false, err: { message: '' }, responseObject: null });
    useEffect(() => {

        let didCancel = false;

        const fetchData = async () => {
            let err = { message: '' };

            if (request) {
                // setIsLoading({ loading: true, err, running: true });
                setResponseObject({ loading: true, err, responseObject: null });
                try {

                    if (request.url.indexOf('authentication') > -1 && request.url.indexOf('authentication/logout') < 0)
                        axios.defaults.headers['x-parse-session-token'] = '';

                    const response = await axios(request);
                    if(response.headers['current-transaction-key'])
                        axios.defaults.headers['current-transaction-key'] = response.headers['current-transaction-key'];

                    if (response.data.restHeader.success) {
                        if (!didCancel) {

                            if (response.data.responseObject && response.data.responseObject.sessionToken) {
                                axios.defaults.headers['x-parse-session-token'] = response.data.responseObject.sessionToken;
                            }

                            if (response.data.restHeader.operationId) {
                                axios.defaults.headers.operationId = response.data.restHeader.operationId;
                                axios.defaults.headers.transaction = response.data.restHeader.transaction;
                            }
                            //  setResponseObject(response.data.responseObject);
                            setResponseObject({ loading: false, err, responseObject: response.data.responseObject });
                        }

                    } else {

                        const error = new Error();
                        error.response = response;
                        throw error;
                    }

                } catch (error) {

                    if (error.response && error.response.data && error.response.data.error == 'unauthorized') {
                        err = {
                            notificationType: 'LOGOUT',
                            success: false,
                        }
                    }
                    else if (error.response && error.response.data && error.response.data.code == 209) {
                        err = {
                            notificationType: 'LOGOUT',
                            success: false,
                        }
                    }
                    else if (error.response && error.response.data.restHeader) {
                        err = {
                            code: error.response.data.restHeader.code,
                            header: error.response.data.restHeader.code,
                            message: error.response.data.restHeader.message,
                            notificationType: error.response.data.restHeader.notificationType,
                            success: false,
                        }
                    } else {
                        err = {
                            code: 0,
                            header: "Internal Error",
                            message: error.message,
                            stackTrace: error.stack,
                            notificationType: "ERROR",
                            success: false,
                        };
                    }

                    if (!didCancel)
                        // setIsLoading({ loading: false, err, responseObject: null });
                        setResponseObject({ loading: false, err, responseObject: null });
                } finally {
                    /* if (!didCancel)
                         setIsLoading({ loading: false, err });*/
                }
            }

        };

        fetchData();
        return () => {
            didCancel = true;
        };
    }, [request]);
    //return [{ responseObject, isLoading, request }, setRequest];
    return [{ responseObject: responseObject.responseObject, isLoading: { loading: responseObject.loading, err: responseObject.err }, request }, setRequest];
};


export default useRequest;
