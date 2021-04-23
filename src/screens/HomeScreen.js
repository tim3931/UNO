import React, {useRef, useState, useEffect} from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

export const HomeScreen = ({navigation, route}) => {
    const dispatch = useDispatch();

    
    return (
        <View style={{flex: 1}}>
            <Text>I am HomeScreen</Text>
        </View>
    )
}