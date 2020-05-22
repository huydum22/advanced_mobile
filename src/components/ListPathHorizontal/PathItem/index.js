import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Styles} from '../../../styles';
import image from '../../../assets/image/path.jpg';
const Item = (props) => {
  console.log(props.name);
  return (
    <TouchableOpacity style={Styles.horizontalCourse} activeOpacity={0.6}>
      <Image
        source={image}
        style={[Styles.imageInHorizontalCourse, styles.image]}
      />
      <View style={Styles.containerInHorizontalCourse}>
        <Text style={Styles.titleInHorizontalList}>{props.name}</Text>
        <Text style={Styles.subTitleInHorizontalList}>
          {props.numberOfCourse}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});
export default Item;
