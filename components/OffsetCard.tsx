import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../util/color';
import {CustomBottomSheetView} from './bottomSheet/BottomSheet';
import {NonprofitsSheet} from './bottomSheet/NonProfitsSheet';

const OffsetCard = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.offsetBox}>
      <View style={styles.treeContainer}>
        <Text style={styles.tree}>🌲</Text>
      </View>
      <View style={styles.offsetContainer}>
        <Text style={styles.offsetText}>Your Footprint is reducing 🔥</Text>
        <TouchableOpacity style={styles.button} onPress={toggleBottomNavigationView}>
          <Text style={styles.txButton}>Offset</Text>
        </TouchableOpacity>

        <CustomBottomSheetView
          visible={visible}
          toggleBottomNavigationView={toggleBottomNavigationView}
          bottomsheetChild={<NonprofitsSheet />}
        />
      </View>
    </View>
  );
};

export default OffsetCard;

const styles = StyleSheet.create({
  offsetBox: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: Colors.teritary,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  treeContainer: {
    backgroundColor: 'white',
    borderRadius: 60,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tree: {
    fontSize: 50,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.element,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Rubik-Regular',
  },
  offsetContainer: {
    flexDirection: 'column',
    gap: 8,
    flex: 0.92,
  },
  offsetText: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
});
