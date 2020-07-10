import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {
  Colors,
  Styles,
  Typography,
  Size,
  BoxModel,
  Distance,
} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
const SeeAllButton = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: theme.backgroundSeeAllButton,
          backgroundColor: theme.backgroundSeeAllButton,
        },
      ]}
      onPress={props.onPress}>
      <Text
        style={[
          styles.text,
          Typography.fontRegular,
          {color: theme.primaryTextColor},
        ]}>
        See all
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    height: Size.scaleSize(20),
    width: Size.scaleSize(80),
    ...BoxModel.smallBorderRadius,
    borderWidth: Distance.superSmall,
  },
  text: {
    fontSize: Typography.fontSize14,
  },
});
export default SeeAllButton;
