import React from 'react';
import {
    ForgetPassword, Home, Login, SignIn, SignUp, Step1, Step2, Step3, Step4, Step5, Step6, Step7, Welcome
} from "./src/screens";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {LogBox} from 'react-native';
import Step8 from "./src/screens/SignUp/Step8";

LogBox.ignoreLogs(["[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",]);

const theme = {
    ...DefaultTheme, colors: {
        ...DefaultTheme.colors, border: "transparent",
    },
};


const Stack = createStackNavigator();

const App = () => {

    return (<NavigationContainer theme={theme}>
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'Welcome'}>
            <Stack.Screen name="Welcome" options={({navigation, route}) => {
                return {...route.options}
            }} component={Welcome}/>
            <Stack.Screen name="SignUp" options={({navigation, route}) => {
                return {...route.options}
            }} component={SignUp}/>
            <Stack.Screen name="SignIn" options={({navigation, route}) => {
                return {...route.options}
            }} component={SignIn}/>
            <Stack.Screen name="Step1" options={({navigation, route}) => {
                return {...route.options}
            }} component={Step1}/>
            <Stack.Screen name="Step2" options={({navigation, route}) => {
                return {...route.options}
            }} component={Step2}/>
            <Stack.Screen name="Step3" options={({navigation, route}) => {
                return {...route.options}
            }} component={Step3}/>
            <Stack.Screen name="Step4" options={({navigation, route}) => {
                return {...route.options}
            }} component={Step4}/>
            <Stack.Screen name="Step5" options={({navigation, route}) => {
                return {...route.options}
            }} component={Step5}/>
            <Stack.Screen name="Step6" options={({navigation, route}) => {
                return {...route.options}
            }} component={Step6}/>
            <Stack.Screen name="Step7" options={({navigation, route}) => {
                return {...route.options}
            }} component={Step7}/>
            <Stack.Screen name="Step8" options={({navigation, route}) => {
                return {...route.options}
            }} component={Step8}/>
            <Stack.Screen name="Home" options={({navigation, route}) => {
                return {...route.options}
            }} component={Home}/>
            <Stack.Screen name="Login" options={({navigation, route}) => {
                return {...route.options}
            }} component={Login}/>
            <Stack.Screen name="ForgetPassword" options={({navigation, route}) => {
                return {...route.options}
            }} component={ForgetPassword}/>
        </Stack.Navigator>
    </NavigationContainer>)
}
export default App;
