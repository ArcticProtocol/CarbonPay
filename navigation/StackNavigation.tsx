import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../types/navigation';
import BottomTabNavigator from './BottomTabNavigation';
import {CustomWebView} from '../components/CustomWebView';
import Login from '../screens/Login';

export default function StackNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
      }}
      initialRouteName={'Login'}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          animation: 'default',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="WebView" component={CustomWebView} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animation: 'default',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
