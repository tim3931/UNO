import React, {useRef, useState, useEffect} from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

export const HomeScreen = ({navigation, route}) => {
    const dispatch = useDispatch();
    let UI = ["Join Room"]
    
    return (
        <View style={{flex: 1}}>
            {
                UI.map(option => {
                    return <View key={option} style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                            <Text style={{ fontSize: 30, textAlign: 'center' }}>{option}</Text>
                        </TouchableOpacity>
                    </View>
                })
            }
        </View>
    )
}