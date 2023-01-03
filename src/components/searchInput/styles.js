import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 5,
    shadowColor: COLORS.garay,
    backgroundColor: COLORS.white,
    width: '90%',
    borderWidth: 0,
    borderColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});
