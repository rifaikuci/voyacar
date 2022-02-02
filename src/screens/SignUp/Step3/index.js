import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Step3 = ({navigation}) => {
    this.refDogumTarih = React.createRef();
    const [textDogumTarih, setTextDogumTarih] = useState('');

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Step2")}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Doğum  Tarihin?"}
                        </Text>
                    </View>

                    <Main
                        refDogumTarih = {this.refDogumTarih}
                        setTextDogumTarih = {setTextDogumTarih}
                        textDogumTarih = {textDogumTarih}
                    />

                </View>

            </SafeAreaView>
            {
                textDogumTarih && textDogumTarih.length === 10 ?
                <View style={styles.nextImageContent}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Step4")}
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
export default Step3;
