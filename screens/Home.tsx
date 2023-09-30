import {StyleSheet, View} from 'react-native';
import React from 'react';
import WalletCard from '../components/WalletCard';
import {Text} from 'react-native';
import OffsetCard from '../components/OffsetCard';
import Colors from '../util/color';
import Transactions from '../components/Transactions';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Welcome to </Text>
        <Text style={styles.appName}>CarbonPay 🎉</Text>
      </View>
      <WalletCard />
      <View style={styles.refiApps}></View>
      <OffsetCard />
      <Transactions />
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
    color: Colors.teritary,
    fontFamily: 'Rubik-Bold',
    fontSize: 22,
  },
  container: {
    padding: 8,
  },
  textContainer: {
    flexDirection: 'row',
    padding: 4,
  },
  refiApps: {
    paddingVertical: 60,
  },
});
