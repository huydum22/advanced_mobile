import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {PrimaryButton, SubPrimaryButton} from '../../Authentication';
import {ThemeContext} from '../../../Provider/Theme';
import {Size, Distance, Styles, BoxModel} from '../../../styles';
import {LessonContext} from '../../../Provider/LessonCourse';
import * as screenName from '../../../Constants/ScreenName';
import QuestionComponent from '../QuestionComponent';
import {LocalizeContext} from '../../../Provider/Localize';
const onPressAddQuestion = () => {};
const onPressForumQuestion = () => {};

const QuestionView = (props) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const {navigation} = props;
  const {localize} = useContext(LocalizeContext);

  const onPressResponse = (itemQuestion) => {
    navigation.navigate(screenName.ForumQuestion, {itemQuestion: itemQuestion});
  };
  const questionContent = () => {
    if (itemCourse.question.questions) {
      return itemCourse.question.questions.map((itemQuestion) => (
        <QuestionComponent
          itemQuestion={itemQuestion}
          onPressResponse={onPressResponse}
          key={itemQuestion.id}
        />
      ));
    }
  };
  return (
    <ScrollView style={{backgroundColor: theme.themeColor}}>
      {questionContent()}
      <PrimaryButton
        title={localize.lessonForum}
        onPress={onPressForumQuestion}
        active={true}
        icon="star-o"
        style={[styles.buttonContainer, {backgroundColor: theme.primaryColor}]}
      />
      <SubPrimaryButton
        title={localize.lessonAddQues}
        onPress={onPressAddQuestion}
        active={true}
        style={[
          styles.buttonContainer,
          styles.subButtonContainer,
          {borderColor: theme.primaryColor},
        ]}
      />
      <View style={styles.footer} />
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

  footer: {
    height: Size.scaleSize(50),
  },
});
export default QuestionView;
