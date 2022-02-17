import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Login = (props) => {
    this.refMail = React.createRef();
    this.refSifre = React.createRef();
    const [textMail, setTextMail] = useState('');
    const [textSifre, setTextSifre] = useState('');

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
                        refSifre={this.refSifre}
                        textMail={textMail}
                        setTextMail={setTextMail}
                        textSifre={textSifre}
                        setTextSifre={setTextSifre}
                        props = {props}
                    />

                </View>

            </SafeAreaView>
            {
                textMail && textMail.length > 0  && textSifre && textSifre.length > 0 ?
                <View style={styles.nextImageContent}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("Home", {
                        mail : textMail,
                        password: textSifre
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
