import { Ionicons, Fontisto } from '@expo/vector-icons';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import * as React from 'react';
 
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import CameraScreen from '../screens/CameraScreen'
import StatusScreen from '../screens/StatusScreen';
import { MainTabParamList } from '../types';
import { color } from 'react-native-reanimated';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
       tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: { backgroundColor: Colors[colorScheme].tint },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 2,
        },
         labelStyle: { fontWeight: 'bold' },
        showIcon: true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={'white'}
            size={18}/>,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
      />
      <MainTab.Screen
        name="Status"
        component={StatusScreen}
      />
      <MainTab.Screen
        name="Calls"
        component={StatusScreen}
      />
    </MainTab.Navigator>
  );
}
