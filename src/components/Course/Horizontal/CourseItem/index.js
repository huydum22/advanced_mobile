import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {Styles, BoxModel, Size, Typography, Distance} from '../../../../styles';
import FastImage from 'react-native-fast-image';
import {AirbnbRating} from 'react-native-ratings';
import {ThemeContext} from '../../../../Provider/Theme';
const Item = (props) => {
  const {item, onPress} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableHighlight
      style={[
        Styles.horizontalCourse,
        {
          backgroundColor: theme.DialogColor,
          ...Size.boxShadow(theme.primaryTextColor),
        },
      ]}
      underlayColor={theme.DialogColor}
      onPress={() => {
        onPress(item);
      }}>
      <View style={Styles.fillColumn}>
        <FastImage
          style={{width: Size.scaleSize(200), height: Size.scaleSize(100)}}
          source={{
            uri: item.imageUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={Styles.containerInHorizontalCourse}>
          <View style={Styles.breakContentText}>
            <Text
              style={[
                Styles.titleInHorizontalList,
                styles.nameTitle,
                {color: theme.primaryTextColor},
              ]}>
              {item.title}
            </Text>
          </View>
          <View style={Styles.breakContentText}>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.name}
            </Text>
          </View>
          <View style={Styles.fillRow}>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.soldNumber} students
            </Text>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.updatedAt}
            </Text>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.totalHours}
            </Text>
          </View>
          <View style={Styles.fillRowCenter}>
            <AirbnbRating
              reviews={false}
              size={Size.ratingSize}
              defaultRating={item.ratedNumber}
              count={5}
              starContainerStyle={{paddingBottom: Distance.spacing_12}}
              // ratingColor="black"
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  nameTitle: {
    flexWrap: 'wrap',
  },
  rating: {},
  ratingText: {
    ...Typography.fontRegular,
    ...BoxModel.smallMarginHorizontal,
    fontSize: Typography.fontSize12,
  },
});
export default Item;
