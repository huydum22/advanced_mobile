import React, {useState, useEffect, useContext, useMemo} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  SectionList,
  TouchableHighlight,
  Share,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Collapsible from 'react-native-collapsible';
import {
  getCourseDetailWithLessonAPI,
  getProcessCourseAPI,
} from '../../services/Courses';
import * as Lesson from '../../services/Lesson';
import {AuthenticationContext} from '../../Provider/Authentication';
import {useSafeArea} from 'react-native-safe-area-context';
import {Size, Colors, Typography, Styles, BoxModel} from '../../styles';
import BackgroundVideo from '../../components/LessonCourse/BackgroundVideo';
import Video from '../../components/LessonCourse/PlayVideo';
import YouTube from '../../components/LessonCourse/PLayYoutube';

import Title from '../../components/CourseDetail/HeaderComponent/TitleItem';
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
  const insets = useSafeArea();

  const fetchProcessCourse = async () => {
    try {
      let response = await getProcessCourseAPI(state.token, route.params.id);
      console.log(response.data.payload);
    } catch ({response}) {
      console.log(response);
    }
  };
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
  useEffect(() => {
    fetchVideoLesson(itemLesson.id);
  }, [itemLesson.id]);

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

  const flatListSeparator = () => {
    return (
      <View
        style={[
          styles.separator,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}
      />
    );
  };
  const onPressHeader = (section) => {
    const newIds = [...collapsibleItems];
    const index = newIds.indexOf(section.data[0].sectionId);
    if (index > -1) {
      newIds.splice(index, 1);
    } else {
      newIds.push(section.data[0].sectionId);
    }
    setCollapsibleItems(newIds);
    // setExpand(!isExpand);
  };
  const renderHeader = (section) => {
    const {title} = section;
    return (
      <TouchableHighlight
        style={[
          styles.headerTouchable,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}
        onPress={() => onPressHeader(section)}
        underlayColor={theme.backgroundSeeAllButton}>
        <View
          style={[
            styles.headerContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}>
          <Text style={[styles.textHeader, {color: theme.primaryTextColor}]}>
            {title}
          </Text>
          {collapsibleItems.includes(section.data[0].sectionId) ? (
            <MaterialIcons
              name="expand-less"
              size={15}
              color={theme.primaryTextColor}
            />
          ) : (
            <MaterialIcons
              name="expand-more"
              size={15}
              color={theme.primaryTextColor}
            />
          )}
        </View>
      </TouchableHighlight>
    );
  };

  const renderListItem = (ItemLesson) => {
    return (
      <Collapsible collapsed={collapsibleItems.includes(ItemLesson.sectionId)}>
        <TouchableHighlight
          onPress={() => onPressPreviewLesson(ItemLesson)}
          underlayColor={theme.overlayColor}>
          <View
            style={[styles.textContainer, {backgroundColor: theme.themeColor}]}>
            <Text style={[styles.textContent, {color: theme.primaryTextColor}]}>
              {ItemLesson.name}
            </Text>
          </View>
        </TouchableHighlight>
      </Collapsible>
    );
  };
  const dismiss = () => {
    navigation.goBack();
  };
  // const onPressPlayVideo = () => {
  //   fetchFirstLesson(item.section[0].lesson[0].id);
  // };
  const onPressPreviewLesson = (ItemLesson) => {
    setVideoUrl('');
    setItemLesson(ItemLesson);
  };

  console.log(videoUrl);
  const renderVideo = useMemo(() => {
    return <Video urlVideo={videoUrl} />;
  }, [videoUrl]);
  const renderYouTube = useMemo(() => {
    return <YouTube urlVideo={videoUrl} />;
  }, [videoUrl]);
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
    <SafeAreaView>
      <View style={[styles.container, {backgroundColor: theme.themeColor}]}>
        {/* {videoUrl === '' ? (
          <BackgroundVideo
            imageUrl={item.imageUrl}
            dismiss={dismiss}
            onPressPlayVideo={onPressPlayVideo}
            onShare={onShare}
          />
        ) : ()} */}
        {/* <Video urlVideo={videoUrl} /> */}
        {videoUrl.includes('https://youtube.com/embed')
          ? renderYouTube
          : renderVideo}
        <View
          style={[styles.mainContainer, {backgroundColor: theme.themeColor}]}>
          <SectionList
            ItemSeparatorComponent={flatListSeparator}
            sections={
              itemCourse.section
                ? itemCourse.section.map((data) => {
                    return {
                      title: data.name,
                      data: data.lesson,
                    };
                  })
                : []
            }
            keyExtractor={(ItemLessonID, index) => ItemLessonID + index}
            renderItem={({item}) => renderListItem(item)}
            renderSectionHeader={({section}) => renderHeader(section)}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <Title
                  name={itemCourse.title}
                  subtitle={itemCourse.instructorName}
                />
              );
            }}
            ListFooterComponent={() => {
              return (
                <View
                  style={[
                    styles.footer,
                    {
                      marginBottom: insets.bottom,
                      backgroundColor: theme.themeColor,
                    },
                  ]}
                />
              );
            }}
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

  footer: {height: 40},
  separator: {
    height: 1,
  },
  headerTouchable: {
    height: 50,
  },
  headerContainer: {
    height: 50,
    ...Styles.rowBetween,
    marginHorizontal: 20,
  },
  textHeader: {
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
  maxHeightText: {
    height: null,
  },
  minHeightText: {
    height: 0,
  },
  textContent: {
    marginHorizontal: 20,
    ...Typography.fontRegular,
  },
  textContainer: {
    height: Size.scaleSize(50),
    ...Styles.rowBetween,
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
