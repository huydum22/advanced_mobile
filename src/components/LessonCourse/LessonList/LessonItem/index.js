import React, {useContext} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import Collapsible from 'react-native-collapsible';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Styles, Typography, BoxModel, Distance, Size} from '../../../../styles';
import Moment from 'moment';
import {ThemeContext} from '../../../../Provider/Theme';
import {LessonContext} from '../../../../Provider/LessonCourse';

const LessonItem = ({ItemLesson, collapsibleItems, onPressLesson}) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const changeColorItemLesson = (lesson) => {
    if (itemCourse.itemLesson) {
      if (lesson.id === itemCourse.itemLesson.id) {
        return theme.primaryColor;
      }
    }

    return theme.primaryTextColor;
  };

  return (
    <Collapsible collapsed={collapsibleItems.includes(ItemLesson.sectionId)}>
      <TouchableHighlight
        onPress={() => onPressLesson(ItemLesson)}
        underlayColor={theme.overlayColor}
        style={[BoxModel.smallMarginVertical, {flex: 1}]}>
        <View style={Styles.fillRowStart}>
          <View style={[Styles.center, {width: Size.scaleSize(30)}]}>
            <Text
              style={[
                Typography.fontRegular,
                {color: changeColorItemLesson(ItemLesson)},
              ]}>
              {ItemLesson.numberOrder}
            </Text>
          </View>
          <View
            style={[
              Styles.fillColumnStart,
              BoxModel.smallMarginHorizontal,
              {backgroundColor: theme.themeColor},
            ]}>
            <View style={[Styles.fillRow, {marginRight: Distance.medium}]}>
              {ItemLesson.isFinish ? (
                <FontAwesome
                  name="check-circle"
                  size={20}
                  color={theme.primaryColor}
                  style={{marginRight: Distance.small}}
                />
              ) : (
                <FontAwesome
                  name="circle-thin"
                  size={20}
                  color={theme.primaryColor}
                  style={{marginRight: Distance.small}}
                />
              )}
              <Text
                style={[
                  Typography.fontRegular,
                  {color: changeColorItemLesson(ItemLesson)},
                ]}>
                {ItemLesson.name}
              </Text>
            </View>
            <Text style={[Typography.fontRegular, {color: theme.grayColor}]}>
              {' '}
              Video -{' '}
              {Moment('1900-01-01 00:00:00')
                .add(ItemLesson.hours * 3600, 'seconds')
                .format('mm:ss')}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Collapsible>
  );
};
export default LessonItem;
