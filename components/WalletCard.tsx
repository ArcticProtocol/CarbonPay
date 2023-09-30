import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../util/color';
import Notifications from '../assets/icons/Notifications';
import USDC from '../assets/icons/USDC';
import Dai from '../assets/icons/Dai';
import Solana from '../assets/icons/Solana';

const WalletCard = () => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.amountRow}>
          <Text style={styles.amountText}>$5990</Text>
          <View style={styles.NotificationContainer}>
            <Notifications height={24} width={24} color={'white'} />
          </View>
        </View>
        <View style={styles.middleRow}>
          <Text style={styles.middleText}>$SOl 2.34</Text>
          <View style={styles.middleAvatars}>
            <View>
              <USDC height={28} width={28} />
            </View>
            <View style={styles.dai}>
              <Dai height={28} width={28} />
            </View>
            <View style={styles.solana}>
              <Solana height={16} width={16} />
            </View>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txButton}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txButton}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txButton}>QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  txButton: {
    color: Colors.teritary,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Rubik-Regular',
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    backgroundColor: Colors.element,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  NotificationContainer: {
    height: 32,
    width: 30,
    borderRadius: 20,
    backgroundColor: Colors.teritary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginHorizontal: 10,
    alignSelf: 'flex-start',
  },
  amountRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountText: {
    fontSize: 40,
    color: Colors.background,
    fontFamily: 'Rubik-Medium',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 8,
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleText: {
    fontSize: 16,
    color: Colors.teritary,
    fontFamily: 'Rubik-SemiBold',
    marginTop: -8,
  },
  middleAvatars: {
    flexDirection: 'row',
  },
  dai: {
    marginLeft: -12,
  },
  solana: {
    marginLeft: -12,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

export default WalletCard;
