import {Image, TextInput, TouchableOpacity, View, Text} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React, {useEffect, useState} from 'react';
import {COLORS} from "../../../../constants";


const Main = ({refSmsOtp, setTextSmsOtp, textSmsOtp}) => {

    function countDown(value) {
        deger = value;
        oneSecInterval = setInterval(() => {
            setCount(deger);
            deger--;
            if (deger < 0) {
                clearInterval(oneSecInterval);
            }
        }, 1000);
    }

    let deger = 4;

    const [count, setCount] = useState(deger);
    let oneSecInterval = null;


    useEffect(() => {
        countDown(count);

    }, []);

    return (<>
            <TouchableOpacity activeOpacity={1} onPress={() => refSmsOtp.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refSmsOtp = input}
                            value={textSmsOtp}
                            onChangeText={text => setTextSmsOtp(text)}
                            keyboardType={"numeric"}
                            style={styles.textInput}
                            placeholder={"4 Haneli SmsOtp"}
                            maxLength={4}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {textSmsOtp && textSmsOtp.length > 0 ? <View>
                        <TouchableOpacity onPress={() => {
                            refSmsOtp.clear()
                            refSmsOtp.focus()
                            setTextSmsOtp("")
                        }}>

                            <Image source={icons.close} style={styles.imageClose}/>
                        </TouchableOpacity>

                    </View> : null}

                </View>
            </TouchableOpacity>
            <View style={styles.btnContent}>

                <View>
                    {
                        0 == count ?
                            <TouchableOpacity
                                disabled={0 < count}
                                onPress={() => {
                                    countDown(5);
                                }}>
                                <Text style={styles.textBtn}>
                                    Tekrar Gönder
                                </Text>
                            </TouchableOpacity> : null
                    }
                </View>


                <View>
                    <Text style={styles.textBtnKalanSure}>
                        Kalan Süre ({count} sn.)
                    </Text>
                </View>
            </View>
        </>


    )
}
export default Main;
