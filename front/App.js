import React from 'react';
import {
    ForgetPassword,
    Home,
    Login,
    SignIn,
    SignUp,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Welcome
} from "./src/screens";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { LogBox } from 'react-native';
import Step8 from "./src/screens/SignUp/Step8";

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
                initialRouteName={'Welcome'} >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Step1" component={Step1} />
                <Stack.Screen name="Step2" component={Step2} />
                <Stack.Screen name="Step3" component={Step3} />
                <Stack.Screen name="Step4" component={Step4} />
                <Stack.Screen name="Step5" component={Step5} />
                <Stack.Screen name="Step6" component={Step6} />
                <Stack.Screen name="Step7" component={Step7} />
                <Stack.Screen name="Step8" component={Step8} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
