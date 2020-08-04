import React, {useState, useEffect, useContext, useMemo} from 'react';
import {SafeAreaView, View, StyleSheet, TouchableHighlight} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import LessonTab from '../../components/LessonCourse/TopTabInfo';
import {API} from '../../services';
import {
  PROCESS_COURSE,
  COURSE_DETAIL_WITH_LESSON,
  LESSON_VIDEO,
} from '../../Constants/API';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Typography, BoxModel, Size} from '../../styles';
import Video from '../../components/LessonCourse/PlayVideo';
import YouTube from '../../components/LessonCourse/PLayYoutube';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../Provider/Theme';
import {LessonContext} from '../../Provider/LessonCourse';
import p from 'pretty-format';

const LessonCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {state} = useContext(AuthenticationContext);
  const insets = useSafeArea();

  const {
    itemCourse,
    setItemCourse,
    itemLesson,
    setItemLesson,
    videoUrl,
    setVideoUrl,
  } = useContext(LessonContext);

  const fetchProcessCourse = async () => {
    try {
      // let response = await getProcessCourseAPI(state.token, route.params.id);
      let response = await API.get(
        `${PROCESS_COURSE}/${route.params.id}`,
        state.token,
      );

      console.log(response.data.payload);
    } catch ({response}) {
      console.log(response);
    }
  };

  useEffect(() => {
    const fetchVideoLesson = async (lessonID) => {
      try {
        let response = await API.get(
          `${LESSON_VIDEO}/${itemCourse.id}/${lessonID}`,
          state.token,
        );
        setVideoUrl(response.data.payload.videoUrl);
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchVideoLesson(itemLesson.id);
  }, [itemCourse.id, state.token, itemLesson.id, setVideoUrl]);

  useEffect(() => {
    const fetchCourseDetailWithLesson = async () => {
      try {
        let response = await API.get(
          `${COURSE_DETAIL_WITH_LESSON}/${route.params.id}`,
          state.token,
        );
        setItemCourse(response.data.payload);
        setItemLesson(response.data.payload.section[0].lesson[0]);
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchCourseDetailWithLesson();
  }, [route.params.id, state.token, setItemCourse, setItemLesson]);

  const dismiss = () => {
    navigation.goBack();
  };

  const renderVideo = useMemo(() => {
    return <Video urlVideo={videoUrl} />;
  }, [videoUrl]);
  const renderYouTube = useMemo(() => {
    return <YouTube urlVideo={videoUrl} />;
  }, [videoUrl]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {backgroundColor: theme.themeColor}]}>
        {videoUrl.includes('https://youtube.com/embed')
          ? renderYouTube
          : renderVideo}
        <View
          style={[styles.mainContainer, {backgroundColor: theme.themeColor}]}>
          <LessonTab />
        </View>
      </View>
      <TouchableHighlight
        style={[
          styles.buttonDismiss,
          {
            bottom: Size.HEIGHT - insets.top - Size.scaleSize(50),
          },
        ]}
        onPress={dismiss}
        underlayColor={theme.overlayColor}>
        <MaterialIcons
          name="expand-more"
          size={50}
          color={theme.whiteWith07OpacityColor}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  maxHeightText: {
    height: null,
  },
  minHeightText: {
    height: 0,
  },

  checkContainer: {
    marginRight: 20,
  },
  image: {
    resizeMode: 'cover',
  },

  previewContainer: {
    borderWidth: 1,
    ...BoxModel.tinyPadding,

    ...BoxModel.marginHorizontal,
  },
  previewText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
  },
  buttonDismiss: {
    position: 'absolute',
    height: 50,
    left: 0,
    width: 50,
  },
});
export default LessonCourse;
