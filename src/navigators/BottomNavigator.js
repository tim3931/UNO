import React from 'react'
import {StyleSheet} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Entypo, AntDesign} from "@expo/vector-icons";
import {useSelector} from 'react-redux';


import {HomeStackNavigator} from './HomeStackNavigator'


const Tab = createBottomTabNavigator();

export default function BottomNavigator(){
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.status);
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Home":
                return <AntDesign name="home" size={size} color={color} />;
              default:
                break;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#e53134",
          inactiveTintColor: "gray",
        }}
      >
          <Tab.Screen name='Home' component={HomeStackNavigator} options={{title: "主頁"}}/>
      </Tab.Navigator>
  )
}