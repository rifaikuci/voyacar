import React from 'react';
import {ImageBackground, View} from "react-native";
import styles from "./styles";
import Main from "./main";
import images from "../../../constants/images";


const Welcome = ( {navigation}) => {
    return (
        <View style={styles.main}>
            <View style={styles.contentTopBody}>
                <ImageBackground source={images.welcome}
                                 style={styles.image}/>
            </View>

            <View style={styles.contentBottomBody}>
                <Main navigation={navigation}/>
            </View>
        </View>
    )
}
export default Welcome;
