import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React from 'react';
import {COLORS} from "../../../../constants";

const Main = ({ refMail, setTextMail, textMail}) => {


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
        </>


    )
}
export default Main;
