import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../utils/colors';

const SearchInput = ({value, onChange}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="search1"
        size={20}
        color={COLORS.black}
        style={{marginHorizontal: 10}}
      />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search"
        placeholderTextColor={COLORS.garay}
        style={{color: COLORS.black}}
      />
    </View>
  );
};

export default SearchInput;
