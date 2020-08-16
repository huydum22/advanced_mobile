import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Share} from 'react-native';
import Title from './TitleItem';
import Author from './AuthorItem';
import InfoCourse from './InfoCourse';
import Feature from './SomeFeature';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FastImage from 'react-native-fast-image';
import WhatLearn from './WhatLearn';
import StudentFeedBack from './StudentFeedback';
import ProfileAuthor from './ProfileAuthor';
import * as screenName from '../../../Constants/ScreenName';
import {FavoriteContext} from '../../../Provider/Favorite';
import {ListCourseHorizontal} from '../../Course';
import {Typography, BoxModel, Styles, Size} from '../../../styles';
import {
  CHECK_OWN_COURSE,
  GET_FREE_COURSE,
  LIKE_STATUS,
  LIKE_COURSE,
  COURSE_DETAIL,
} from '../../../Constants/API';
import {API} from '../../../services';

import {AuthenticationContext} from '../../../Provider/Authentication';
import {ThemeContext} from '../../../Provider/Theme';
import {LocalizeContext} from '../../../Provider/Localize';
const Header = (props) => {
  const {
    item,
    navigation,
    route,
    showPreview,
    showPreviewTitle,
    courseID,
  } = props;
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  const {state} = useContext(AuthenticationContext);
  const [isOwn, setIsOwn] = useState({});
  const [isLike, setLike] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemCourse, setItemCourse] = useState({});

  useEffect(() => {
    if (!showPreview) {
      const fetchData = async () => {
        try {
          let response = await API.get(`${COURSE_DETAIL}/${courseID}/null`);
          if (response.isSuccess) {
            setItemCourse(response.data.payload);
          }
        } catch (response) {
          console.log(response);
        }
      };
      fetchData();
    }
  }, [courseID, showPreview]);
  useEffect(() => {
    const checkOwnCourse = async () => {
      try {
        let response = await API.get(
          `${CHECK_OWN_COURSE}/${item.id}`,
          state.token,
        );
        if (response.isSuccess) {
          setIsOwn(response.data.payload);
        }
      } catch (err) {
        console.log(err);
      }
    };
    const checkLikeStatus = async () => {
      try {
        let response = await API.get(`${LIKE_STATUS}/${item.id}`, state.token);
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
    checkOwnCourse();
  }, [item, state]);
  const onPressAuthor = (itemAuthor) => {
    navigation.navigate(screenName.AuthorDetailScreenName, {
      name: itemAuthor.name,
      id: item.instructorId,
    });
  };

  const onPressJoin = async (id, index) => {
    if (isOwn.isUserOwnCourse) {
      navigation.navigate(screenName.LessonCourseScreenStack, {
        screen: screenName.LessonCourseScreenName,
        params: {id: item.id},
      });
    } else {
      try {
        let response = await API.post(
          GET_FREE_COURSE,
          {courseId: item.id},
          state.token,
        );
        if (response.isSuccess) {
          navigation.navigate(screenName.LessonCourseScreenStack, {
            screen: screenName.LessonCourseScreenName,
            params: {id: item.id},
          });
        }
      } catch ({response}) {
        console.log(response.data);
      }
    }
  };
  const onPressLike = async () => {
    try {
      let response = await API.post(
        LIKE_COURSE,
        {courseId: item.id},
        state.token,
      );
      console.log(response);

      if (response.isSuccess) {
        setLike(response.data.likeStatus);
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onPressStudentFeedback = (
    ratings,
    averagePoint,
    contentPoint,
    presentationPoint,
    formalityPoint,
    courseId,
  ) => {
    navigation.navigate(screenName.FeedBackStack, {
      screen: screenName.FeedBackStack,
      params: {
        item: ratings,
        averagePoint: averagePoint,
        contentPoint: contentPoint,
        presentationPoint: presentationPoint,
        formalityPoint: formalityPoint,
        courseId: courseId,
      },
    });
  };
  const dismiss = () => {
    navigation.goBack();
  };
  const onPressPlayVideo = () => {
    if (item.promoVidUrl) {
      navigation.navigate(screenName.PlayVideoScreenName, {
        urlVideo: item.promoVidUrl,
        typeUploadVideoLesson: 1,
      });
    }
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Share image',
        message: 'This image so beautiful ',
        url: `https://itedu.me/course-detail/${item.id}`,
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
  return (
    <View style={{backgroundColor: theme.themeColor}}>
      {showPreview ? (
        <FastImage
          style={[
            styles.videoContainer,
            Styles.fillRow,
            {backgroundColor: theme.backgroundColor},
          ]}
          source={{uri: item.imageUrl}}>
          <View
            style={{
              ...Styles.fillRowBetween,
              backgroundColor: theme.blackWith05OpacityColor,
            }}>
            <TouchableHighlight
              onPress={dismiss}
              underlayColor={theme.overlayColor}>
              <Ionicons
                name="chevron-back-outline"
                size={35}
                color={theme.whiteWith07OpacityColor}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressPlayVideo}
              underlayColor={theme.overlayColor}
              style={Styles.center}>
              <MaterialIcons
                name="play-arrow"
                size={150}
                color={theme.whiteWith07OpacityColor}
                style={Styles.center}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onShare}
              underlayColor={theme.overlayColor}>
              <Feather
                name="share"
                size={30}
                color={theme.whiteWith07OpacityColor}
              />
            </TouchableHighlight>
          </View>
        </FastImage>
      ) : undefined}
      {showPreview ? (
        <Title name={item.title} subtitle={item.subtitle} />
      ) : (
        <MaterialIcons.Button
          name="expand-more"
          size={20}
          backgroundColor={theme.themeColor}
          onPress={showPreviewTitle}
          style={styles.previewButton}
          color={theme.primaryTextColor}>
          <Title name={item.title} subtitle={item.subtitle} />
        </MaterialIcons.Button>
      )}
      <Author
        instructor={item.instructor || itemCourse.instructor}
        onPress={() => onPressAuthor(item.instructor || itemCourse.instructor)}
      />
      <InfoCourse
        videoNumber={item.videoNumber || itemCourse.videoNumber}
        timeToStart={item.createdAt || itemCourse.createdAt}
        totalHour={item.totalHours || itemCourse.totalHours}
        totalRate={item.ratedNumber || itemCourse.ratedNumber}
        rate={Number(item.averagePoint || itemCourse.averagePoint)}
        soldNumber={item.soldNumber || itemCourse.soldNumber}
        updatedAt={item.updatedAt || itemCourse.updatedAt}
      />
      {showPreview ? (
        <Feature
          isLike={isLike}
          isOwnCourse={isOwn}
          onPressLike={onPressLike}
          onPressJoin={onPressJoin}
          id={item.id || itemCourse.id}
        />
      ) : undefined}
      <WhatLearn
        WhatLearnItem={item.learnWhat || itemCourse.learnWhat}
        requireItem={item.requirement || itemCourse.requirement}
        description={item.description || itemCourse.description}
      />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        {localize.detailSame}
      </Text>
      <ListCourseHorizontal
        data={item.coursesLikeCategory || itemCourse.coursesLikeCategory}
        navigation={navigation}
        route={route}
      />
      <ProfileAuthor
        data={item.instructor || itemCourse.instructor}
        onPress={() => onPressAuthor(item.instructor || itemCourse.instructor)}
      />

      <StudentFeedBack
        averagePoint={item.averagePoint}
        ratings={item.ratings}
        onPress={() =>
          onPressStudentFeedback(
            item.ratings || itemCourse.ratings,
            item.averagePoint || itemCourse.averagePoint,
            item.contentPoint || itemCourse.contentPoint,
            item.presentationPoint || itemCourse.presentationPoint,
            item.formalityPoint || itemCourse.formalityPoint,
            item.id || itemCourse.id,
          )
        }
      />
      {showPreview ? (
        <Text style={[styles.title, {color: theme.primaryTextColor}]}>
          {localize.detailCurriculum}
        </Text>
      ) : undefined}
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  videoContainer: {
    width: Size.WIDTH,
    height: Size.HEIGHT / 2 - Size.scaleSize(100),
  },
});
export default Header;
