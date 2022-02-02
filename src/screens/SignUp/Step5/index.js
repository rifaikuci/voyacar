import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Step5 = ({navigation}) => {
    this.refSifre = React.createRef();
    const [textSifre, setTextSifre] = useState('');

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Step4")}>
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
                        refSifre={this.refSifre}
                        setTextSifre={setTextSifre}
                        textSifre={textSifre}
                    />

                </View>

            </SafeAreaView>
            {
                textSifre && textSifre.length >= 8  ?
                    <View style={styles.nextImageContent}>
                        <TouchableOpacity onPress={() => navigation.navigate("Step6")}
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
