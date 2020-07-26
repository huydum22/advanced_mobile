import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Typography, BoxModel, Styles, Distance, Size} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PrimaryButton} from '../../../Authentication';
import {Bar} from 'react-native-progress';

import StarRating from 'react-native-star-rating';

const StudentFeedback = (props) => {
  const {ratings, onPress, averagePoint} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[Styles.fillColumnStart, BoxModel.marginVertical]}>
      <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        Student feedback
      </Text>
      {averagePoint ? (
        <Text style={[styles.title, {color: theme.primaryTextColor}]}>
          {Number(averagePoint)} average rating
        </Text>
      ) : undefined}
      {ratings ? (
        <View style={[Styles.fillColumnStart, BoxModel.marginHorizontal]}>
          <View style={[Styles.fillRowStart, BoxModel.tinyMarginVertical]}>
            <Bar
              progress={ratings.stars[4] / 100}
              color={theme.primaryColor}
              width={Size.WIDTH - Size.scaleSize(150)}
              unfilledColor={theme.DialogColor}
              borderColor={theme.DialogColor}
              height={15}
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
          <View style={[Styles.fillRowStart, BoxModel.tinyMarginVertical]}>
            <Bar
              progress={ratings.stars[3] / 100}
              color={theme.primaryColor}
              width={Size.WIDTH - Size.scaleSize(150)}
              unfilledColor={theme.DialogColor}
              borderColor={theme.DialogColor}
              height={15}
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
          <View style={[Styles.fillRowStart, BoxModel.tinyMarginVertical]}>
            <Bar
              progress={ratings.stars[2] / 100}
              color={theme.primaryColor}
              width={Size.WIDTH - Size.scaleSize(150)}
              unfilledColor={theme.DialogColor}
              borderColor={theme.DialogColor}
              height={15}
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
          <View style={[Styles.fillRowStart, BoxModel.tinyMarginVertical]}>
            <Bar
              progress={ratings.stars[1] / 100}
              color={theme.primaryColor}
              width={Size.WIDTH - Size.scaleSize(150)}
              unfilledColor={theme.DialogColor}
              borderColor={theme.DialogColor}
              height={15}
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
          <View style={[Styles.fillRowStart, BoxModel.tinyMarginVertical]}>
            <Bar
              progress={ratings.stars[0] / 100}
              color={theme.primaryColor}
              width={Size.WIDTH - Size.scaleSize(150)}
              unfilledColor={theme.DialogColor}
              borderColor={theme.DialogColor}
              height={15}
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
      ) : undefined}
      <PrimaryButton
        title="See All Feedback"
        onPress={() => onPress(ratings)}
        active={true}
        icon="star-o"
        style={[styles.buttonContainer, {backgroundColor: theme.primaryColor}]}
      />
      <View
        style={[
          styles.divide,
          styles.divideContainer,
          {backgroundColor: theme.DialogColor},
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12.5,
  },
  link: {
    ...Styles.fillRowStart,
    ...BoxModel.bottomMargin,
    alignSelf: 'flex-start',
    marginLeft: Distance.spacing_16,
  },
  linkText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    marginLeft: Distance.spacing_8,
  },
  divide: {
    height: 1,
  },
  buttonContainer: {
    width: Size.scaleSize(200),
    height: Size.scaleSize(40),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: Distance.spacing_14,
  },
  rating: {
    marginLeft: 10,
  },
  divideContainer: {
    marginTop: Distance.spacing_14,
  },
});
export default StudentFeedback;
