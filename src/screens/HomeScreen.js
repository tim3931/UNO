import React, {useRef, useState, useEffect} from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

export const HomeScreen = ({navigation, route}) => {
    const dispatch = useDispatch();
    let UI = [{
        text: "Login", 
        redirect: "Auth"
    }, {
        text: "Play without login", 
        redirect: "NoLogin"
    }]
    
    return (
        <View style={{flex: 1}}>
            {
                UI.map(option => {
                    return <View key={option.text} style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate(option.redirect)}>
                            <Text style={{ fontSize: 30, textAlign: 'center' }}>{option.text}</Text>
                        </TouchableOpacity>
                    </View>
                })
            }
        </View>
    )
}