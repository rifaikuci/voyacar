import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React, {useState} from 'react';
import {COLORS} from "../../../../constants";
import CheckBox from "@react-native-community/checkbox";

const Main = ({navigation, refMail, setTextMail, textMail, refSifre, textSifre, setTextSifre}) => {
    const [visible, setVisible] = useState(true);


    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refMail.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refMail = input}
                            value={textMail}
                            onChangeText={text => setTextMail(text)}
                            style={styles.textInput}
                            keyboardType={"email-address"}
                            placeholder={"E-posta"}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textMail && textMail.length > 0 ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refMail.clear()
                                    refMail.focus()
                                    setTextMail("")
                                }}>

                                    <Image source={icons.close} style={styles.imageClose}/>
                                </TouchableOpacity>

                            </View> : null
                    }

                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => refSifre.focus()}>
                <View style={styles.mainContent2}>

                    <View>
                        <TextInput
                            ref={input => refSifre = input}
                            value={textSifre}
                            onChangeText={text => setTextSifre(text)}
                            style={styles.textInput}
                            placeholder={"Şifre"}
                            secureTextEntry={visible}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textSifre && textSifre.length > 0 ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    setVisible(!visible)
                                }}>

                                    <Image source={visible == true ? icons.eye : icons.closeEye} style={styles.image}/>
                                </TouchableOpacity>

                            </View> : null
                    }

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                <View style={styles.infoContent}>
                    <Text style={styles.infoText}>
                        {"Şifremi Unuttum?"}
                    </Text>

                </View>
            </TouchableOpacity>


        </>


    )
}
export default Main;
