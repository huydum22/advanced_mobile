import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight, Image, Text} from 'react-native';
import {Styles, BoxModel, Size, Typography, Distance} from '../../../../styles';
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
        <Image source={item.image} style={Styles.imageInHorizontalCourse} />
        <View style={Styles.containerInHorizontalCourse}>
          <View style={Styles.breakContentText}>
            <Text
              style={[
                Styles.titleInHorizontalList,
                styles.nameTitle,
                {color: theme.primaryTextColor},
              ]}>
              {item.name}
            </Text>
          </View>
          <View style={Styles.breakContentText}>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.author}
            </Text>
          </View>
          <View style={Styles.fillRow}>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.level}
            </Text>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.timeToStart}
            </Text>
            <Text
              style={[
                Styles.subTitleInHorizontalList,
                {color: theme.grayColor},
              ]}>
              {item.totalHour}
            </Text>
          </View>
          <View style={Styles.fillRowCenter}>
            <AirbnbRating
              reviews={false}
              size={Size.ratingSize}
              defaultRating={item.rate}
              count={5}
              starContainerStyle={{paddingBottom: Distance.spacing_12}}
              // ratingColor="black"
            />
            <Text style={[styles.ratingText, {color: theme.grayColor}]}>
              ({item.totalRate})
            </Text>
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
