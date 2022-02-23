import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Step8 = (props) => {
    let params = props.route.params

    this.refSmsOtp = React.createRef();
    const [textSmsOtp, setTextSmsOtp] = useState('');

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step7", {params: params})}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"SMS ile Gelen SmsOtp?"}
                        </Text>
                    </View>

                    <Main
                        refSmsOtp={this.refSmsOtp}
                        setTextSmsOtp={setTextSmsOtp}
                        textSmsOtp={textSmsOtp}
                    />

                </View>

            </SafeAreaView>
            {
                textSmsOtp && textSmsOtp.length === 4 ?
                    <View style={styles.nextImageContent}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}
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
export default Step8;
