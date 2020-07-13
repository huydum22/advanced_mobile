import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Styles, Typography} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
import p from 'pretty-format';
const Author = (props) => {
  const {onPress, item} = props;
  const {theme} = useContext(ThemeContext);
  console.log(p(item['user.name']));
  return (
    <TouchableHighlight
      style={Styles.horizontalAuthor}
      onPress={() => {
        onPress(item);
      }}
      underlayColor={theme.backgroundColor}>
      <View style={Styles.horizontalAuthor}>
        <FastImage
          style={Styles.imageInHorizontalAuthor}
          source={{
            uri: item['user.avatar'],
          }}
        />
        {/* <Image source={item.image} style={Styles.imageInHorizontalAuthor} /> */}
        <View style={Styles.containerInHorizontalAuthor}>
          <Text style={[styles.text, {color: theme.primaryTextColor}]}>
            {item['user.name'] ? item['user.name'] : item['user.email']}
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
