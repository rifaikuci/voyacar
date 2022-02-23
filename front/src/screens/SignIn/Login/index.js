import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Login = (props) => {
    this.refMail = React.createRef();
    this.refPassword = React.createRef();
    const [textMail, setTextMail] = useState('');
    const [textPassword, setTextPassword] = useState('');

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
                            {"E-posta ve Parola nedir ?"}
                        </Text>
                    </View>

                    <Main
                        refMail={this.refMail}
                        refPassword={this.refPassword}
                        textMail={textMail}
                        setTextMail={setTextMail}
                        textPassword={textPassword}
                        setTextPassword={setTextPassword}
                        props = {props}
                    />

                </View>

            </SafeAreaView>
            {
                textMail && textMail.length > 0  && textPassword && textPassword.length > 0 ?
                <View style={styles.nextImageContent}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("Home", {
                        mail : textMail,
                        password: textPassword
                    })}
                                      style={styles.nextImageBackGround}>
                        <Image source={icons.nextRight}
                               style={styles.nextImage}
                        />
                    </TouchableOpacity>
                </View> : null
            }

        </>


    )
}
export default Login;
