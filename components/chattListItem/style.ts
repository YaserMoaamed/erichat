import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      padding: 12
  },
  leftContainer: {
   flexDirection: 'row'
  },
  midContainer: {
     justifyContent: 'space-around'
  },
    avatar: {
      width: 60,
      height: 60,
      marginRight: 15,
      borderRadius: 50
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  lastMessage: {
    fontSize: 16,
    color: 'gray',
    width: '100%'
   },
  date: {
    fontSize: 14,
    color: 'gray',
  }
  
})

export default styles