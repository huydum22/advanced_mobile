import React, {useContext} from 'react';
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native';
import {Colors, Styles, Size, Distance, BoxModel} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
const Item = (props) => {
  const {item, onPressItem} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.primaryBackgroundColor},
      ]}>
      <TouchableHighlight
        style={styles.main}
        onPress={() => {
          onPressItem(item);
        }}
        underlayColor={theme.primaryBackgroundColor}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
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
