import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../types/navigation';
import BottomTabNavigator from './BottomTabNavigation';

export default function StackNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
      }}
      initialRouteName={'Root'}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          animation: 'default',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
