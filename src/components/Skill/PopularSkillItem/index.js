import React, {useContext} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {BoxModel, Styles, Distance, Typography} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
const Item = (props) => {
  const {item, onPress} = props;
  const {theme} = useContext(ThemeContext);
  const titleItem = () => {
    if (item.name === '0') {
      return 'Miễn phí';
    }
    if (item.name === '200000') {
      return 'Dưới 200.000đ';
    }
    if (item.name === '500000') {
      return 'Từ 200.000đ đến 500.000đ';
    }
    if (item.name === '1000000') {
      return 'Từ 500.000đ đến 1 triệu';
    }
    if (item.name === '2000000') {
      return 'Từ 1 triệu đến 2 triệu';
    }
    return 'Trên 2 triệu';
  };
  return (
    <TouchableHighlight
      style={[
        styles.skillContainer,
        {backgroundColor: theme.backgroundSeeAllButton},
      ]}
      underlayColor={theme.backgroundSeeAllButton}
      onPress={() => {
        onPress(item);
      }}>
      <Text style={{...Typography.fontRegular, color: theme.primaryTextColor}}>
        {titleItem()}
      </Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  skillContainer: {
    ...BoxModel.smallBorderRadius,
    ...Styles.mainCenter,
    ...BoxModel.smallPaddingHorizontal,
    marginLeft: Distance.spacing_10,
    height: Distance.spacing_30,
  },
});
export default Item;
