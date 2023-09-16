import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../util/color';

const WalletCard = () => {
  return (
    <>
      <View style={styles.card}>
        <View style={{flex: 1}}>
          <View style={styles.content}>
            <View style={styles.iconsRow}>
              <Icon name="notifications-circle" size={40} style={styles.icon} />
            </View>
          </View>
        </View>

        <View style={styles.amountRow}>
          <Text style={styles.amountText}>$500</Text>
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
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  card: {
    height: '55%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 4,
    overflow: 'hidden',
    display: 'flex',
    backgroundColor: Colors.teritary,
    paddingHorizontal: 20,
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
    alignItems: 'flex-start',
  },
  amountText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: Colors.background,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    flex: 1,
    marginHorizontal: 6,
    marginVertical: 4,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletCard;
