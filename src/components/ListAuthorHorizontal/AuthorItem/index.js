import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors, Styles, Typography} from '../../../styles';
const Author = (props) => {
  return (
    <View style={Styles.horizontalAuthor}>
      <Image source={props.image} style={Styles.imageInHorizontalAuthor} />
      <View style={Styles.containerInHorizontalAuthor}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </View>
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
