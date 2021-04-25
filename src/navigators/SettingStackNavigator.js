import React, {useEffect} from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {AntDesign} from "@expo/vector-icons";
import { useDispatch } from 'react-redux';

import {SettingScreen} from '../screens/SettingScreen'; 
import {AudioScreen} from '../screens/AudioScreen';

const Stack = createStackNavigator();
export const SettingStackNavigator = ({navigation, route}) => {
    const dispatch = useDispatch();
    return(
        <Stack.Navigator 
            initialRouteName="Setting"
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
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Audio" component={AudioScreen} />
        </Stack.Navigator>
    )
}