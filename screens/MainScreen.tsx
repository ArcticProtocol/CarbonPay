import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import CustomTabBar from './BottomBar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import WalletCard from '../components/WalletCard';

export default function MainScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
          <Tab.Screen
            name="Screen1"
            component={Screen1}
            options={{
              tabBarLabel: 'Wallet',
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="wallet" size={24} color={color} />
              ), // Specify the icon for this taba
            }}
          />
          <Tab.Screen
            name="Screen2"
            component={Screen2}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({color}) => (
                <Icon name="user-cog" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const Screen1 = () => (
  <View>
    <WalletCard />
  </View>
);

const Screen2 = () => (
  <View>
    <Text>Screen 2</Text>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    padding: 16,
    flex: 1,
  },
  scrollContainer: {
    height: '100%',
  },
  buttonGroup: {
    flexDirection: 'column',
    paddingVertical: 4,
  },
});
