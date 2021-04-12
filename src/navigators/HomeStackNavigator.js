import React, {useEffect} from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {AntDesign} from "@expo/vector-icons";
import { useDispatch } from 'react-redux';

import {HomeScreen} from '../screens/HomeScreen'



const Stack = createStackNavigator();
export const HomeStackNavigator = ({navigation, route}) => {
    const dispatch = useDispatch();
    return(
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerTitle: "UNO",
                headerStyle: {
                    backgroundColor: "#e53134",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitleAlign: "center",
                headerBackTitleVisible: false,

            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />

        </Stack.Navigator>
    )
}