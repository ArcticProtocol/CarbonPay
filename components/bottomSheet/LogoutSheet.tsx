import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import {Text} from 'react-native';
import Colors from '../../util/color';
import React from 'react';
import {useStore} from '../..//store/store';
import {useNavigation} from '@react-navigation/native';

type BottomSheetParams = {
  visible: boolean;
  toggleBottomNavigationView: () => void;
};

export const LogoutSheet = ({
  visible,
  toggleBottomNavigationView,
}: BottomSheetParams) => {
  const {clearKeys} = useStore();
  const navigation = useNavigation();

  const SignOut = async () => {
    await clearKeys();
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  };
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
        <Text style={styles.titleText}>
          Signing out will erase your private key and wallet information. Please
          ensure you've saved them elsewhere for your security
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.confirm} onPress={SignOut}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancel}
            onPress={toggleBottomNavigationView}>
            <Text style={styles.confirmText}>Cancel</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 16,
  },
  confirm: {
    textAlign: 'center',
    padding: 12,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 30,
    width: '100%',
  },
  confirmText: {
    color: Colors.background,
    fontSize: 20,
    fontFamily: 'Rubik-SemiBold',
    textAlign: 'center',
  },
  cancel: {
    textAlign: 'center',
    padding: 12,
    backgroundColor: Colors.element,
    borderRadius: 10,
    width: '100%',
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
  },
});
