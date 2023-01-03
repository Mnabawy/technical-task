import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

const BestSellingItem = ({item}) => {


  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={{flex: 1}}>
        <View style={{marginHorizontal: 10, marginTop: 10, marginLeft: 20}}>
          <Text style={styles.text}>{item.name}</Text>

          <Text>{item.description}</Text>
        </View>
        <View style={styles.body}>
          <Text>${item.price}</Text>
          <Icon
            name="arrowright"
            color={COLORS.white}
            size={22}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export default BestSellingItem;
