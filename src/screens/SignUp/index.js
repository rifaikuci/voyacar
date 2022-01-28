import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../constants/icons";
import Section from "./section";


const SignUp = () => {
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
                        {"Nasıl Kaydolmak\nİstersiniz ?"}
                    </Text>
                </View>

                <Section text="E-post ile devam et" icon={icons.mail}/>
                <View>
                    <View style={styles.divider}/>
                </View>
                <Section text="Facebook ile devam et" icon={icons.facebook}/>


                <View style={styles.headerContent}>
                    <Text style={styles.signInLabel}>
                        {"Üye misin  yoksa?"}
                    </Text>
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.signInText}>
                        Giriş Yap
                    </Text>
                </View>

                <View style={styles.bodyContent}>
                    <Text style={styles.infoText}>
                        Kayıt olarak Şartlar ve Koşullarımız ile Gizlilik Politikamızı kabul etmiş olursun.
                    </Text>
                </View>
                <View style={styles.bodyContent}>
                    <Text style={styles.infoText}>
                        Bu bilgileri hesabının oluşturulması, rezervasyonunun yönetilmesi, hizmetlerimizin
                        kullanımı ve geliştirilmesi ile platformumuzun güvenliğinin sağlanması amacıyla hadiGo
                        tarafından toplanır.
                    </Text>
                </View>
                <View style={styles.bodyContent}>
                    <Text style={styles.infoText}>
                        Kişisel verilerinle ilgili haklara sahipsin ve bu hakları hadiGo ile iletişim formu üzerinden
                        iletişim kurarak
                        kullanabilirsin. Hakların ve kişisel verilerini nasıl kullandığımız hakkında daha fazla bilgi
                        edinmek için
                        Gizlilik Politikası bölümümüze bakabilirsiniz.
                    </Text>
                </View>
            </View>
        </SafeAreaView>

    )
}
export default SignUp;
