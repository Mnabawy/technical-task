import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: COLORS.white,
    height: 270,
    width: 160,
    paddingTop: 10,
  },
  image: {
    width: 135,
    height: 140,
    borderRadius: 15,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'left',
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bodyIcon: {
    padding: 3.5,
    backgroundColor: COLORS.black,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
