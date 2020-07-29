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
import {CHECK_OWN_COURSE, GET_FREE_COURSE} from '../../../Constants/API';
import {API} from '../../../services';
import {AuthenticationContext} from '../../../Provider/Authentication';
import {ThemeContext} from '../../../Provider/Theme';
const Header = (props) => {
  const {item, navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {favorite, setFavorite} = useContext(FavoriteContext);
  const [indexFavorite, setIndexFavorite] = useState();
  const {state} = useContext(AuthenticationContext);
  const [isOwn, setIsOwn] = useState({});
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
      } catch (data) {
        console.log(data);
      }
    };
    checkOwnCourse();
  }, [item, state, setIsOwn]);
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
        if (response.status === 200) {
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
  const onPressLike = async (id, index) => {};
  const onPressStudentFeedback = (ratings) => {};
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
        url: 'https://reactjs.org/logo-og.png',
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
      <Title name={item.title} subtitle={item.subtitle} />
      <Author
        instructor={item.instructor}
        onPress={() => onPressAuthor(item.instructor)}
      />
      <InfoCourse
        videoNumber={item.videoNumber}
        timeToStart={item.createdAt}
        totalHour={item.totalHours}
        totalRate={item.ratedNumber}
        rate={Number(item.averagePoint)}
        soldNumber={item.soldNumber}
        updatedAt={item.updatedAt}
      />
      <Feature
        isOwnCourse={isOwn}
        onPressLike={onPressLike}
        onPressJoin={onPressJoin}
        id={item.id}
      />
      <WhatLearn
        WhatLearnItem={item.learnWhat}
        requireItem={item.requirement}
        description={item.description}
      />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        The same topic
      </Text>
      <ListCourseHorizontal
        data={item.coursesLikeCategory}
        navigation={navigation}
        route={route}
      />
      <ProfileAuthor
        data={item.instructor}
        onPress={() => onPressAuthor(item.instructor)}
      />
      <StudentFeedBack
        averagePoint={item.averagePoint}
        ratings={item.ratings}
        onPress={() => onPressStudentFeedback(item.ratings)}
      />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        Curriculum
      </Text>
      {/* <LearningCheck /> */}
      {/* <SegmentControl /> */}
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
