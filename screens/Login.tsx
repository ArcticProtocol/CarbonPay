import {Image, Pressable, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';
import Colors from '../util/color';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const navigateToSeed = async () => {
    navigation.navigate('Seed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#59A759'} />
      <LinearGradient
        style={styles.gradient}
        colors={['#59A759', Colors.teritary]}>
        <View style={styles.gradient}>
          <View>
            <View
              style={[
                styles.smallAssetContainer,
                styles.greenPhone,
                styles.shadowProp,
              ]}>
              <Image
                source={require('../assets/GreenPhone.png')}
                style={styles.imgStyle}
              />
            </View>

            <View
              style={[
                styles.smallAssetContainer,
                styles.greenBag,
                styles.shadowProp,
              ]}>
              <Image
                source={require('../assets/GreenBag.png')}
                style={styles.imgStyle}
              />
            </View>

            <View
              style={[
                styles.smallAssetContainer,
                styles.greenSphere,
                styles.shadowProp,
              ]}>
              <Image
                source={require('../assets/GreenSphere.png')}
                style={styles.imgStyle}
              />
            </View>

            <View
              style={[
                styles.largeAssetContainer,
                styles.greenBaloon,
                styles.shadowProp,
              ]}>
              <Image
                source={require('../assets/GreenBaloon.png')}
                style={styles.imgStyle}
              />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.appName}>CarbonPay</Text>
            <Text style={styles.subTitle}>
              The greenest Solana wallet for savvy crypto enthusiasts
            </Text>

            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.new}
                onPress={async () => {
                  navigateToSeed();
                }}>
                <Text style={styles.newText}>Get Started</Text>
              </Pressable>
              <Pressable style={styles.existing}>
                <Text style={styles.existingText}>Import Wallet</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  appName: {
    color: 'black',
    fontFamily: 'Rubik-Bold',
    fontSize: 44,
  },
  subTitle: {
    color: 'white',
    fontFamily: 'Rubik-Medium',
    fontSize: 20,
    // marginTop: -8,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.teritary,
  },
  gradient: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 4,
    alignItems: 'center',
  },
  imgContainer: {
    height: 200,
    width: 200,
  },
  smallAssetContainer: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: 'white',
    padding: 18,
  },
  largeAssetContainer: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: 'white',
    padding: 18,
  },
  imgStyle: {height: '100%', width: '100%'},
  greenPhone: {
    top: 10,
    transform: [{translateX: 20}, {translateY: 50}, {rotate: '-15deg'}],
  },
  greenBag: {
    top: -30,
    left: 100,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '-5deg'}],
  },
  greenSphere: {
    top: 130,
    left: -50,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '15deg'}],
  },
  greenBaloon: {
    top: 110,
    left: 100,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '-15deg'}],
  },
  bottomContainer: {
    paddingHorizontal: 22,
    position: 'absolute',
    top: 400,
    width: '100%',
    marginVertical: 40,
  },
  buttonsContainer: {
    flexDirection: 'column',
    gap: 16,
    marginTop: 30,
  },
  new: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newText: {
    fontSize: 20,
    color: Colors.teritary,
    marginLeft: 4,
    fontFamily: 'Rubik-Medium',
  },
  existing: {
    backgroundColor: 'black',
    borderRadius: 10,
    flex: 1,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  existingText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 4,
    fontFamily: 'Rubik-Medium',
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 100,
  },
});
