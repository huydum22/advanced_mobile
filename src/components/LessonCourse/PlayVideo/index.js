import React, {useContext, useRef, useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import {Styles} from '../../../styles';
import {LessonContext} from '../../../Provider/LessonCourse';
import {AuthenticationContext} from '../../../Provider/Authentication';
import {updateCurrentTime} from '../../../Actions/LessonCourse';

const PLayVideo = (props) => {
  const {navigation, onCompleteVideo} = props;
  const {itemCourse} = useContext(LessonContext);
  const [time, setTime] = useState(0);
  const {state} = useContext(AuthenticationContext);
  var playerRef = useRef();

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
      updateCurrentTime(state.token, itemCourse.itemVideo.id, time);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  return (
    <View style={styles.videoContainer}>
      {itemCourse.itemVideo.videoUrl ? (
        <Video
          onProgress={onProgress}
          controls={true}
          source={{uri: itemCourse.itemVideo.videoUrl}}
          ref={(ref) => {
            playerRef = ref;
          }}
          onEnd={onCompleteVideo}
          onReadyForDisplay={readyPLayVideo}
          paused={true}
          style={styles.videoYoutube}
        />
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
