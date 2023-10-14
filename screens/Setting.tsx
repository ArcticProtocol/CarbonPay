import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../util/color';
import ArrowRight from '../assets/icons/ArrowRIght';
import {LogoutSheet} from '../components/bottomSheet/LogoutSheet';

const Setting = () => {
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  const renderItem = ({item}: {item: ISettingsItem}) => {
    return (
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          Linking.openURL(item.url);
        }}>
        <Text style={styles.optionText}>{item.name}</Text>
        <ArrowRight height={30} width={30} color={Colors.background} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Settings</Text>
      <View style={styles.optionsContainer}>
        <FlatList
          data={SettingsItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <TouchableOpacity
        style={styles.signOut}
        onPress={toggleBottomNavigationView}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      <LogoutSheet
        visible={visible}
        toggleBottomNavigationView={toggleBottomNavigationView}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  screenTitle: {
    color: 'black',
    fontSize: 26,
    fontFamily: 'Rubik-SemiBold',
    textAlign: 'center',
  },
  optionsContainer: {
    backgroundColor: Colors.teritary,
    borderRadius: 20,
    flexDirection: 'column',
    marginTop: 30,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: Colors.background,
    borderBottomWidth: 0.5,
  },
  optionText: {
    color: Colors.background,
    fontSize: 20,
    fontFamily: 'Rubik-SemiBold',
  },
  signOut: {
    textAlign: 'center',
    padding: 16,
    borderBottomColor: Colors.background,
    backgroundColor: Colors.element,
    borderRadius: 20,
    marginTop: 30,
  },
  signOutText: {
    color: Colors.background,
    fontSize: 20,
    fontFamily: 'Rubik-SemiBold',
    textAlign: 'center',
  },
  bruh: {
    color: Colors.teritary,
    fontSize: 20,
  },
});

type ISettingsItem = {
  id: number;
  name: string;
  url: string;
};

const SettingsItems: ISettingsItem[] = [
  {
    id: 1,
    name: 'Country',
    url: 'https://google.com',
  },
  {
    id: 2,
    name: 'Network',
    url: 'https://google.com',
  },
  {
    id: 3,
    name: 'Support',
    url: 'https://google.com',
  },
  {
    id: 4,
    name: 'Privacy Policy',
    url: 'https://google.com',
  },
];
