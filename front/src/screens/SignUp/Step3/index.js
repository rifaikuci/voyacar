import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";
import Main from "./main";


const Step3 = (props) => {
    let params = props.route.params
    this.refBirthDate = React.createRef();
    const [textBirthDate, setTextBirthDate] = useState(params.birthDate);

    return (
        <>
            <SafeAreaView>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Step2", {params: params})}>
                            <Image source={icons.back} style={styles.imageBack}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>
                            {"Doğum  Tarihin?"}
                        </Text>
                    </View>

                    <Main
                        refBirthDate={this.refBirthDate}
                        setTextBirthDate={setTextBirthDate}
                        textBirthDate={textBirthDate}
                    />

                </View>

            </SafeAreaView>
            {
                textBirthDate && textBirthDate.length === 10 ?
                    <View style={styles.nextImageContent}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Step4", {...params, birthDate: textBirthDate})}
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
export default Step3;
