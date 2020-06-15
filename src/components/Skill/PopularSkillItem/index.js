import React, {useContext} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {BoxModel, Styles, Distance, Typography} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
const Item = (props) => {
  const {item, onPress} = props;
  const {theme} = useContext(ThemeContext);
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
        {item.name}
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
