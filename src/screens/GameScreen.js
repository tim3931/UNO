import React, { useEffect, useState, useRef  } from 'react'
import {View, Text, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import io from "socket.io-client/dist/socket.io.js"
import * as Random from 'expo-random';

import {productURL, devURL} from '../constant'

const socket = io(devURL, {
    autoConnect: false
});  

export const GameScreen = ({navigation, route}) => {

    let name = route.params.name;
    let roomID = route.params.room;

    const [ready, setReady] = useState(false);
    const [systemLog, setSystemLog] = useState([]);
    const [userList, setUserList] = useState([]);
    const [myCard, setMyCard] = useState([]);
    const scrollViewRef = useRef();

    useEffect(() => {
        
        socket.connect();
        socket.emit("joinRoom", {name, roomID, ready});

        socket.on("systemLog", log => {
            setSystemLog(systemLog => [...systemLog, log])
        });

        socket.on("userList", list => {
            setUserList(list)
        })

        socket.on("myCard", cardList => {
            setMyCard([...myCard, ...cardList])
        })

        socket.on("systemCommand", command => {
            setSystemLog(systemLog => [...systemLog, command])
        });
    },[])


    // useEffect(() => {
    //     console.log(myCard);
    // }, [myCard])

    const showMyCards = () => {
        if(myCard && myCard.length!==0){
            return myCard.map(card => {
                let backgroundColor;
                switch(card.substring(0, 1)){
                    case "+":
                        backgroundColor="black";
                        break;
                    case "c":
                        backgroundColor="black";
                        break;
                    case "r":
                        backgroundColor="red";
                        break;
                    case "g":
                        backgroundColor="green";
                        break;
                    case "b":
                        backgroundColor="blue";
                        break;
                    case "y":
                        backgroundColor="yellow";
                        break;
                }
                return <TouchableOpacity onPress={()=> socket.emit("throw_card", card)} key={Random.getRandomBytes(12)} >
                    <View style={{ backgroundColor: backgroundColor, margin: 5, justifyContent: 'center', width: 80, height: 100 }}>
                        <Text style={{textAlign: "center", color: (backgroundColor==="yellow")?"#000":"#fff"}}>{card}</Text>
                    </View>
                </TouchableOpacity>
                
            })
        }else{
            return <Text>Empty</Text>
        }
    }

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{flex: 1, borderWidth: 2, paddingTop: 20}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 20, textAlign: 'center'}}>{userList && userList.room}</Text>
                    </View>
                    
                    <View style={{flex: 7}}>
                        {userList && userList.users && (userList.users.length !== 0) && userList.users.map(data => {
                            return <TouchableOpacity key={data.id} style={{flexDirection: "row", paddingLeft: 10}}>
                                <Text>{data.name} {data.ready?(<Text style={{fontSize: 10, color: "#3aa348"}}>{'ready'}</Text>): (<Text style={{fontSize: 10, color: "#e53134"}}>{'not ready'}</Text>)}</Text>
                            </TouchableOpacity>
                        })}
                    </View>
                    
                </View>
                <View style={{flex: 3, padding: 20, borderWidth: 2}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 20, textAlign: 'center'}}>System message</Text>
                    </View>
                    <View style={{flex: 7}}>
                        <ScrollView ref={scrollViewRef}
                            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                        >
                            {systemLog && (systemLog.length !== 0) && systemLog.map(data => {
                                return <Text key={Random.getRandomBytes(12)} >{data}</Text>
                            })}
                        </ScrollView>
                    </View>
                    
                </View>
            </View>
            
            <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
                <View style={{flex: 3, padding: 10}}>
                    <ScrollView horizontal={true}>
                        {showMyCards()}
                        
                    </ScrollView>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    {!ready && <View style={{flex: 1}}>
                        <Button style={{marginBottom: 5}} mode="contained" onPress={() => {
                            setReady(true);
                            socket.emit("state", true);
                        }}>
                            Ready
                        </Button>
                    </View>}

                    <View style={{flex: 1}}>
                        <Button style={{marginBottom: 5}} mode="contained" onPress={() => {
                            socket.emit("pass_turn");
                        }}>
                            Draw
                        </Button>
                    </View>

                    <View style={{flex: 1}}>
                        <Button style={{marginBottom: 5}} mode="contained" onPress={() => {
                            socket.disconnect(true);
                            navigation.navigate('Home')
                        }}>
                            Quit
                        </Button>
                    </View>
                </View>
                
            </View>
        </View>
    )
}