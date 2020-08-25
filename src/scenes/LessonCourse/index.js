import React, {useEffect, useContext, useMemo} from 'react';
import {SafeAreaView, View, StyleSheet, TouchableHighlight} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import LessonTab from '../../components/LessonCourse/TopTabInfo';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Size} from '../../styles';
import Video from '../../components/LessonCourse/PlayVideo';
import YouTube from '../../components/LessonCourse/PLayYoutube';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../Provider/Theme';
import {LessonContext} from '../../Provider/LessonCourse';
import Spinner from 'react-native-loading-spinner-overlay';

const LessonCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {state} = useContext(AuthenticationContext);
  const insets = useSafeArea();

  const {
    updateStatusCourseProvider,
    courseDetailProvider,
    itemCourse,
  } = useContext(LessonContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      courseDetailProvider(state.token, route.params.id);
    });

    return unsubscribe;
  }, [navigation, state.token, route.params.id, courseDetailProvider]);

  const dismiss = () => {
    navigation.goBack();
  };
  const onCompleteVideo = async () => {
    updateStatusCourseProvider(
      state.token,
      itemCourse.course.id,
      itemCourse.itemLesson.id,
      itemCourse.itemLesson.nextLessonId,
    );
  };
  const renderVideo = useMemo(() => {
    return <Video onCompleteVideo={onCompleteVideo} navigation={navigation} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCourse.itemVideo.videoUrl]);
  const renderYouTube = useMemo(() => {
    return (
      <YouTube navigation={navigation} onCompleteVideo={onCompleteVideo} />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCourse.itemVideo.videoUrl]);

  const renderVideoComponent = () => {
    if (itemCourse.itemVideo.videoUrl) {
      if (itemCourse.itemVideo.videoUrl.includes('https://youtube.com/embed')) {
        return renderYouTube;
      } else {
        return renderVideo;
      }
    }
  };
  const renderDismiss = () => {
    if (itemCourse.itemVideo.videoUrl) {
      if (itemCourse.itemVideo.videoUrl.includes('https://youtube.com/embed')) {
        return (
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
        );
      } else {
        return undefined;
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
      {renderDismiss()}
      <Spinner
        visible={itemCourse.isLoading}
        textContent={'Loading...'}
        color={theme.whiteColor}
        textStyle={{color: theme.whiteColor}}
        overlayColor={theme.blackWith05OpacityColor}
      />
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

  buttonDismiss: {
    position: 'absolute',
    height: Size.scaleSize(50),
    left: 0,
    width: Size.scaleSize(50),
  },
});
export default LessonCourse;
