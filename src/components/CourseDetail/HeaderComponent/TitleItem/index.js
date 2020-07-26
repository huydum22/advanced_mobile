import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography, BoxModel} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
const Title = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.textContainer, {color: theme.primaryTextColor}]}>
        {props.name}
      </Text>
      <Text style={[styles.subtitleContainer, {color: theme.primaryTextColor}]}>
        {props.subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 10,
  },
  textContainer: {
    fontSize: Typography.fontSize25,
    ...Typography.fontBold,
  },
  subtitleContainer: {
    ...BoxModel.smallMarginVertical,
    fontSize: Typography.fontSize20,
    ...Typography.fontRegular,
  },
});

export default Title;
