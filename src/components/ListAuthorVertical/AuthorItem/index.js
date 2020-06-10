import React from 'react';
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native';
import {Colors, Styles, Size, Distance, BoxModel} from '../../../styles';
const Item = (props) => {
  const {item, onPressItem} = props;

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.main}
        onPress={() => {
          onPressItem(item);
        }}
        underlayColor={Colors.whiteColor}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={Styles.titleInHorizontalList}>{item.name}</Text>
            <Text style={Styles.subTitleInHorizontalList}>
              {item.numberOfCourse}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.fillRow,
    backgroundColor: Colors.whiteColor,
  },
  main: {
    ...Styles.fillRow,
  },
  imageContainer: {
    ...Styles.center,
    flex: 2,
    height: Size.scaleSize(90),
    marginLeft: Distance.spacing_8,
  },
  image: {
    resizeMode: 'cover',
    width: Size.scaleSize(60),
    height: Size.scaleSize(60),
    borderRadius: Size.scaleSize(30),
    margin: Distance.spacing_10,
  },
  textContainer: {
    ...Styles.fillColumnStart,
    ...BoxModel.smallMargin,
    flex: 8,
  },
});
export default Item;
