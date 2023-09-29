import {StyleSheet, View} from 'react-native';
import React from 'react';
import WalletCard from '../components/WalletCard';
import {Text} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Welcome to </Text>
        <Text style={styles.appName}>CarbonPay 🎉</Text>
      </View>
      <WalletCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  greetingText: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'Rubik-Bold',
  },
  appName: {
    color: '#4F772D',
    fontFamily: 'Rubik-Bold',
    fontSize: 22,
  },
  container: {
    padding: 6,
  },
  textContainer: {
    flexDirection: 'row',
    padding: 4,
  },
});
