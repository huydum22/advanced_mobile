import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Colors, Styles, Size, Distance, BoxModel} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
const Item = (props) => {
  const {onPressItem, item} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        ...Styles.fillRowStart,
        backgroundColor: theme.primaryBackgroundColor,
      }}>
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
          <View style={styles.mainContainer}>
            <Text
              style={[
                Styles.titleInHorizontalList,
                {color: theme.primaryTextColor},
              ]}>
              {item.name}
            </Text>
            <View style={styles.levelContainer}>
              <Text
                style={[
                  Styles.subTitleInHorizontalList,
                  {color: theme.grayColor},
                ]}>
                {item.numberOfCourse}
              </Text>
              <Text
                style={[
                  Styles.subTitleInHorizontalList,
                  {color: theme.grayColor},
                ]}>
                {item.totalHour}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    ...Styles.fillRowStart,
  },
  imageContainer: {
    flex: 2,
    ...Styles.center,
    height: Size.scaleSize(90),
    marginLeft: Distance.spacing_8,
  },
  image: {
    resizeMode: 'cover',
    width: Size.scaleSize(70),
    height: Size.scaleSize(50),
  },

  mainContainer: {
    ...Styles.fillColumnStart,
    flex: 8,
    ...BoxModel.smallMargin,
  },
  subContainer: {
    flex: 1,
    ...Styles.center,
  },
  levelContainer: {
    ...Styles.fillRowBetween,
    marginTop: 5,
  },
  ratingContainer: {
    ...Styles.fillRowStart,
    marginTop: Distance.spacing_10,
  },
});
export default Item;
