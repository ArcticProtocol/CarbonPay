import {Image, StyleSheet, Text, View} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import React from 'react';
import Colors from '../../util/color';

type BottomSheetParams = {
  visible: boolean;
  toggleBottomNavigationView: () => void;
};

export const NFTSheet = ({
  visible,
  toggleBottomNavigationView,
}: BottomSheetParams) => {
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
        <View>
          <Text style={styles.title}>Congratulations, you won a</Text>
          <Text style={[styles.title, styles.green]}>Green NFT🥳</Text>
        </View>
        <View style={styles.nftContainer}>
          <Image
            source={{
              uri: 'https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://shdw-drive.genesysgo.net/26aen7f9WsNXzgGnyABbk7Uy4z5tH4g36FcbtK8SoLcS/6043.png',
            }}
            style={styles.nft}
          />
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Rubik-Bold',
    marginBottom: 12,
    margin: 0,
  },
  nftContainer: {
    height: 180,
    width: 300,
  },
  green: {
    color: Colors.teritary,
    marginTop: -16,
  },
  nft: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    resizeMode: 'contain',
  },
});
