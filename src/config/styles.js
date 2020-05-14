import {StyleSheet} from 'react-native';
import colors from './color';
const styles = StyleSheet.create({
  titleInList: {
    color: colors.titleItemColor,
    fontWeight: '600',
    fontSize: 18,
  },
  item: {
    margin: 10,
    width: 200,
    height: 180,
    backgroundColor: colors.backgroundItem,
    shadowColor: colors.titleItemColor,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
    borderRadius: 5,
  },
});
export default styles;
