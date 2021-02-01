import { FontAwesome, FontAwesome5, Entypo, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const InputBox = () => {
    const [message, setMessage] = useState('');
    const onMicrophonePress = () => {
          console.warn(`Microphone`)
    }
    const onSendPress = () => {
        console.warn(`Sending: ${message}`)
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress()
            }
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh" size={24} color="gray" />
                <TextInput
                    placeholder="Type a Message"
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo
                    style={styles.icon}
                    name="attachment"
                    size={24}
                    color="gray" />
               {!message && <Fontisto name="camera" size={24} color="gray" style={styles.icon}/>}
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {
                     !message
                    ? <MaterialCommunityIcons name="microphone" size={24} color="white" />
                    : <FontAwesome name="send" size={24} color="white" />
                }
                </View>
                </TouchableOpacity>
        </View>
    )
}

export default InputBox;