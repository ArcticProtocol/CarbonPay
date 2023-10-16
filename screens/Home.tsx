import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WalletCard from '../components/WalletCard';
import {Text} from 'react-native';
import OffsetCard from '../components/OffsetCard';
import Colors from '../util/color';
import Transactions from '../components/Transactions';
import CollectedNFT from '../components/CollectedNFT';
import {CustomBottomSheetView} from '../components/bottomSheet/BottomSheet';
import {AppsView} from '../components/Apps';
import {useTransactionStore} from '../store/transaction_store';
import {NFTSheet} from '../components/bottomSheet/NFTSheet';
import SendTransaction from '../components/bottomSheet/SendTransactionView';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [NFTSheetVisible, setNFTSheetVisible] = useState(false);
  const {balances, fetchBalance, fetchTransactionHistory} =
    useTransactionStore();

  useEffect(() => {
    fetchBalance();
    fetchTransactionHistory();
  }, []);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const toggleNFTSheet = () => {
    setNFTSheetVisible(!NFTSheetVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Welcome to </Text>
        <Text style={styles.appName}>CarbonPay 🎉</Text>
      </View>
      <WalletCard balances={balances} sendCta={toggleBottomNavigationView} />

      <View style={styles.refiApps}>
        <AppsView />
      </View>
      <OffsetCard />
      <Transactions />
      <CollectedNFT />
      <View style={styles.bottomPadding} />

      <CustomBottomSheetView
        visible={visible}
        toggleBottomNavigationView={toggleBottomNavigationView}
        bottomsheetChild={
          <SendTransaction toggleNFTSheetView={toggleNFTSheet} address="" />
        }
      />
      <NFTSheet
        visible={NFTSheetVisible}
        toggleBottomNavigationView={toggleNFTSheet}
      />
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
    paddingVertical: 10,
  },

  bottomPadding: {
    paddingBottom: 100,
  },
});
