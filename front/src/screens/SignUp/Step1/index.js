import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Step1 = (props) => {
    let params = props.route.params ? props.route.params : {
        firstName: null,
        lastName: null,
        mail: null,
        phoneNumber: null,
        birthDate: null,
        gender: null,
        password: null,
        rePassword: null,
        marketingPermission: null
    }

    this.mailRef = React.createRef();
    const [textMail, setTextMail] = useState(params.mail);
    const [checkMarketingPermission, setCheckMarketingPermission] = useState(true);

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
                            {"E-posta adresin nedir ?"}
                        </Text>
                    </View>

                    <Main refMail={this.mailRef} setTextMail={setTextMail} textMail={textMail}
                          checkMarketingPermission={checkMarketingPermission}
                          setCheckMarketingPermission={setCheckMarketingPermission}/>

                </View>

            </SafeAreaView>
            {
                textMail && textMail.length > 0 ?
                    <View style={styles.nextImageContent}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Step2", {
                                ...params,
                                mail: textMail.trim(),
                                marketingPermission: checkMarketingPermission
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
export default Step1;
