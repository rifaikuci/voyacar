import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Section from "./section";


const Step7 = (props) => {
    let params = props.route.params

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step6", {params: params})}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Bu numara başka bir hesaba zaten bağlı. Aynı şekilde kullanmaya devam etmek ister misin?"}
                        </Text>
                    </View>

                    <View style={styles.infoContent}>
                        <Text style={styles.infoText}>
                            {"r*************@gmail.com"}
                        </Text>
                    </View>

                    <Section text={"Evet, eski hesabıma bağlanmama izin ver"}
                             onPress={() => props.navigation.navigate("SignIn")}/>

                    <View>
                        <View style={styles.divider}/>
                    </View>

                    <Section text={"Hayır, telefon numaramı yeni hesabıma bağla"}
                             onPress={() => props.navigation.navigate("Step8")}/>

                </View>
            </SafeAreaView>
        </>
    )
}
export default Step7;
