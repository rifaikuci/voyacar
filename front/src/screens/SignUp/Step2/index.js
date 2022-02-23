import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Step2 = (props) => {
    let params = props.route.params
    this.refFirstName = React.createRef();
    this.refLastName = React.createRef();
    const [textFirstName, setTextFirstName] = useState(params.firstName);
    const [textLastName, setTextLastName] = useState(params.lastName);

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step1" , {params : params})}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Adınız ne?"}
                        </Text>
                    </View>

                    <Main
                        refFirstName={this.refFirstName}
                        refLastName={this.refLastName}
                        setTextFirstName={setTextFirstName}
                        textFirstName={textFirstName}
                        setTextLastName={setTextLastName}
                        textLastName={textLastName}
                    />

                </View>

            </SafeAreaView>
            {
                textFirstName && textLastName && textFirstName.length > 0 && textLastName.length > 0 ?
                    <View style={styles.nextImageContent}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step3", {
                            ...params,
                            firstName: textFirstName,
                            lastName: textLastName
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
export default Step2;
