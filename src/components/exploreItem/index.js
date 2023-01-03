import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

const ExploreItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={{marginHorizontal: 10, marginVertical: 15}}>
        <Text style={styles.text}>{item.name}</Text>

        <Text>{item.description}</Text>
      </View>
      <View style={styles.body}>
        <Text>${item.price}</Text>
        <Icon
          name="plus"
          color={COLORS.white}
          size={22}
          style={styles.bodyIcon}
        />
      </View>
    </View>
  );
};

export default ExploreItem;
