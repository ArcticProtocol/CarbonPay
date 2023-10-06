import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import WalletCard from '../components/WalletCard';
import {Text} from 'react-native';
import OffsetCard from '../components/OffsetCard';
import Colors from '../util/color';
import Transactions from '../components/Transactions';
import CollectedNFT from '../components/CollectedNFT';
import {CustomBottomSheetView} from '../components/bottomSheet/BottomSheet';
import {AppsView} from '../components/Apps';

const Home = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Welcome to </Text>
        <Text style={styles.appName}>CarbonPay 🎉</Text>
      </View>
      <WalletCard sendCta={toggleBottomNavigationView} />

      <View style={styles.refiApps}>
        <AppsView />
      </View>
      <OffsetCard />
      <Transactions />
      <CollectedNFT />
      <CustomBottomSheetView
        visible={visible}
        toggleBottomNavigationView={toggleBottomNavigationView}
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
});
