import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Colors, Styles, Typography} from '../../../styles';
const Author = (props) => {
  const {onPress, item} = props;

  return (
    <TouchableHighlight
      style={Styles.horizontalAuthor}
      onPress={() => {
        onPress(item);
      }}
      underlayColor={Colors.backgroundColor}>
      <View style={Styles.horizontalAuthor}>
        <Image source={item.image} style={Styles.imageInHorizontalAuthor} />
        <View style={Styles.containerInHorizontalAuthor}>
          <Text style={styles.text}>{item.name}</Text>
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
