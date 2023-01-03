import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const Device = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    width: Device.width - 80,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    alignSelf: 'center',
    padding: 10,
  },
  text: {
    textAlign: 'left',
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  body: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 5,
    paddingBottom: 5,
  },
  icon: {
    padding: 3.5,
    backgroundColor: COLORS.black,
    width: 30,
    height: 30,
    borderRadius: 8,
  },
});
