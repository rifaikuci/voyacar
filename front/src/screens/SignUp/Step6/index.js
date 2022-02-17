import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";
import Section from "./section";


const Step6 = (props) => {
    this.refTelefon = React.createRef();
    const [textTelefon, setTextTelefon] = useState('');

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                            <Image source={icons.close} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Numaranı Doğrula"}
                        </Text>
                    </View>

                    <Main
                        refTelefon={this.refTelefon}
                        setTextTelefon={setTextTelefon}
                        textTelefon={textTelefon}
                    />
                    <View>
                        <View style={styles.divider}/>
                    </View>

                    <Section text={"Daha Sonra Yaparım"} onPress={()=> {props.navigation.navigate("Home")}}/>

                </View>


            </SafeAreaView>
            {
                textTelefon && textTelefon.length >= 10  ?
                    <View style={styles.nextImageContent}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step7")}
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
export default Step6;
