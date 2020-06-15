import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Styles, Typography} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
const Author = (props) => {
  const {onPress, item} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableHighlight
      style={Styles.horizontalAuthor}
      onPress={() => {
        onPress(item);
      }}
      underlayColor={theme.backgroundColor}>
      <View style={Styles.horizontalAuthor}>
        <Image source={item.image} style={Styles.imageInHorizontalAuthor} />
        <View style={Styles.containerInHorizontalAuthor}>
          <Text style={[styles.text, {color: theme.primaryTextColor}]}>
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  text: {
    ...Typography.fontRegular,
    textAlign: 'center',
    fontSize: Typography.fontSize14,
  },
});
export default Author;
