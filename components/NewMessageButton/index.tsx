import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import { useNavigation } from '@react-navigation/native'


const NewMessageButton = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Contacts');
    }
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress}>
            <MaterialCommunityIcons
                name="message-reply-text"
                size={40}
                color="white"
                />
          </TouchableOpacity>
            </View>
       )
}

export default NewMessageButton;