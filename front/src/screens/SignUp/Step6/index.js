import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";
import Section from "./section";


const Step6 = (props) => {
    let params = props.route.params

    this.refPhoneNumber = React.createRef();
    const [textPhoneNumber, setTextPhoneNumber] = useState(params.phoneNumber);

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Home", {params: params})}>
                            <Image source={icons.close} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Numaranı Doğrula"}
                        </Text>
                    </View>

                    <Main
                        refPhoneNumber={this.refPhoneNumber}
                        setTextPhoneNumber={setTextPhoneNumber}
                        textPhoneNumber={textPhoneNumber}
                    />
                    <View>
                        <View style={styles.divider}/>
                    </View>

                    <Section text={"Daha Sonra Yaparım"} onPress={()=> {props.navigation.navigate("Home", {params: params})}}/>

                </View>


            </SafeAreaView>
            {
                textPhoneNumber && textPhoneNumber.length >= 10  ?
                    <View style={styles.nextImageContent}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step7", {
                            ...params,
                            phoneNumber: textPhoneNumber,
                        })}
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
