import React, {useContext} from 'react';
import {View, ScrollView, TouchableHighlight, Share} from 'react-native';
import {Text} from 'react-native-elements';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import {Styles, BoxModel, Typography, Size} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from 'react-native-reanimated';
const MoreView = (props) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const onPressShareCourse = async () => {
    try {
      const result = await Share.share({
        title: 'Share image',
        message: 'This image so beautiful ',
        url: `https://itedu.me/course-detail/${itemCourse.id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const renderRow = (title, iconName, onPress) => {
    return (
      <View>
        <TouchableHighlight onPress={onPress} style={Styles.fillRowCenter}>
          <View
            style={[
              Styles.fillRowCenter,
              BoxModel.marginHorizontal,
              BoxModel.smallMarginVertical,
            ]}>
            <MaterialIcons
              name={iconName}
              size={Size.scaleSize(30)}
              color={theme.grayDarkColor}
            />
            <Text
              style={[
                BoxModel.smallMarginHorizontal,
                {
                  color: theme.primaryTextColor,
                  fontWeight: Typography.fontWeightNormal,

                  fontSize: Typography.fontSize16,
                },
              ]}>
              {title}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: theme.themeColor}}>
      {renderRow('Download course', 'file-download')}
      {renderRow('About this course', 'info-outline')}
      {renderRow('Share this course', 'share', onPressShareCourse)}
      {renderRow('Notes', 'library-books')}
      {renderRow('Resources', 'dns')}
      {renderRow('Add course to favorites', 'star-border')}
    </ScrollView>
  );
};
export default MoreView;
