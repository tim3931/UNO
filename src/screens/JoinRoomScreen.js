import React, {useState} from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'

export const JoinRoomScreen = ({navigation, route}) => {
    const [roomID, setRoomID] = useState(null);

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, padding: 30}}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold"
                }}>Room ID:</Text>
                <TextInput
                    style={{
                        color: "grey",
                        alignSelf: "stretch",
                        fontSize: 18,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        backgroundColor: "#e6e6e6",
                    }}
                    placeholder={""}
                    textColor="black"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(text) => {setRoomID(text)}}
                />
            </View>
            <View style={{flex: 1,  justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>Join</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}