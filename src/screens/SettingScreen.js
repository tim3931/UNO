import React, {useRef, useState} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {Button, Divider} from 'react-native-paper'
import {AntDesign} from '@expo/vector-icons'
import {useDispatch} from 'react-redux'

const setting = [
    { 
      title: "Audio",
      redirect: "Home",
    }
];

export const SettingScreen = ({navigation}) => {
    const dispatch = useDispatch();
    return (
      <ScrollView>
          {setting.map(val => {
              return (
                <TouchableOpacity 
                  key={val.title}
                  onPress={() => navigation.navigate(val.redirect)}  
                >
                  <View
                    style={{
                      backgroundColor: '#fff',
                      paddingHorizontal: 20,
                      paddingVertical: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{fontSize: 15}}>{val.title}</Text>
                    <AntDesign name="right" size={15} color="#999" />
                  </View>
                  <Divider/>
                </TouchableOpacity>
              )
              
          })}
        </ScrollView>
    )
}