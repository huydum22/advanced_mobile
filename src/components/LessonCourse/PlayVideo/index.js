import React, {useContext, useRef, useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import {Styles} from '../../../styles';
import {LessonContext} from '../../../Provider/LessonCourse';
import {AuthenticationContext} from '../../../Provider/Authentication';
import {updateCurrentTime} from '../../../Actions/LessonCourse';
import RNFetchBlob from 'rn-fetch-blob';

const PLayVideo = (props) => {
  const {navigation, onCompleteVideo} = props;
  const {itemCourse} = useContext(LessonContext);
  const [time, setTime] = useState(0);
  const {state} = useContext(AuthenticationContext);
  const [exist, setExist] = useState(false);
  useEffect(() => {
    fs.exists(fs.dirs.DocumentDir + `/${itemCourse.itemLesson.id}.mp4`).then(
      (check) => {
        setExist(check);
      },
    );
  }, [itemCourse.itemLesson, fs]);
  var playerRef = useRef();
  const fs = RNFetchBlob.fs;

  const onProgress = (data) => {
    setTime(data.currentTime);
  };
  const readyPLayVideo = () => {
    if (itemCourse.itemVideo.currentTime) {
      playerRef.seek(itemCourse.itemVideo.currentTime);
      setTime(itemCourse.itemVideo.currentTime);
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', async () => {
      console.log(time);
      updateCurrentTime(state.token, itemCourse.itemLesson.id, time);
    });
    return unsubscribe;
  }, [navigation, time, state.token, itemCourse.itemLesson.id]);
  const renderYoutube = () => {
    if (exist) {
      return (
        <Video
          onProgress={onProgress}
          controls={true}
          source={{
            uri: fs.dirs.DocumentDir + `/${itemCourse.itemLesson.id}.mp4`,
          }}
          ref={(ref) => {
            playerRef = ref;
          }}
          onEnd={onCompleteVideo}
          onReadyForDisplay={readyPLayVideo}
          paused={true}
          style={styles.videoYoutube}
        />
      );
    } else {
      return (
        <Video
          onProgress={onProgress}
          controls={true}
          source={{
            uri: itemCourse.itemVideo.videoUrl,
          }}
          ref={(ref) => {
            playerRef = ref;
          }}
          onEnd={onCompleteVideo}
          onReadyForDisplay={readyPLayVideo}
          paused={true}
          style={styles.videoYoutube}
        />
      );
    }
  };
  return (
    <View style={styles.videoContainer}>
      {itemCourse.itemVideo.videoUrl ? (
        renderYoutube()
      ) : (
        <View style={[styles.videoContainer, Styles.center]}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  videoYoutube: {
    alignSelf: 'stretch',
    flex: 1,
  },

  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default PLayVideo;
