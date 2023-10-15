import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ArrowRight from '../assets/icons/ArrowRIght';
import TransactionCard from './TransactionCard';
import Solana from '../assets/icons/Solana';
import {useTransactionStore} from '../store/transaction_store';
import getDifference from '../util/getDateDifference';
import {TransactionsSheet} from './bottomSheet/TransactionsSheet';

const Transactions = () => {
  const {transactionHistory} = useTransactionStore();
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  const renderItem = ({item}) => {
    return (
      <TransactionCard
        Icon={<Solana height={42} width={42} />}
        amount={(item.postBalances[1] - item.preBalances[1]) / 1000000000}
        action={
          item.postBalances[1] > item.preBalances[1] ? 'Received' : 'Sent'
        }
        time={getDifference(item?.blockTime)}
      />
    );
  };
  return (
    <View style={styles.txnContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recent Transactions</Text>
        <TouchableOpacity onPress={toggleVisible}>
          <ArrowRight height={30} width={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.txnCardContainer}>
        <FlatList
          data={transactionHistory.slice(0, 2)}
          // keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <TransactionsSheet
        toggleBottomNavigationView={toggleVisible}
        visible={visible}
      />
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
    marginTop: 20,
    marginBottom: 10,
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
  },
});
