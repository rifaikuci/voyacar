import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Step5 = (props) => {

    let params = props.route.params

    this.refPassword = React.createRef();
    this.refRePassword = React.createRef();
    const [textPassword, setTextPassword] = useState(params.password);
    const [textRePassword, setTextRePassword] = useState(params.rePassword);

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step4", {params: params})}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Parola Zamanı"}
                        </Text>
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.infoText}>
                            {"1 harf, 1 rakam ve 1 özel karakter içerecek şekilde en az 8 karakterden oluşmalıdır"}
                        </Text>
                    </View>

                    <Main
                        refPassword={this.refPassword}
                        setTextPassword={setTextPassword}
                        textPassword={textPassword}
                        refRePassword={this.refRePassword}
                        setTextRePassword={setTextRePassword}
                        textRePassword={textRePassword}
                    />

                </View>

            </SafeAreaView>
            {
                textPassword && textPassword.length >= 8  ?
                    <View style={styles.nextImageContent}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step6", {
                            ...params,
                            password: textPassword,
                            rePassword: textRePassword
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
export default Step5;
