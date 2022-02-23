import React, {useEffect} from 'react';
import {ImageBackground, View} from "react-native";
import styles from "./styles";
import Main from "./main";
import images from "../../../constants/images";
import axios from 'axios';
import {getDeviceInfo} from  '../../utils/deviceInfo'


const Welcome = ( props) => {
/*
    axios.get('http://localhost:9000/user/test')
        .then(response => {
            console.log(response.data.responseObject.user);
        })
        .catch(error => {
            console.log(error);
        });
 */
    console.log(getDeviceInfo.deviceInfo)

    return (
        <View style={styles.main}>
            <View style={styles.contentTopBody}>
                <ImageBackground source={images.welcome}
                                 style={styles.image}/>
            </View>

            <View style={styles.contentBottomBody}>
                <Main props={props}/>
            </View>
        </View>
    )
}
export default Welcome;
