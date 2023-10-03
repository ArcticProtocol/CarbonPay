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

export const SendTransaction: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [toAddress, setReceiverAddress] = useState('');
  const [automaticallyOffset, setAutomaticallyOffset] = useState(true);

  const readFromClipboard = async () => {
    let clipboardContent = await Clipboard?.getString?.();
    setReceiverAddress(clipboardContent);
  };

  const handleSend = () => {
    // Implement your send logic here
    console.log('Sending amount:', amount);
    console.log('Automatically Offset:', automaticallyOffset);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transact</Text>
      <Text style={styles.subtitle}>
        Paste an address, and enter an amount.
      </Text>

      <TouchableOpacity onPress={readFromClipboard}>
        <Text style={styles.addressBar}>to: {`${toAddress}`}</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.prefixText}>$</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#817d7d"
          keyboardType="numeric"
          value={amount}
          onChangeText={text => setAmount(text)}
        />
      </View>
      <Text style={styles.bottomText}>$SOL</Text>

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
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
    fontSize: 20,
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
    fontSize: 48,
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
