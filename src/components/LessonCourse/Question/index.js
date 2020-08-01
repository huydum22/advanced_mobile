import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {PrimaryButton, SubPrimaryButton} from '../../Authentication';
import {ThemeContext} from '../../../Provider/Theme';
import {Size, Distance, Styles, BoxModel, Typography} from '../../../styles';
import {FORUM_QUESTION} from '../../../Constants/API';
import {LessonContext} from '../../../Provider/LessonCourse';
import {API} from '../../../services';
import {AuthenticationContext} from '../../../Provider/Authentication';
import FastImage from 'react-native-fast-image';
const onPressAddQuestion = () => {};
const onPressForumQuestion = () => {};

const QuestionView = (props) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const {state} = useContext(AuthenticationContext);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        let page = 1;
        let pageSize = 5;
        let response = await API.get(
          `${FORUM_QUESTION}/?page=${page}&pageSize=${pageSize}&courseId=${itemCourse.id}`,
          state.token,
        );
        if (response.isSuccess) {
          setQuestion(response.data.payload);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestion();
  }, [itemCourse, state]);

  const getThemeUser = (title) => {
    switch (title) {
      case 'INSTRUCTOR':
        return theme.warningColor;
      case 'STUDENT':
        return theme.successColor;
      default:
        return theme.primaryColor;
    }
  };
  const questionContent = () => {
    if (question.questions) {
      return question.questions.map((itemQuestion) => (
        <View key={itemQuestion.id} style={Styles.fillColumn}>
          <View style={Styles.fillRowStart}>
            <View
              style={[
                Styles.columnCross,
                styles.avatarContainer,
                BoxModel.tinyMargin,
              ]}>
              <FastImage
                style={[Styles.avatarIcon, BoxModel.tinyMarginVertical]}
                source={{
                  uri: itemQuestion.user.avatar,
                }}
              />

              <View
                style={[
                  Styles.center,
                  styles.avatarContainer,
                  BoxModel.tinyPaddingVertical,
                  {backgroundColor: getThemeUser(itemQuestion.user.type)},
                ]}>
                <Text
                  style={[
                    Typography.fontBold,
                    {color: theme.whiteColor, fontSize: Typography.fontSize14},
                  ]}>
                  {itemQuestion.user.type.toLowerCase()}
                </Text>
              </View>
            </View>
            <View
              style={[Styles.fillColumnStart, BoxModel.smallMarginHorizontal]}>
              <Text
                style={[
                  styles.textHeader,
                  BoxModel.tinyMarginVertical,
                  {color: theme.primaryColor},
                ]}>
                {itemQuestion.title}
              </Text>
              <Text
                style={[
                  Typography.fontRegular,
                  {color: theme.primaryTextColor},
                ]}>
                {itemQuestion.content}
              </Text>
              <Text
                style={[
                  Typography.fontRegular,
                  styles.authorContainer,
                  BoxModel.tinyMarginVertical,
                  {color: theme.grayColor},
                ]}>
                {itemQuestion.user.name}
              </Text>
            </View>
          </View>
          <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
        </View>
      ));
    }
  };
  return (
    <ScrollView style={{backgroundColor: theme.themeColor}}>
      {questionContent()}
      <PrimaryButton
        title="Forum Question"
        onPress={onPressForumQuestion}
        active={true}
        icon="star-o"
        style={[styles.buttonContainer, {backgroundColor: theme.primaryColor}]}
      />
      <SubPrimaryButton
        title="Add Question"
        onPress={onPressAddQuestion}
        active={true}
        style={[
          styles.buttonContainer,
          styles.subButtonContainer,
          {borderColor: theme.primaryColor},
        ]}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: Size.scaleSize(200),
    height: Size.scaleSize(40),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    ...BoxModel.marginVertical,
  },
  subButtonContainer: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    height: Size.scaleSize(40),
    borderWidth: Distance.superSmall,
  },
  container: {flex: 1},
  avatarContainer: {
    width: Size.scaleSize(70),
  },
  textHeader: {
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
  authorContainer: {
    alignSelf: 'flex-end',
  },
  divide: {
    height: 1,
  },
});
export default QuestionView;
