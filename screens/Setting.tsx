import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useStore} from '../store/store';
import Colors from '../util/color';
import createConnection from '../util/createConnection';

const Setting = () => {
  const {publicKey, privateKey, seedText} = useStore();
  const checkBalance = async () => {
    const connection = createConnection();
    console.log(connection, 'this is connection');
    console.log(publicKey?.toJSON());
    console.log(privateKey);
    console.log(seedText);

    const lamports = await connection.getBalance(publicKey).catch(err => {
      console.error(`Error: ${err}`);
    });
    console.log('this is lamports', lamports / 1000000000);
  };
  useEffect(() => {
    setTimeout(() => {
      checkBalance();
    }, 3000);
  }, []);
  return (
    <View>
      <Text style={styles.bruh}>{publicKey?.toString()}</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  bruh: {
    color: Colors.teritary,
    fontSize: 20,
  },
});
