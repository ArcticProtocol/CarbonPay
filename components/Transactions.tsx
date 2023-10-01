import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowRight from '../assets/icons/ArrowRIght';
import TransactionCard from './TransactionCard';
import Solana from '../assets/icons/Solana';
import Dai from '../assets/icons/Dai';
import USDC from '../assets/icons/USDC';

const Transactions = () => {
  return (
    <View style={styles.txnContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recent Transactions</Text>
        <ArrowRight height={30} width={30} color={'black'} />
      </View>
      <View style={styles.txnCardContainer}>
        <TransactionCard
          Icon={<Solana height={42} width={42} />}
          amount={'20 Sol'}
          action={'Received'}
          time={'5 hours ago'}
        />
        <TransactionCard
          Icon={<Dai height={42} width={42} />}
          amount={'34 Dai'}
          action={'Sent'}
          time={'Yesterday'}
        />
        <TransactionCard
          Icon={<USDC height={42} width={42} />}
          amount={'48 USDC'}
          action={'Swapped'}
          time={'Yesterday'}
        />
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
    marginVertical: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 4,
  },
  txnCardContainer: {
    flexDirection: 'column',
    marginTop: 8,
    gap: 8,
  },
});
