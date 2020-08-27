import React, {useContext, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Bar} from 'react-native-progress';
import {ThemeContext} from '../../Provider/Theme';
import {Styles, BoxModel, Size, Distance, Typography} from '../../styles';
import StarRating from 'react-native-star-rating';
import RatingComponent from '../../components/CourseDetail/HeaderComponent/RatingComponent';
import FeedbackItemComponent from '../../components/FeedBackItem';
import {PrimaryButton} from '../../components/Authentication';
import {WriteFeedBackScreen} from '../../Constants/ScreenName';
import {LocalizeContext} from '../../Provider/Localize';
const SeeFeedBack = (props) => {
  const {navigation, route} = props;
  const [ratings] = useState(route.params.params.item);
  const [averagePoint] = useState(route.params.params.averagePoint);
  const [contentPoint] = useState(route.params.params.contentPoint);
  const [presentationPoint] = useState(route.params.params.presentationPoint);
  const [formalityPoint] = useState(route.params.params.formalityPoint);
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  console.disableYellowBox = true;

  const feedbackContent = () => {
    if (ratings.ratingList) {
      return ratings.ratingList.map((itemFeedBack) => (
        <FeedbackItemComponent
          itemFeedBack={itemFeedBack}
          key={itemFeedBack.id}
        />
      ));
    }
  };
  const writeFeedBack = () => {
    navigation.navigate(WriteFeedBackScreen, {
      courseId: route.params.params.courseId,
    });
  };
  return (
    <ScrollView style={{backgroundColor: theme.themeColor}}>
      <RatingComponent ratings={ratings} />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        {Number(averagePoint)} {localize.detailAverage}
      </Text>

      <View style={[Styles.fillRowBetween, BoxModel.smallMarginHorizontal]}>
        <View style={styles.row}>
          <Text
            style={[
              Typography.fontRegular,
              {color: theme.primaryTextColor, fontSize: Typography.fontSize14},
            ]}>
            {localize.feedbackContent}:{' '}
            {contentPoint ? contentPoint.toFixed(2) : 0}
          </Text>
          <StarRating
            disabled={false}
            maxStars={1}
            starSize={15}
            rating={5}
            fullStarColor={'#f1c40f'}
            containerStyle={styles.rating}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={[
              Typography.fontRegular,
              {color: theme.primaryTextColor, fontSize: Typography.fontSize14},
            ]}>
            {localize.feedbackPresent}:{' '}
            {presentationPoint ? presentationPoint.toFixed(2) : 0}
          </Text>
          <StarRating
            disabled={false}
            maxStars={1}
            starSize={15}
            rating={5}
            fullStarColor={'#f1c40f'}
            containerStyle={styles.rating}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={[
              Typography.fontRegular,
              {color: theme.primaryTextColor, fontSize: Typography.fontSize14},
            ]}>
            {localize.feedbackFormal}:{' '}
            {formalityPoint ? formalityPoint.toFixed(2) : 0}
          </Text>
          <StarRating
            disabled={false}
            maxStars={1}
            starSize={15}
            rating={5}
            fullStarColor={'#f1c40f'}
            containerStyle={styles.rating}
          />
        </View>
      </View>
      <PrimaryButton
        title={localize.feedback}
        onPress={writeFeedBack}
        active={true}
        icon="star-o"
        style={[styles.buttonContainer, {backgroundColor: theme.primaryColor}]}
      />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        {localize.detailStudent}
      </Text>
      {feedbackContent()}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  row: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: Size.scaleSize(200),
    height: Size.scaleSize(40),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: Distance.spacing_14,
  },
});
export default SeeFeedBack;
