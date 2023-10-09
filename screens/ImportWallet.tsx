import {
  ActivityIndicator,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../util/color';
import Copy from '../assets/icons/Copy';
import Clipboard from '@react-native-clipboard/clipboard';
import * as bip39 from 'bip39';
import {Keypair} from '@solana/web3.js';
import {useStore} from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {fromByteArray} from 'base64-js';

const ImportWallet = () => {
  const [seed, setSeed] = React.useState<string>('');
  const [valid, setValid] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const navigation = useNavigation();

  const {setPrivateKey, setPublicKey, setSeedText} = useStore();
  const readFromClipboard = async () => {
    const text = await Clipboard?.getString();
    setSeed(text);
  };

  const onChangeSeed = (seedText: string) => {
    setSeed(seedText);
    if (seedText.split(' ').length == 12) {
      setValid(true);
    } else if (valid) {
      setValid(false);
    }
  };

  const onSubmit = async () => {
    try {
      const phrase = bip39.mnemonicToSeedSync(seed, ''); // (mnemonic, password)
      const keypair = Keypair.fromSeed(phrase.slice(0, 32));
      setSeedText(seed);
      setPrivateKey(keypair.secretKey);
      setPublicKey(keypair.publicKey);

      const encodedSecretKey = fromByteArray(keypair.secretKey);

      const data = {
        privateKey: encodedSecretKey,
        seedText: seed,
        publicKey: keypair.publicKey.toBase58(),
      };

      const userData = JSON.stringify(data);
      //save user data in async storage
      await AsyncStorage.setItem('@user_data', userData);

      navigation.reset({index: 0, routes: [{name: 'Root'}]});
    } catch (error) {
      console.log('error in generating keys', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} backgroundColor={'black'} />
      <View style={styles.seedContainer}>
        <View>
          <Text style={styles.seedTitle}>Restore Wallet</Text>
          <Text style={styles.seedSubTitle}>
            Enter the 12-word seed phrase of your wallet to import it
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your seed phrase seperated by comma"
            placeholderTextColor="#817d7d"
            keyboardType="default"
            value={seed}
            onChangeText={onChangeSeed}
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity onPress={readFromClipboard}>
            <View style={styles.copyContainer}>
              <Copy height={24} width={24} color={Colors.teritary} />
              <Text style={styles.copyText}>Paste</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Pressable
          style={[
            styles.continue,
            {backgroundColor: valid ? Colors.teritary : '#BDEE8D'},
          ]}
          onPress={onSubmit}
          disabled={!valid}>
          <Text style={styles.continueText}>
            {loading ? <ActivityIndicator size={'large'} /> : 'Import'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ImportWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  seedContainer: {
    paddingVertical: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  seedTitle: {
    fontSize: 24,
    fontFamily: 'Rubik-Bold',
    color: Colors.teritary,
    textAlign: 'center',
  },
  seedSubTitle: {
    fontSize: 16,
    fontFamily: 'Rubik-SemiBold',
    color: Colors.element,
    textAlign: 'center',
    opacity: 0.7,
  },
  input: {
    borderWidth: 3,
    borderColor: Colors.teritary,
    borderRadius: 10,
    paddingHorizontal: 8,
    color: 'black',
    marginVertical: 40,
    fontSize: 18,
    paddingTop: 0,
  },
  copyContainer: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyText: {
    color: Colors.teritary,
    fontSize: 20,
    fontFamily: 'Rubik-Medium',
  },
  continue: {
    borderRadius: 10,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    fontSize: 22,
    color: Colors.background,
    fontFamily: 'Rubik-Medium',
  },
});
