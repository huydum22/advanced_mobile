import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Size, Styles, Distance, Typography, BoxModel} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
import FastImage from 'react-native-fast-image';
import {Bar} from 'react-native-progress';
import {LocalizeContext} from '../../../../Provider/Localize';

const MyCourseItem = (props) => {
  const {onPressItem, item} = props;
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.itemColor}]}>
      <TouchableHighlight
        style={styles.main}
        onPress={() => {
          onPressItem(item);
        }}
        underlayColor={theme.primaryBackgroundColor}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.image}
              source={{
                uri: item.imageUrl || item.courseImage,
              }}
            />
          </View>
          <View style={styles.mainContainer}>
            <Text
              style={[
                Styles.titleInHorizontalList,
                {color: theme.primaryTextColor},
              ]}>
              {item.title || item.courseTitle}
            </Text>
            <Text
              style={[
                BoxModel.tinyPaddingVertical,
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item['instructor.user.name'] || item.name || item.instructorName}
            </Text>
            {item.process ? (
              <View
                style={(Styles.fillColumnStart, BoxModel.tinyPaddingVertical)}>
                <Bar
                  progress={item.process / 100}
                  color={theme.primaryColor}
                  width={Size.WIDTH - Size.scaleSize(120)}
                  unfilledColor={theme.DialogColor}
                  borderColor={theme.DialogColor}
                  height={3}
                />
                <Text
                  style={[
                    Styles.subTitleInHorizontalList,
                    BoxModel.tinyPaddingVertical,
                    {color: theme.grayColor},
                  ]}>
                  {Math.floor(item.process)}% {localize.myCourseComplete}
                </Text>
              </View>
            ) : (
              <View style={styles.levelContainer}>
                <Text
                  style={[
                    styles.startCourseContainer,
                    {color: theme.primaryColor},
                  ]}>
                  {localize.myCourseStart.toUpperCase()}
                </Text>
              </View>
            )}
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
    flex: 9,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 3,
    ...Styles.center,
    height: Size.scaleSize(100),
    width: Size.scaleSize(80),
    marginLeft: Distance.spacing_8,
  },
  image: {
    resizeMode: 'cover',
    width: Size.scaleSize(80),
    height: Size.scaleSize(60),
  },

  mainContainer: {
    ...Styles.fillColumnStart,
    flex: 8,
    marginVertical: 10,
    marginLeft: 5,
  },
  subContainer: {
    flex: 1,
    ...Styles.center,
  },
  levelContainer: {
    ...Styles.fillRowBetween,
    marginTop: 5,
  },

  startCourseContainer: {
    ...Typography.fontBold,
  },
});
export default MyCourseItem;
