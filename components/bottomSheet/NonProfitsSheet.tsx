import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useTransactionStore} from '../../store/transaction_store';
import {useEffect} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

export const NonprofitsSheet: React.FC = () => {
  const {changeOrgNonProfits, fetchNonProfits} = useTransactionStore();

  useEffect(() => {
    fetchNonProfits();
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.logoContainer}>
          <Image source={{uri: item.icon_url}} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.orgTitle}>{item.name}</Text>
          {/* <Text style={styles.orgSubTitle}>{item.solanaAddress}</Text> */}
        </View>
      </TouchableOpacity>
    );
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
    fontSize: 24,
    color: 'black',
    fontFamily: 'Rubik-Bold',
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center',
    // marginBottom: 12,
  },
  logo: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  logoContainer: {
    height: 48,
    width: 48,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingLeft: 16,
    paddingRight: 70,
    // justifyContent: '',
    marginVertical: 8,
    alignItems: 'center',
  },
  orgTitle: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Rubik-SemiBold',
  },
  orgSubTitle: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    marginTop: -6,
  },
});
