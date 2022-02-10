import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Section from "./section";


const Step7 = ({navigation}) => {

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Step6")}>
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
                             onPress={() => navigation.navigate("SignIn")}/>

                    <View>
                        <View style={styles.divider}/>
                    </View>

                    <Section text={"Hayır, telefon numaramı yeni hesabıma bağla"}
                             onPress={() => navigation.navigate("Step8")}/>

                </View>
            </SafeAreaView>
        </>
    )
}
export default Step7;
