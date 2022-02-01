import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React from 'react';
import {COLORS} from "../../../../constants";
import CheckBox from "@react-native-community/checkbox";

const Main = ({navigation, refMail, setTextMail, textMail}) => {


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
            <View style={{flexDirection: "row"}}>

                <View style={styles.checkBoxLabelContent}>

                    <Text style={styles.checkBoxLabel}>
                        hadiGo'dan haber, fırsat ve hediye almak istemiyorum.
                    </Text>
                </View>

                <View style={styles.checkBoxContent}>
                    <CheckBox
                        style={styles.checkBox}
                        value={false}
                        onCheckColor={COLORS.primary}
                        onTintColor={COLORS.primary}
                    />
                </View>
            </View>


            <View style={styles.infoContent}>
                <Text style={styles.infoText}>
                    Abone olduğumda, doğrudan hadiGo ile iletişime geçerek veya haber bültenindeki bağlantıya tıklayarak
                    istediğim zaman abonelikten çıkılabilir.
                </Text>
            </View>

        </>


    )
}
export default Main;
