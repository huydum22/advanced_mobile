import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import colors from '../../../../styles/color';
import mainStyle from '../../../../styles/styles';
import image from '../../../../../assets/path.jpg';
const Item = (props) => {
  console.log(props.name);
  return (
    <TouchableOpacity style={mainStyle.item} activeOpacity={0.6}>
      <Image source={image} style={styles.image} />
      <View style={styles.title}>
        <Text style={styles.nameTitle}>{props.name}</Text>
        <Text style={styles.descriptionTitle}>{props.numberOfCourse}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 200,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
    marginTop: 5,
    justifyContent: 'flex-start',
  },
  nameTitle: {
    flex: 1,
    fontWeight: '500',
    textDecorationStyle: 'solid',
  },
  descriptionTitle: {
    flex: 1,
    fontWeight: '500',
    color: colors.subTextColor,
    fontSize: 11,
  },
});
export default Item;
