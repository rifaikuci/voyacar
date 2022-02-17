import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React, {useState} from 'react';
import {COLORS} from "../../../../constants";


const Main = ({ refSifre, setTextSifre, textSifre}) => {


    const [visible, setVisible] = useState(true);

    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refSifre.focus()}>
                <View style={styles.mainContent}>

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
        </>


    )
}
export default Main;
