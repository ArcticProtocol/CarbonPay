import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../util/color';
import * as bip39 from 'bip39';
import Copy from '../assets/icons/Copy';
import Clipboard from '@react-native-clipboard/clipboard';
import {CheckBox} from 'react-native-btr';

const SeedPhrase = () => {
  const [seedText, setSeedText] = React.useState<string>('');
  const [checked, setChecked] = React.useState<boolean>(false);
  const retrieveSeed = () => {
    const mnemonic = bip39.generateMnemonic();
    setSeedText(mnemonic);
  };

  const writeToClipboard = async () => {
    await Clipboard?.setString(seedText);
  };

  React.useEffect(() => {
    retrieveSeed();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} backgroundColor={'black'} />
      <View style={styles.seedContainer}>
        <View>
          <Text style={styles.seedTitle}>Your Secret Phrase</Text>
          <Text style={styles.seedSubTitle}>
            Copy and backup this words somewhere as they are keys to your
            wallet.
          </Text>
          <View style={styles.phraseContainer}>
            {seedText.split(' ').map((item, index) => {
              return <Phrase phrase={item} key={index} />;
            })}
          </View>
          <TouchableOpacity onPress={writeToClipboard}>
            <View style={styles.copyContainer}>
              <Copy height={24} width={24} color={Colors.teritary} />
              <Text style={styles.copyText}>Copy to clipboard</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={checked}
              onPress={() => setChecked(!checked)}
              color={Colors.teritary}
            />
            <Text style={styles.checkboxText}>
              I have securely backed up the code, and in the event of any data
              loss, my funds will be lost
            </Text>
          </View>
          <Pressable
            style={[
              styles.continue,
              {backgroundColor: checked ? Colors.teritary : '#BDEE8D'},
            ]}
            disabled={!checked}>
            <Text style={styles.continueText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Phrase = ({phrase}: {phrase: string}) => {
  return (
    <View style={styles.phrase}>
      <Text style={styles.phraseTxt}>{phrase}</Text>
    </View>
  );
};
export default SeedPhrase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingVertical: 4,
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
  seedContainer: {
    paddingVertical: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  phraseContainer: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 40,
  },
  phrase: {
    backgroundColor: Colors.teritary,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  phraseTxt: {
    color: Colors.background,
    fontSize: 20,
    fontFamily: 'Rubik-Medium',
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
  bottomContainer: {
    // paddingHorizontal: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  checkboxText: {
    color: Colors.element,
    fontSize: 14,
    fontWeight: '700',
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
