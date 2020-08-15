import React, {useState, useEffect, useContext, useMemo} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import LessonTab from '../../components/LessonCourse/TopTabInfo';
import {API} from '../../services';
import {
  PROCESS_COURSE,
  COURSE_DETAIL_WITH_LESSON,
  LESSON_VIDEO,
  LESSON_UPDATE_CURRENT_TIME,
  LAST_WATCHED_LESSON,
  LESSON_DETAIL,
  LESSON_UPDATE_STATUS,
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
  const [nextLessonID, setNextLessonID] = useState('');
  const insets = useSafeArea();

  const {setItemCourse, itemLesson, setItemLesson, time} = useContext(
    LessonContext,
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', async () => {
      try {
        let response = await API.put(
          LESSON_UPDATE_CURRENT_TIME,
          {
            lessonId: itemLesson.id,
            currentTime: time,
          },
          state.token,
        );
        if (response.isSuccess) {
          console.log(response.data.message);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    });

    return unsubscribe;
  }, [navigation, time, state, itemLesson]);

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
  const fetchDetail = async () => {
    try {
      let response = await API.get(
        `${LESSON_DETAIL}/${route.params.id}/${itemLesson.id}`,
        state.token,
      );
      if (response.isSuccess) {
        console.log(response.data.payload.nextLessonId);
        setNextLessonID(response.data.payload.nextLessonId);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route, state, itemLesson]);
  const fetchCourseDetailLesson = async () => {
    try {
      let response = await API.get(
        `${COURSE_DETAIL_WITH_LESSON}/${route.params.id}`,
        state.token,
      );
      if (response.isSuccess) {
        setItemCourse(response.data.payload);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchCourseDetailWithLesson = async () => {
      try {
        let response = await API.get(
          `${COURSE_DETAIL_WITH_LESSON}/${route.params.id}`,
          state.token,
        );
        let response1 = await API.get(
          `${LAST_WATCHED_LESSON}/${route.params.id}`,
          state.token,
        );
        if (response.isSuccess) {
          setItemCourse(response.data.payload);
          if (response1.isSuccess) {
            const resultSection = response.data.payload.section.find(
              ({lesson}) => {
                return lesson.find(
                  ({id}) => id === response1.data.payload.lessonId,
                );
              },
            );
            const result = resultSection.lesson.find(
              ({id}) => id === response1.data.payload.lessonId,
            );
            setItemLesson({
              ...result,
              videoUrl: response1.data.payload.videoUrl,
              currentTime: response1.data.payload.currentTime,
            });
          }
        }
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchCourseDetailWithLesson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route, state]);
  const dismiss = () => {
    navigation.goBack();
  };

  const renderVideo = useMemo(() => {
    const onCompleteVideo = async () => {
      try {
        let response = await API.post(
          LESSON_UPDATE_STATUS,
          {lessonId: itemLesson.id},
          state.token,
        );
        if (response.isSuccess) {
          console.log(response.data.message);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Video
        urlVideo={itemLesson.videoUrl || ''}
        onCompleteVideo={onCompleteVideo}
      />
    );
  }, [itemLesson, state]);
  const renderYouTube = useMemo(() => {
    return <YouTube urlVideo={itemLesson.videoUrl || ''} />;
  }, [itemLesson]);

  const renderVideoComponent = () => {
    if (itemLesson.videoUrl) {
      if (itemLesson.videoUrl.includes('https://youtube.com/embed')) {
        return renderYouTube;
      } else {
        return renderVideo;
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {backgroundColor: theme.themeColor}]}>
        {renderVideoComponent()}
        <View
          style={[styles.mainContainer, {backgroundColor: theme.themeColor}]}>
          <LessonTab />
        </View>
      </View>
      <TouchableHighlight
        style={[
          styles.buttonDismiss,
          {
            bottom: Size.HEIGHT - insets.top - Size.scaleSize(40),
          },
        ]}
        onPress={dismiss}
        underlayColor={theme.overlayColor}>
        <MaterialIcons
          name="expand-more"
          size={40}
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
    height: Size.scaleSize(50),
    left: Size.scaleSize(50),
    width: Size.scaleSize(50),
  },
});
export default LessonCourse;
