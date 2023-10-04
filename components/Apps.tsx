import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
export const AppsView = () => {
  const navigation = useNavigation();

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => handleImageClick(item.id)}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <Text style={styles.IconTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const handleImageClick = (id: number) => {
    navigation.navigate('WebView' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Trending ReFi dapps</Text>

      <FlatList
        data={apps}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  sectionTitle: {
    color: '#000',
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 4,
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  IconTitle: {
    paddingVertical: 4,
    color: '#000',
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

const apps = [
  {
    id: 1,
    title: 'Coral Tribe',
    url: 'https://www.coraltribe.io/',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1481640893492850694/BrQqBWpm_400x400.jpg',
  },
  {
    id: 2,
    title: 'Atlantis',
    url: 'https://www.atlantians.world/',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1681338596584988672/MfbXS_P7_400x400.jpg',
  },
  {
    id: 3,
    title: 'Sunrise Stake',
    url: 'https://app.sunrisestake.com/',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1651563407827517440/1maYLOh7_400x400.jpg',
  },
  {
    id: 4,
    title: 'GainForest',
    url: 'https://gainforest.earth',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1674865118914437130/9HjAHrYf_400x400.jpg',
  },
];
