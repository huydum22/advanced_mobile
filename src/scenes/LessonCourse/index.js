import React, {useState, useEffect, useContext, useMemo} from 'react';
import {SafeAreaView, View, StyleSheet, Share} from 'react-native';
import {
  getCourseDetailWithLessonAPI,
  getProcessCourseAPI,
} from '../../services/Courses';
import LessonList from '../../components/LessonCourse/LessonList';
import * as Lesson from '../../services/Lesson';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Size, Typography, BoxModel} from '../../styles';
import Video from '../../components/LessonCourse/PlayVideo';
import YouTube from '../../components/LessonCourse/PLayYoutube';

import {ThemeContext} from '../../Provider/Theme';
import p from 'pretty-format';

const LessonCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {state} = useContext(AuthenticationContext);
  const [itemCourse, setItemCourse] = useState({});
  const [itemLesson, setItemLesson] = useState({});

  const [videoUrl, setVideoUrl] = useState('');

  const [collapsibleItems, setCollapsibleItems] = useState([]);

  const fetchProcessCourse = async () => {
    try {
      let response = await getProcessCourseAPI(state.token, route.params.id);
      console.log(response.data.payload);
    } catch ({response}) {
      console.log(response);
    }
  };

  useEffect(() => {
    const fetchVideoLesson = async (lessonID) => {
      try {
        let response = await Lesson.getLessonVideoAPI(
          state.token,
          itemCourse.id,
          lessonID,
        );
        setVideoUrl(response.data.payload.videoUrl);
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchVideoLesson(itemLesson.id);
  }, [itemCourse.id, state.token, itemLesson.id]);

  useEffect(() => {
    const fetchCourseDetailWithLesson = async () => {
      try {
        let response = await getCourseDetailWithLessonAPI(
          state.token,
          route.params.id,
        );
        setItemCourse(response.data.payload);
        setItemLesson(response.data.payload.section[0].lesson[0]);
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchCourseDetailWithLesson();
  }, [route.params.id, state.token]);

  const onPressHeader = (section) => {
    const newIds = [...collapsibleItems];
    const index = newIds.indexOf(section.data[0].sectionId);
    if (index > -1) {
      newIds.splice(index, 1);
    } else {
      newIds.push(section.data[0].sectionId);
    }
    setCollapsibleItems(newIds);
    // setExpand(!isExpand);insets
  };

  const dismiss = () => {
    navigation.goBack();
  };
  // const onPressPlayVideo = () => {
  //   fetchFirstLesson(item.section[0].lesson[0].id);
  // };

  const renderVideo = useMemo(() => {
    return <Video urlVideo={videoUrl} />;
  }, [videoUrl]);
  const renderYouTube = useMemo(() => {
    return <YouTube urlVideo={videoUrl} />;
  }, [videoUrl]);

  const onPressPreviewLesson = (ItemLesson) => {
    setItemLesson(ItemLesson);
  };
  return (
    <SafeAreaView>
      <View style={[styles.container, {backgroundColor: theme.themeColor}]}>
        {videoUrl.includes('https://youtube.com/embed')
          ? renderYouTube
          : renderVideo}
        <View
          style={[styles.mainContainer, {backgroundColor: theme.themeColor}]}>
          <LessonList
            itemCourse={itemCourse}
            onPressPreviewLesson={onPressPreviewLesson}
            itemLesson={itemLesson}
            onPressHeader={onPressHeader}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Size.HEIGHT,
  },
  videoContainer: {
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
});
export default LessonCourse;
