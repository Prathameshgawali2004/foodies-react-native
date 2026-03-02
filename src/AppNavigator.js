import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Spalsh from "./screens/Spalsh";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Details from "./screens/Details";

const Stack = createStackNavigator()
const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='Splash'
                    component={Spalsh}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name='Search'
                    component={Search}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name='Details'
                    component={Details}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>


    )
}

export default AppNavigator

