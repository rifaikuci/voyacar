import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Section from "./section";


const Step4 = (props) => {

   function onPressErkek() {

       props.navigation.navigate("Step5")
    }


    function onPressKadin() {

        props.navigation.navigate("Step5")
    }

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step3")}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Cinsiyetiniz Nedir?"}
                        </Text>
                    </View>

                    <Section text={"Erkek"} onPress={onPressErkek}/>

                    <View>
                        <View style={styles.divider}/>
                    </View>

                    <Section text={"Kadın"} onPress={onPressKadin}/>

                </View>
            </SafeAreaView>
        </>
    )
}
export default Step4;
