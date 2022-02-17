import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React from 'react';
import {COLORS} from "../../../../constants";


const Main = ({ refDogumTarih, setTextDogumTarih, textDogumTarih}) => {


    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refDogumTarih.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refDogumTarih = input}
                            value={textDogumTarih}
                            onChangeText={text => {

                                text.length === 2 ? setTextDogumTarih(text+"/") :
                                text.length === 5 ? setTextDogumTarih(text+"/") : setTextDogumTarih(text)
                                } }
                            style={styles.textInput}
                            placeholder={"GG/AA/YYYY"}
                            maxLength={10}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textDogumTarih  && textDogumTarih.length  > 0  ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refDogumTarih.clear()
                                    refDogumTarih.focus()
                                    setTextDogumTarih("")
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
