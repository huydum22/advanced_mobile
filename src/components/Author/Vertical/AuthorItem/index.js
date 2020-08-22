import React, {useContext} from 'react';
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native';
import {Styles, Size, Distance, BoxModel} from '../../../../styles';
import FastImage from 'react-native-fast-image';

import {ThemeContext} from '../../../../Provider/Theme';
const Item = (props) => {
  const {item, onPressItem} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.itemColor}]}>
      <TouchableHighlight
        style={styles.main}
        onPress={() => {
          onPressItem(item);
        }}
        underlayColor={theme.itemColor}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            {/* <Image source={item.image} style={styles.image} /> */}
            <FastImage
              style={styles.image}
              source={{
                uri: item['user.avatar'] || item.avatar,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text
              style={[
                Styles.titleInHorizontalList,
                {color: theme.primaryTextColor},
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.numcourses} course
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
