import React, {useContext, useState, useEffect} from 'react';
import {View, ScrollView, TouchableHighlight, Share} from 'react-native';
import {Text} from 'react-native-elements';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import {Styles, BoxModel, Typography, Size} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {API} from '../../../services';
import {LIKE_STATUS, LIKE_COURSE} from '../../../Constants/API';
import {AuthenticationContext} from '../../../Provider/Authentication';
import {LocalizeContext} from '../../../Provider/Localize';
const MoreView = (props) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const {state} = useContext(AuthenticationContext);
  const [isLike, setLike] = useState(false);
  const {localize} = useContext(LocalizeContext);
  useEffect(() => {
    const checkLikeStatus = async () => {
      try {
        let response = await API.get(
          `${LIKE_STATUS}/${itemCourse.id}`,
          state.token,
        );
        if (response.isSuccess) {
          setLike(response.data.likeStatus);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkLikeStatus();
  }, [itemCourse, state]);
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
  const onPressLike = async () => {
    try {
      let response = await API.post(
        LIKE_COURSE,
        {courseId: itemCourse.id},
        state.token,
      );

      if (response.isSuccess) {
        setLike(response.data.likeStatus);
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const renderRow = (title, iconName, onPress, likeStatus = false) => {
    return (
      <View>
        <TouchableHighlight
          onPress={onPress}
          style={Styles.fillRowCenter}
          underlayColor={theme.overlayColor}>
          <View
            style={[
              Styles.fillRowCenter,
              BoxModel.marginHorizontal,
              BoxModel.smallMarginVertical,
            ]}>
            <MaterialIcons
              name={iconName}
              size={Size.scaleSize(30)}
              color={likeStatus ? theme.warningColor : theme.grayDarkColor}
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
      {renderRow(localize.lessonDownload, 'file-download')}
      {renderRow(localize.lessonShare, 'share', onPressShareCourse)}
      {renderRow(localize.lessonNote, 'library-books')}
      {renderRow(localize.lessonResource, 'dns')}
      {renderRow(
        isLike ? localize.lessonReFav : localize.lessonAddFav,
        'star-border',
        onPressLike,
        isLike,
      )}
    </ScrollView>
  );
};
export default MoreView;
