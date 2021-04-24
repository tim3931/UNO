import React, {useState} from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import {HelperText} from 'react-native-paper'

export const NoLoginScreen = ({navigation, route}) => {
    const [playerName, setCurrentPlayerName] = useState(null);

    const hasErrors = () => {
        return !playerName;
      };

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, padding: 30}}>
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
            <View style={{flex: 1,  justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => {
                    if(playerName){
                        navigation.navigate('JoinRoom')
                    }
                }}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>Play</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}