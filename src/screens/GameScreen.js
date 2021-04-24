import React, { useEffect } from 'react'
import {View, Text} from 'react-native'
import socketIO from 'socket.io-client'

export const GameScreen = ({navigation, route}) => {

    useEffect(() => {
        console.log('yes');
        const socket = socketIO('http://localhost:5000', {
            transports: ['websocket'], 
            jsonp: false 
          }); 
          socket.connect(); 
          socket.on('connect', () => { 
            console.log('connected to socket server'); 
          });
    })

    return (
        <View>
            <Text>I am GameScreen.</Text>
        </View>
    )
}