import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../screens/BottomBar';
import {RootTabParamList} from '../types/navigation/index';
import React from 'react';
import Wallet from '../assets/icons/Wallet';
import Settings from '../assets/icons/Settings';
import Setting from '../screens/Setting';
import Home from '../screens/Home';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <BottomTab.Screen
        name="Wallet"
        component={Home}
        options={{
          tabBarLabel: 'Wallet',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Wallet height={24} width={24} color={color} />
          ), // Specify the icon for this taba
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Settings height={24} width={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
