import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React, {useState} from 'react';
import {COLORS} from "../../../../constants";


const Main = ({refPhoneNumber, setTextPhoneNumber, textPhoneNumber}) => {

    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refPhoneNumber.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refPhoneNumber = input}
                            value={"+90" + textPhoneNumber}
                            onChangeText={text => {
                                setTextPhoneNumber(text.substr(3))
                            }}
                            keyboardType={"phone-pad"}
                            style={styles.textInput}
                            placeholder={"PhoneNumber"}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textPhoneNumber && textPhoneNumber.length > 0 ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refPhoneNumber.clear()
                                    refPhoneNumber.focus()
                                    setTextPhoneNumber("")
                                }}>

                                    <Image source={icons.close} style={styles.image}/>
                                </TouchableOpacity>

                            </View> : null
                    }

                </View>
            </TouchableOpacity>
        </>


    )
}
export default Main;
