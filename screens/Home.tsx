import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import WalletCard from '../components/WalletCard';
import {Text} from 'react-native';
import OffsetCard from '../components/OffsetCard';
import Colors from '../util/color';
import Transactions from '../components/Transactions';
import CollectedNFT from '../components/CollectedNFT';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Welcome to </Text>
        <Text style={styles.appName}>CarbonPay 🎉</Text>
      </View>
      <WalletCard />
      <View style={styles.refiApps}></View>
      <OffsetCard />
      <Transactions />
      <CollectedNFT />
    </ScrollView>
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
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  textContainer: {
    flexDirection: 'row',
    padding: 4,
  },
  refiApps: {
    paddingVertical: 60,
  },
});
