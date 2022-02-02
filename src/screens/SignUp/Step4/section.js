import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import icons from "../../../../constants/icons";


const Section = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.headerContent}>
                <View style={styles.sectionContent}>
                    <View style={styles.subSection}>
                        <View style={styles.subContentText}>
                            <Text style={styles.subText}>{text}</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={styles.subImageRight} source={icons.next}/>

                    </View>
                </View>
            </View>
        </TouchableOpacity>


    )
}
export default Section;
