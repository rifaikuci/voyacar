import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Step2 = ({navigation}) => {
    this.refAd = React.createRef();
    this.refSoyad = React.createRef();
    const [textAd, setTextAd] = useState('');
    const [textSoyad, setTextSoyad] = useState('');

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Step1")}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Adın ne?"}
                        </Text>
                    </View>

                    <Main
                        refAd = {this.refAd}
                        refSoyad = {this.refSoyad}
                        setTextAd = {setTextAd}
                        textAd = {textAd}
                        setTextSoyad = {setTextSoyad}
                        textSoyad = {textSoyad}
                    />

                </View>

            </SafeAreaView>
            {
                textAd && textSoyad && textAd.length > 0  && textSoyad.length > 0?
                <View style={styles.nextImageContent}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Step3")}
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
export default Step2;
