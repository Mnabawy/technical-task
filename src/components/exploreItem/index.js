import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const ExploreItem = ({item}) => {

  return (
    <View
      style={{
        borderRadius: 25,
        marginHorizontal: 10,
        backgroundColor: COLORS.white,
        height: 270,
        width: 160,
        paddingTop: 10,
      }}>
      <Image
        source={{uri: item.image}}
        style={{
          width: 135,
          height: 140,
          borderRadius: 15,
          alignSelf: 'center',
        }}
      />

      <View style={{marginHorizontal: 10, marginVertical: 15}}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 16,
            color: COLORS.black,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>

        <Text>{item.description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text>${item.price}</Text>
        <Icon
          name="plus"
          color={COLORS.white}
          size={22}
          style={{
            padding: 3.5,
            backgroundColor: COLORS.black,
            width: 30,
            height: 30,
            borderRadius: 50,
          }}
        />
      </View>
    </View>
  );
};

export default ExploreItem;

const styles = StyleSheet.create({});
