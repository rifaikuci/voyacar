import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../constants/icons";
import Section from "./section";


const SignIn = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.content}>
                <View>
                    <TouchableOpacity>
                        <Image source={icons.close} style={styles.imageClose}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>
                        {"Nasıl oturum açmak\nİstersin ?"}
                    </Text>
                </View>

                <Section text="E-posta ile devam et" icon={icons.mail}/>
                <View>
                    <View style={styles.divider}/>
                </View>
                <Section text="Facebook ile devam et" icon={icons.facebook}/>
                <View>
                    <View style={styles.divider}/>
                </View>
                <Section text="Aplle Kimlik ile devam et" icon={icons.apple}/>


                <View style={styles.headerContent}>
                    <Text style={styles.signInLabel}>
                        {"Henüz üye değil misin?"}
                    </Text>
                </View>

                <View style={styles.headerContent}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={styles.signInText}>
                        Üye Ol
                    </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>

    )
}
export default SignIn;
