import {Image, TextInput, TouchableOpacity, View, Text} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React, {useEffect, useState} from 'react';
import {COLORS} from "../../../../constants";


const Main = ({refKod, setTextKod, textKod}) => {


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
            <TouchableOpacity activeOpacity={1} onPress={() => refKod.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refKod = input}
                            value={textKod}
                            onChangeText={text => setTextKod(text)}
                            keyboardType={"numeric"}
                            style={styles.textInput}
                            placeholder={"4 Haneli Kod"}
                            maxLength={4}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {textKod && textKod.length > 0 ? <View>
                        <TouchableOpacity onPress={() => {
                            refKod.clear()
                            refKod.focus()
                            setTextKod("")
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
