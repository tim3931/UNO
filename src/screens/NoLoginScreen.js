import React, {useState} from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import {HelperText, RadioButton} from 'react-native-paper'

export const NoLoginScreen = ({navigation, route}) => {
    const [playerName, setCurrentPlayerName] = useState(null);
    const [room, setRoom] = React.useState('Room1');

    const hasErrors = () => {
        return !playerName;
      };

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, padding: 30}}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold"
                    }}>Your Name:</Text>
                    <TextInput
                        style={{
                            color: "grey",
                            alignSelf: "stretch",
                            fontSize: 18,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            backgroundColor: "#e6e6e6",
                        }}
                        placeholder={"Name"}
                        textColor="black"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(text) => {setCurrentPlayerName(text)}}
                    />
                    <HelperText type="error" visible={hasErrors()}>
                        You need to input a name
                    </HelperText>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <RadioButton
                            style={{flex: 1}}
                            value="Room1"
                            status={ room === 'Room1' ? 'checked' : 'unchecked' }
                            onPress={() => setRoom('Room1')}
                        />
                        <Text style={{flex: 1, padding: 5}}>Room1</Text>
                    </View>
                    {/* <View style={{flex: 1,  flexDirection: 'row'}}>
                        <RadioButton
                            value="Room2"
                            status={ room === 'Room2' ? 'checked' : 'unchecked' }
                            onPress={() => setRoom('Room2')}
                        />
                        <Text style={{flex: 1, padding: 5}}>Room2</Text>
                    </View> */}
                </View>
            </View>
            <View style={{flex: 1,  justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => {
                    if(playerName){
                        navigation.navigate('Game', {
                            name: playerName,
                            room: room
                        })
                    }
                }}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>Play</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}