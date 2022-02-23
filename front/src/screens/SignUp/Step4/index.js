import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Section from "./section";


const Step4 = (props) => {
    let params = props.route.params

    function onPressMale() {

        props.navigation.navigate("Step5", {
            ...params,
            gender: "E"
        })
    }

    function onPressFemale() {

        props.navigation.navigate("Step5", {
            ...params,
            gender: "K"
        })
    }


    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step3", {params: params})}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Cinsiyetiniz Nedir?"}
                        </Text>
                    </View>

                    <Section text={"Erkek"} onPress={onPressMale}/>

                    <View>
                        <View style={styles.divider}/>
                    </View>

                    <Section text={"Kadın"} onPress={onPressFemale}/>

                </View>
            </SafeAreaView>
        </>
    )
}
export default Step4;
