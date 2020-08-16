import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Typography, BoxModel, Styles, Distance, Size} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PrimaryButton} from '../../../Authentication';
import {Bar} from 'react-native-progress';
import RatingComponent from '../RatingComponent';
import StarRating from 'react-native-star-rating';
import {LocalizeContext} from '../../../../Provider/Localize';

const StudentFeedback = (props) => {
  const {ratings, onPress, averagePoint} = props;
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  return (
    <View style={[Styles.fillColumnStart, BoxModel.marginVertical]}>
      <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        {localize.detailStudent}
      </Text>
      {averagePoint ? (
        <Text style={[styles.title, {color: theme.primaryTextColor}]}>
          {Number(averagePoint)} {localize.detailAverage}
        </Text>
      ) : undefined}
      {ratings ? <RatingComponent ratings={ratings} /> : undefined}
      <PrimaryButton
        title={localize.detailAllFeed}
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
