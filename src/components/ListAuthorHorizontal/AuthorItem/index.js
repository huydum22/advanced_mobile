import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Colors, Styles, Typography} from '../../../styles';
import {AuthorDetailScreenName} from '../../../config/ScreenName';
const Author = (props) => {
  const {navigation, route} = props;
  const onPress = () => {
    navigation.push(AuthorDetailScreenName);
  };
  return (
    <TouchableHighlight
      style={Styles.horizontalAuthor}
      onPress={onPress}
      underlayColor={Colors.backgroundColor}>
      <View style={Styles.horizontalAuthor}>
        <Image source={props.image} style={Styles.imageInHorizontalAuthor} />
        <View style={Styles.containerInHorizontalAuthor}>
          <Text style={styles.text}>{props.name}</Text>
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
