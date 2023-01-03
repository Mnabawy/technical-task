/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ExploreItem from './src/components/exploreItem';
import Header from './src/components/header';
import SearchInput from './src/components/searchInput';
import {COLORS} from './src/utils/colors';
import BestSellingItem from './src/components/bestSellingItem';
import DUMMYDATA from './src/utils/dummydata.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.lighterGray} barStyle="dark-content" />
      {/* header */}
      <Header />
      {/* search input */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
          alignItems: 'center',
        }}>
        <SearchInput />
        <Icon name="shoppingcart" size={30} color={COLORS.black} />
      </View>

      {/* explore section */}
      {/* <View style={{flex: 1}}> */}
      <Text style={styles.title}>Explore</Text>
      <FlatList
        style={{
          height: 200,
          marginTop: 0,
          paddingTop: 0,
        }}
        contentContainerStyle={{
          alignItems: 'flex-start',
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DUMMYDATA}
        renderItem={ExploreItem}
        keyExtractor={item => item.id}
      />
      {/* </View> */}

      {/* Best Selling section */}
      {/* <View style={{flex: 1}}> */}
      <Text style={styles.title}>Best Selling</Text>
      <FlatList
        style={{
          height: 100,
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'flex-start',
        }}
        horizontal
        data={DUMMYDATA}
        renderItem={BestSellingItem}
      />
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lighterGray,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginVertical: 20,
  },
});

export default App;
