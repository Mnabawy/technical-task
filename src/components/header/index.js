import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/colors';
import {styles} from './styles';
const Header = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="menu" size={32} color={COLORS.black} />
      <Ionicons
        name="md-person"
        size={20}
        color={COLORS.white}
        style={styles.icon}
      />
    </View>
  );
};

export default Header;
