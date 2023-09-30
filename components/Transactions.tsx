import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowRight from '../assets/icons/ArrowRIght';
import Colors from '../util/color';
import TransactionCard from './TransactionCard';

const Transactions = () => {
  return (
    <View style={styles.txnContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recent Transactions</Text>
        <ArrowRight height={40} width={40} color={'black'} />
      </View>
      <View>
        <TransactionCard />
      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Rubik-Bold',
  },
  txnContainer: {
    marginVertical: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 4,
  },
});
