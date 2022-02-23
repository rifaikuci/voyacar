import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import React from 'react';
import {COLORS} from "../../../../constants";


const Main = ({ refFirstName, refLastName, textFirstName, setTextFirstName, textLastName, setTextLastName}) => {

    return (
        <>
            <TouchableOpacity activeOpacity={1} onPress={() => refFirstName.focus()}>
                <View style={styles.mainContent}>

                    <View>
                        <TextInput
                            ref={input => refFirstName = input}
                            value={textFirstName}
                            onChangeText={text => setTextFirstName(text)}
                            style={styles.textInput}
                            placeholder={"FirstName"}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textFirstName  && textFirstName.length  > 0  ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refFirstName.clear()
                                    refFirstName.focus()
                                    setTextFirstName("")
                                }}>

                                    <Image source={icons.close} style={styles.imageClose}/>
                                </TouchableOpacity>

                            </View> : null
                    }

                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => refLastName.focus()}>
                <View style={styles.mainContent2}>

                    <View>
                        <TextInput
                            ref={input => refLastName = input}
                            value={textLastName}
                            onChangeText={text => setTextLastName(text)}
                            style={styles.textInput}
                            placeholder={"LastName"}
                            placeholderTextColor={COLORS.primary}/>
                    </View>

                    {
                        textLastName  && textLastName.length  > 0  ?
                            <View>
                                <TouchableOpacity onPress={() => {
                                    refLastName.clear()
                                    refLastName.focus()
                                    setTextLastName("")
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
