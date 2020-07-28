import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {PrimaryButton, SubPrimaryButton} from '../../Authentication';
import {ThemeContext} from '../../../Provider/Theme';
import {Size, Distance, Styles, BoxModel} from '../../../styles';
const onPressAddQuestion = () => {};
const onPressForumQuestion = () => {};

const QuestionView = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[Styles.columnCenter, {flex: 1}]}>
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
        style={[styles.buttonContainer, {backgroundColor: theme.primaryColor}]}
      />
    </View>
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
});
export default QuestionView;
