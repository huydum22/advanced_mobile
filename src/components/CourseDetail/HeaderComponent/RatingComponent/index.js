import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Styles, BoxModel, Size, Distance, Typography} from '../../../../styles';
import {Bar} from 'react-native-progress';
import StarRating from 'react-native-star-rating';
import {ThemeContext} from '../../../../Provider/Theme';

const RatingComponent = (props) => {
  const {theme} = useContext(ThemeContext);
  const {ratings} = props;
  return (
    <View style={[Styles.fillColumnStart, BoxModel.marginHorizontal]}>
      <View
        style={[
          Styles.fillRowStart,
          BoxModel.tinyMarginVertical,
          {height: Size.scaleSize(15)},
        ]}>
        <Bar
          progress={ratings.stars[4] / 100}
          color={theme.primaryColor}
          width={Size.WIDTH - Size.scaleSize(150)}
          unfilledColor={theme.DialogColor}
          borderColor={theme.DialogColor}
          height={Size.scaleSize(15)}
        />
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={15}
          rating={5}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.rating}
        />
        <Text style={[styles.linkText, {color: theme.grayColor}]}>
          {ratings.stars[4]}%
        </Text>
      </View>
      <View
        style={[
          Styles.fillRowStart,
          BoxModel.tinyMarginVertical,
          {height: Size.scaleSize(15)},
        ]}>
        <Bar
          progress={ratings.stars[3] / 100}
          color={theme.primaryColor}
          width={Size.WIDTH - Size.scaleSize(150)}
          unfilledColor={theme.DialogColor}
          borderColor={theme.DialogColor}
          height={Size.scaleSize(15)}
        />
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={15}
          rating={4}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.rating}
        />
        <Text style={[styles.linkText, {color: theme.grayColor}]}>
          {ratings.stars[3]}%
        </Text>
      </View>
      <View
        style={[
          Styles.fillRowStart,
          BoxModel.tinyMarginVertical,
          {height: Size.scaleSize(15)},
        ]}>
        <Bar
          progress={ratings.stars[2] / 100}
          color={theme.primaryColor}
          width={Size.WIDTH - Size.scaleSize(150)}
          unfilledColor={theme.DialogColor}
          borderColor={theme.DialogColor}
          height={Size.scaleSize(15)}
        />
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={15}
          rating={3}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.rating}
        />
        <Text style={[styles.linkText, {color: theme.grayColor}]}>
          {ratings.stars[2]}%
        </Text>
      </View>
      <View
        style={[
          Styles.fillRowStart,
          BoxModel.tinyMarginVertical,
          {height: Size.scaleSize(15)},
        ]}>
        <Bar
          progress={ratings.stars[1] / 100}
          color={theme.primaryColor}
          width={Size.WIDTH - Size.scaleSize(150)}
          unfilledColor={theme.DialogColor}
          borderColor={theme.DialogColor}
          height={Size.scaleSize(15)}
        />
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={15}
          rating={2}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.rating}
        />
        <Text style={[styles.linkText, {color: theme.grayColor}]}>
          {ratings.stars[1]}%
        </Text>
      </View>
      <View
        style={[
          Styles.fillRowStart,
          BoxModel.tinyMarginVertical,
          {height: Size.scaleSize(15)},
        ]}>
        <Bar
          progress={ratings.stars[0] / 100}
          color={theme.primaryColor}
          width={Size.WIDTH - Size.scaleSize(150)}
          unfilledColor={theme.DialogColor}
          borderColor={theme.DialogColor}
          height={Size.scaleSize(15)}
        />
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={15}
          rating={1}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.rating}
        />
        <Text style={[styles.linkText, {color: theme.grayColor}]}>
          {ratings.stars[0]}%
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  linkText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    marginLeft: Distance.spacing_8,
  },

  rating: {
    marginLeft: 10,
  },
});
export default RatingComponent;
