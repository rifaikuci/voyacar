import React from 'react';
import { SafeAreaView, Text, View} from "react-native";


const Home = (props) => {
    console.log(props.route.params.mail)
    console.log(props.route.params.password)
    return (
        <SafeAreaView>
           <View>
               <Text>
                   {props.route.params.mail}
               </Text>
           </View>
        </SafeAreaView>

    )
}
export default Home;
