import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const ForgetPassword = (props) => {
    this.mailRef = React.createRef();
    const [textMail, setTextMail] = useState('');

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Lütfen kaydolurken kullandığın e-postayı gir. Şifreni değiştirmen için bir bağlantı göndereceğiz?"}
                        </Text>
                    </View>

                    <Main refMail={this.mailRef} setTextMail={setTextMail} textMail={textMail}/>

                </View>

            </SafeAreaView>


            <View style={styles.nextImageContent}>
                <View style={{alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}
                                      style={styles.nextImageBackGround}>
                        <Text style={styles.submitText}>
                            {"Gönder"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>


    )
}
export default ForgetPassword;
