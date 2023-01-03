import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    borderWidth: 1,
    backgroundColor: COLORS.black,
    borderRadius: 8,
    alignItems: 'center',
    padding: 5,
  },
});
