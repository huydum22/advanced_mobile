import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Colors, Styles, Typography} from '../../../styles';
import {AuthorDetailScreenName} from '../../../config/ScreenName';
const Author = (props) => {
  const {navigation, route, name, image} = props;
  const onPress = () => {
    navigation.push(AuthorDetailScreenName, {
      name: name,
    });
  };
  return (
    <TouchableHighlight
      style={Styles.horizontalAuthor}
      onPress={onPress}
      underlayColor={Colors.backgroundColor}>
      <View style={Styles.horizontalAuthor}>
        <Image source={image} style={Styles.imageInHorizontalAuthor} />
        <View style={Styles.containerInHorizontalAuthor}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  text: {
    ...Typography.fontRegular,
    textAlign: 'center',
    color: Colors.blackColor,
    fontSize: Typography.fontSize14,
  },
});
export default Author;
