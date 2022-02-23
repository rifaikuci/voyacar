import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React from 'react';
import {COLORS} from "../../../../constants";


const Main = ({ refBirthDate, setTextBirthDate, textBirthDate}) => {

    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refBirthDate.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refBirthDate = input}
                            value={textBirthDate}
                            onChangeText={text => {

                                text.length === 2 ? setTextBirthDate(text+"/") :
                                text.length === 5 ? setTextBirthDate(text+"/") : setTextBirthDate(text)
                                } }
                            style={styles.textInput}
                            placeholder={"GG/AA/YYYY"}
                            maxLength={10}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textBirthDate  && textBirthDate.length  > 0  ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refBirthDate.clear()
                                    refBirthDate.focus()
                                    setTextBirthDate("")
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
