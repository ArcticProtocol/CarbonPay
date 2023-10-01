import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowRight from '../assets/icons/ArrowRIght';

const CollectedNFT = () => {
  return (
    <View style={styles.NFTContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Collected NFT's</Text>
        <ArrowRight height={30} width={30} color={'black'} />
      </View>
      <View style={styles.ImageContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dmojdu128/image/upload/v1696164265/ect2fccfdxxta6xx0wzs.png',
          }}
          style={styles.NFTImage}
        />
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dmojdu128/image/upload/v1696164265/ect2fccfdxxta6xx0wzs.png',
          }}
          style={styles.NFTImage}
        />
      </View>
    </View>
  );
};

export default CollectedNFT;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Rubik-Bold',
  },
  NFTContainer: {
    paddingBottom: 12,
    // marginVertical: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 4,
  },
  ImageContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  NFTImage: {
    height: 140,
    width: 140,
    borderRadius: 10,
  },
});
