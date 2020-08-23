import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import StarRating from 'react-native-star-rating';
import {Typography, BoxModel, Styles, Size, Distance} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {themeColor} from '../../styles/Color/color';
import {PrimaryButton, FormInput} from '../../components/Authentication';
import {API} from '../../services';
import {RATE_COURSE} from '../../Constants/API';
import {LocalizeContext} from '../../Provider/Localize';
const WriteFeedBack = (props) => {
  const {route, navigation} = props;
  const [feedback, setFeedback] = useState('');
  const [content, setContent] = useState(3);
  const [presentation, setPresentation] = useState(3);
  const [formality, setFormality] = useState(3);
  const {state} = useContext(AuthenticationContext);
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  const onChangeFeedback = (text) => {
    setFeedback(text);
  };
  const writeFeedBack = async () => {
    try {
      let body = {
        courseId: route.params.courseId,
        formalityPoint: formality,
        contentPoint: content,
        presentationPoint: presentation,
        content: feedback,
      };
      let response = await API.post(RATE_COURSE, body, state.token);
      if (response.isSuccess) {
        Alert.alert(response.data.message);
        navigation.goBack();
      } else {
        Alert.alert(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView style={{backgroundColor: theme.backgroundColor}}>
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        {localize.feedbackYour}
      </Text>
      <View style={[BoxModel.smallMarginHorizontal, Styles.fillRowBetween]}>
        <View style={[Styles.fillRowStart, Styles.center]}>
          <FontAwesome name="bookmark" size={20} color={theme.primaryColor} />
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
            ]}>
            {localize.feedbackContent}
          </Text>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={30}
          rating={content}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.fillFlex}
          selectedStar={(rating) => setContent(rating)}
        />
      </View>
      <View style={[BoxModel.smallMargin, Styles.fillRowBetween]}>
        <View style={[Styles.fillRow, Styles.center]}>
          <FontAwesome name="bookmark" size={20} color={theme.primaryColor} />
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
            ]}>
            {localize.feedbackPresent}
          </Text>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={30}
          rating={presentation}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.fillFlex}
          selectedStar={(rating) => setPresentation(rating)}
        />
      </View>
      <View style={[BoxModel.smallMarginHorizontal, Styles.fillRowCenter]}>
        <View style={[Styles.fillRow, Styles.center]}>
          <FontAwesome name="bookmark" size={20} color={theme.primaryColor} />
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
            ]}>
            {localize.feedbackFormal}
          </Text>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={30}
          rating={formality}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.fillFlex}
          selectedStar={(rating) => setFormality(rating)}
        />
      </View>
      <FormInput
        placeholder={localize.feedbackContent}
        value={feedback}
        onChangeText={onChangeFeedback}
        autoCorrect={false}
        returnKeyType={'done'}
      />
      <PrimaryButton
        title={localize.feedbackSubmit}
        onPress={writeFeedBack}
        active={true}
        icon="send"
        style={[styles.buttonContainer, {backgroundColor: theme.primaryColor}]}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  fillFlex: {
    flex: 1,
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
export default WriteFeedBack;
