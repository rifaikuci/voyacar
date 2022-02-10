import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React, {useState} from 'react';
import {COLORS} from "../../../../constants";


const Main = ({navigation, refTelefon, setTextTelefon, textTelefon}) => {


    const [visible, setVisible] = useState(true);

    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refTelefon.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refTelefon = input}
                            value={"+90"+textTelefon}
                            onChangeText={text => {
                                setTextTelefon(text.substr(3))
                            } }
                            keyboardType={"phone-pad"}
                            style={styles.textInput}
                            placeholder={"Telefon"}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textTelefon && textTelefon.length > 0 ?
                            <View>
                                 <TouchableOpacity onPress={() => {
                                    refTelefon.clear()
                                    refTelefon.focus()
                                    setTextTelefon("")
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
