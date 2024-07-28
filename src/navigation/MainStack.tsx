import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "~/screens/HomeScreen";
import { ScreenName } from "./type";
import React from "react";
import { screenOptions } from "./screenOptions";

interface MainStackProps {
    state: object
}

const Stack = createStackNavigator()

const MainStack: React.FC<MainStackProps> = ({ state }) => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.Home} screenOptions={screenOptions}>
            <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
        </Stack.Navigator>);
}

export default MainStack;