import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import React from 'react';

const Main = () => {
    return (
        <View style={styles.mainBody}>
            <View style={styles.mainTextContent}>
                <Text style={styles.mainText}>
                    hadiGo ile Düşük Ücretlerle Yolculuk Keyfi
                </Text>
            </View>

            <View style={styles.signUpBody}>
                <TouchableOpacity style={styles.signUpContent}>
                    <Text style={styles.signUpText}>
                        Üye Ol
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signInBody}>
                <TouchableOpacity>
                    <Text style={styles.signInText}>
                        Giriş Yap
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Main;
