import moment from 'moment';
import React from 'react'
import { View , Text, Image, TouchableWithoutFeedback} from 'react-native';
import { Users } from '../../types'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
export type ContactListItemProps = {
    user: Users;
}

const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();
 
    const onClick = () => {
       // navigate with chat room
    }
    return (
          <TouchableWithoutFeedback onPress={onClick}>
          <View style={styles.container}>
              
              <View style={styles.leftContainer}>
              <Image source={{ uri: user.imageUri }}
                  style={styles.avatar} />

              <View style={styles.midContainer}>
              <Text style={styles.username}>{user.name}</Text>
              <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
              </View>
              </View>
          </View>
           </TouchableWithoutFeedback>
     )
};

export default ContactListItem; 