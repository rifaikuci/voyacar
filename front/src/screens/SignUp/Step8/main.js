import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React from 'react';
import {COLORS} from "../../../../constants";


const Main = ({navigation, refKod, setTextKod, textKod}) => {


    return (
        <>
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

                    {
                        textKod && textKod.length > 0 ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refKod.clear()
                                    refKod.focus()
                                    setTextKod("")
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
