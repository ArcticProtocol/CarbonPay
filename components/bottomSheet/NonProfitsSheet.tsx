import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useTransactionStore} from '../../store/transaction_store';
import {useEffect} from 'react';

export const NonprofitsSheet: React.FC = () => {
  const {changeOrgNonProfits, fetchNonProfits} = useTransactionStore();

  useEffect(() => {
    fetchNonProfits();
  });

  const renderItem = ({item}: any) => {
    return <View>

        <Text>

        </Text>
    </View>;
  };

  return (
    <View>
      <FlatList
        data={changeOrgNonProfits}
        //   keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <Text style={styles.title}>Donate to NonProfits</Text>
        }
      />
    </View>
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
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Rubik-Bold',
    marginBottom: 12,
  },
});
