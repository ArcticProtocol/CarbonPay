import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CheckBox, Separator} from 'react-native-btr';
import Clipboard from '@react-native-clipboard/clipboard';
import {useTransactionStore} from '../../store/transaction_store';

export const SendTransaction: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [toAddress, setReceiverAddress] = useState('');
  const [automaticallyOffset, setAutomaticallyOffset] = useState(true);

  const {solPriceUSD, sendTransaction} = useTransactionStore();

  const readFromClipboard = async () => {
    let clipboardContent = await Clipboard?.getString?.();
    setReceiverAddress(clipboardContent);
  };

  const handleSend = () => {
    // Implement your send logic here
    console.log('Sending amount:', typeof parseInt(amount, 10));
    console.log('Automatically Offset:', automaticallyOffset);

    sendTransaction({solAmount: BigInt(parseInt(amount)), toAddress: toAddress});
  };

  if (toAddress.length < 44)
    return (
      <ReceiverAddressView
        readFromClipboard={readFromClipboard}
        setReceiverAddress={setReceiverAddress}
        toAddress={toAddress}
      />
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transact</Text>
      <Text style={styles.subtitle}>
        Paste an address, and enter an amount.
      </Text>

      <TouchableOpacity>
        <Text style={styles.addressBar}>to: {`${toAddress}`}</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.prefixText}>SOL </Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#817d7d"
          keyboardType="numeric"
          value={amount}
          onChangeText={text => setAmount(text)}
        />
      </View>
      <Text style={styles.bottomText}>
        $ {(solPriceUSD * Number(amount)).toFixed(2)}
      </Text>

      <View style={styles.bottomItems}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={automaticallyOffset}
            onPress={() => setAutomaticallyOffset(!automaticallyOffset)}
          />
          <Text style={styles.checkboxText}>
            Automatically offset 0.00073 SOL
          </Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: amount.length < 1 ? 'grey' : 'green',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={handleSend}
            disabled={amount.length < 1}
            touchSoundDisabled={amount.length < 1}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ReceiverAddressView = ({
  setReceiverAddress,
  readFromClipboard,
  toAddress,
}: {
  setReceiverAddress: React.Dispatch<React.SetStateAction<string>>;
  readFromClipboard: () => void;
  toAddress: string;
}) => {
  return (
    <View style={receiverAdddressViewStyles.container}>
      <Text style={receiverAdddressViewStyles.title}>
        Enter Reciever Address
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <TextInput
          style={receiverAdddressViewStyles.input}
          placeholder="Send to"
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          value={toAddress}
          onChangeText={text => setReceiverAddress(text)}
        />
      </View>
      <TouchableOpacity
        style={receiverAdddressViewStyles.button}
        onPress={readFromClipboard}>
        <Text style={receiverAdddressViewStyles.buttonText}>Paste address</Text>
      </TouchableOpacity>
    </View>
  );
};

const receiverAdddressViewStyles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    width: '90%',
    color: 'black',
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'flex-start', // Align text to the start
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },

  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: '700',
  },

  subtitle: {
    color: '#000',
    fontSize: 14,
    marginTop: 4,
    fontWeight: '400',
  },

  addressBar: {
    marginTop: 14,
    fontSize: 16,
    color: '#000',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 8,
  },
  prefixText: {
    fontSize: 32,
    marginRight: 2,
    color: '#000000',
    fontWeight: '700',
  },
  bottomText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#000000',
  },
  input: {
    flex: 0,
    paddingBottom: 10,
    fontSize: 48,
    color: '#000',
    fontWeight: '700',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    color: '#3e5917',
  },
  checkboxText: {
    marginLeft: 10,
    color: '#4e8f2e',
  },
  sendButton: {
    flex: 1,
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
  },

  bottomItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default SendTransaction;
