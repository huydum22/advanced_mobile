import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Styles} from '../../../../styles';
import image from '../../../../assets/image/path.png';
const Item = (props) => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity
      style={Styles.horizontalCourse}
      onPress={() => {
        onPress(item);
      }}>
      <Image
        source={image}
        style={[Styles.imageInHorizontalCourse, styles.image]}
      />
      <View style={Styles.containerInHorizontalCourse}>
        <Text style={Styles.titleInHorizontalList}>{item.name}</Text>
        <Text style={Styles.subTitleInHorizontalList}>
          {item.numberOfCourse}
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
