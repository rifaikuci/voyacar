import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React, {useState} from 'react';
import {COLORS} from "../../../../constants";


const Main = ({refPassword, setTextPassword, textPassword, refRePassword, setTextRePassword, textRePassword}) => {

    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);

    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refPassword.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refPassword = input}
                            value={textPassword}
                            onChangeText={text => setTextPassword(text)}
                            style={styles.textInput}
                            placeholder={"Parola Giriniz"}
                            secureTextEntry={visible}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textPassword && textPassword.length > 0 ?
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

            <TouchableOpacity activeOpacity={1} onPress={() => refRePassword.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refRePassword = input}
                            value={textRePassword}
                            onChangeText={text => setTextRePassword(text)}
                            style={styles.textInput}
                            placeholder={"Tekrar Giriniz"}
                            secureTextEntry={visible2}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textRePassword && textRePassword.length > 0 ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    setVisible2(!visible2)
                                }}>

                                    <Image source={visible2 == true ? icons.eye : icons.closeEye} style={styles.image}/>
                                </TouchableOpacity>

                            </View> : null
                    }

                </View>
            </TouchableOpacity>
        </>


    )
}
export default Main;
