import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowDown from '../assets/icons/ArrowDown';
import Colors from '../util/color';
import ArrowUp from '../assets/icons/ArrowUp';

type TransactionCardProps = {
  amount: Number;
  Icon: React.ReactNode;
  time: string;
  action: string;
};

const TransactionCard = ({
  amount,
  Icon,
  time,
  action,
}: TransactionCardProps) => {
  return (
    <View style={styles.cardContainer}>
      {Icon}
      <View style={styles.middleContainer}>
        <View style={styles.txnMiddle}>
          <View style={styles.actionContainer}>
            {action === 'Received' ? (
              <ArrowDown height={14} width={14} color={Colors.teritary} />
            ) : (
              <ArrowUp height={14} width={14} color={Colors.teritary} />
            )}
            <Text style={styles.txnAction}>{action}</Text>
          </View>
          <Text style={styles.amt}>{`${amount} sol`}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 4,
  },
  txnMiddle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txnAction: {
    color: Colors.teritary,
    fontFamily: 'Rubik-Medium',
  },
  amt: {
    color: Colors.element,
    fontSize: 16,
    fontFamily: 'Rubik-SemiBold',
    paddingLeft: 8,
  },
  time: {
    fontSize: 14,
    fontFamily: 'Rubik-Medium',
    color: 'black',
    // paddingRight: 4,
  },
});
