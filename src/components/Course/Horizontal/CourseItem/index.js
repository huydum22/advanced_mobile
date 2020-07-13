import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {Styles, BoxModel, Size, Typography, Distance} from '../../../../styles';
import FastImage from 'react-native-fast-image';
// import {AirbnbRating} from 'react-native-ratings';
import {ThemeContext} from '../../../../Provider/Theme';
import {Rating, AirbnbRating} from 'react-native-elements';
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
          }}
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
            <View style={[Styles.center, {flex: 1}]}>
              <AirbnbRating
                reviews={false}
                size={Size.ratingSize}
                defaultRating={item.ratedNumber}
                count={5}
              />
            </View>
            <View style={[Styles.center, {flex: 1}]}>
              <Text
                style={[
                  Styles.subTitleInHorizontalList,
                  {color: theme.grayColor},
                ]}>
                {item.soldNumber} students
              </Text>
            </View>
          </View>
          <View style={Styles.fillRowCenter}>
            {item.price === 0 ? (
              <Text style={[styles.price, {color: theme.alertColor}]}>
                Miễn phí
              </Text>
            ) : (
              <Text style={[styles.price, {color: theme.alertColor}]}>
                {item.price}VND
              </Text>
            )}
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
  price: {
    flex: 1,
    ...Typography.fontBold,
    fontSize: Typography.fontSize16,
  },
});
export default Item;
