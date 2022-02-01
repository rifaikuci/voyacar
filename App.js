import React from 'react';
import {SignIn, SignUp, Step1, Step2, Welcome} from "./src/screens";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'Step2'} >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Step1" component={Step1} />
                <Stack.Screen name="Step2" component={Step2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
