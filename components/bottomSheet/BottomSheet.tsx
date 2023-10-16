import {StyleSheet, View} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import {SendTransaction} from './SendTransactionView';

type BottomSheetParams = {
  visible: boolean;
  toggleBottomNavigationView: () => void;
  bottomsheetChild: React.JSX.Element;
};

export const CustomBottomSheetView = ({
  visible,
  toggleBottomNavigationView,
  bottomsheetChild,
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
        {bottomsheetChild}
        {/* <SendTransaction toggleNFTSheetView={toggleNFTSheetView} /> */}
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
