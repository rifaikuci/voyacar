import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React from 'react';
import {COLORS} from "../../../../constants";


const Main = ({navigation, refAd, refSoyad, textAd, setTextAd, textSoyad, setTextSoyad}) => {


    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refAd.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refAd = input}
                            value={textAd}
                            onChangeText={text => setTextAd(text)}
                            style={styles.textInput}
                            placeholder={"Ad"}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textAd  && textAd.length  > 0  ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refAd.clear()
                                    refAd.focus()
                                    setTextAd("")
                                }}>

                                    <Image source={icons.close} style={styles.imageClose}/>
                                </TouchableOpacity>

                            </View> : null
                    }

                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => refSoyad.focus()}>
                <View style={styles.mainContent2}>

                    <View>
                        <TextInput
                            ref={input => refSoyad = input}
                            value={textSoyad}
                            onChangeText={text => setTextSoyad(text)}
                            style={styles.textInput}
                            placeholder={"Soyad"}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textSoyad  && textSoyad.length  > 0  ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refSoyad.clear()
                                    refSoyad.focus()
                                    setTextSoyad("")
                                }}>

                                    <Image source={icons.close} style={styles.imageClose}/>
                                </TouchableOpacity>

                            </View> : null
                    }
                </View>
            </TouchableOpacity>

        </>


    )
}
export default Main;
