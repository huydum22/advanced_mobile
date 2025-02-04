import React, {useContext} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {Styles, BoxModel, Typography, Size} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import FastImage from 'react-native-fast-image';
import Moment from 'moment';
import {LocalizeContext} from '../../../Provider/Localize';

const QuestionComponent = (props) => {
  const {theme} = useContext(ThemeContext);
  const {itemQuestion, onPressResponse} = props;
  const {localize} = useContext(LocalizeContext);
  const getThemeUser = (title) => {
    switch (title) {
      case 'INSTRUCTOR':
        return theme.warningColor;
      case 'STUDENT':
        return theme.StudentColor;
      default:
        return theme.primaryColor;
    }
  };
  return (
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
        <View style={[Styles.fillColumnStart, BoxModel.smallMarginHorizontal]}>
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
              {
                color: theme.primaryTextColor,
                fontSize: Typography.fontSize14,
              },
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
            {itemQuestion.user.name} -{' '}
            {Moment(itemQuestion.updatedAt).format('MMM DD, yyyy')}
          </Text>
        </View>
      </View>
      <TouchableHighlight
        onPress={() => onPressResponse(itemQuestion)}
        underlayColor={theme.overlayColor}>
        <Text
          style={[
            Typography.fontRegular,
            BoxModel.margin,
            {color: theme.primaryColor, fontSize: Typography.fontSize14},
          ]}>
          {itemQuestion.repliedNumber === 0
            ? localize.lessonNoResponse
            : itemQuestion.repliedNumber}{' '}
          {localize.lessonResponse}
        </Text>
      </TouchableHighlight>
      <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
    </View>
  );
};
const styles = StyleSheet.create({
  avatarContainer: {
    width: Size.scaleSize(70),
  },
  divide: {
    height: 1,
  },
  authorContainer: {
    alignSelf: 'flex-end',
  },
  textHeader: {
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
});

export default QuestionComponent;
