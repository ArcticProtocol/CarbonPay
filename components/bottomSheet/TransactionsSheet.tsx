import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import Colors from '../../util/color';
import React from 'react';
import TransactionCard from '../../components/TransactionCard';
import {useTransactionStore} from '../../store/transaction_store';
import Solana from '../../assets/icons/Solana';
import getDifference from '../../util/getDateDifference';

type BottomSheetParams = {
  visible: boolean;
  toggleBottomNavigationView: () => void;
};

export const TransactionsSheet = ({
  visible,
  toggleBottomNavigationView,
}: BottomSheetParams) => {
  const {transactionHistory} = useTransactionStore();

  const renderItem = ({item}: any) => {
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
    <BottomSheet
      visible={visible}
      //setting the visibility state of the bottom shee
      onBackButtonPress={toggleBottomNavigationView}
      //Toggling the visibility state on the click of the back botton
      onBackdropPress={toggleBottomNavigationView}
      //Toggling the visibility state on the clicking out side of the sheet
    >
      <View style={styles.bottomNavigationView}>
        <FlatList
          data={transactionHistory}
          // keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ListHeaderComponent={
            <Text style={styles.title}>Your Transactions</Text>
          }
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Rubik-Bold',
    marginBottom: 12,
  },
});
