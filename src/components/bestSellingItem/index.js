import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const BestSellingItem = ({item}) => {
  const Device = Dimensions.get('screen');

  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
        // height: 100,
        width: Device.width - 80,
        alignItems: 'center',
      }}>
      <Image
        source={{uri: item.image}}
        style={{
          width: 70,
          height: 70,
          borderRadius: 15,
          alignSelf: 'center',
          padding: 10,
        }}
      />
      <View style={{flex: 1}}>
        <View style={{marginHorizontal: 10, marginTop: 10, marginLeft: 20}}>
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
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 5,
            paddingBottom: 5,
            // flex:0.7
          }}>
          <Text>${item.price}</Text>
          <Icon
            name="arrowright"
            color={COLORS.white}
            size={22}
            style={{
              padding: 3.5,
              backgroundColor: COLORS.black,
              width: 30,
              height: 30,
              borderRadius: 8,
              // marginLeft: 70,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default BestSellingItem;

const styles = StyleSheet.create({});
