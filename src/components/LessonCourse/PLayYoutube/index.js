import React, {useRef, useEffect, useState, useContext} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Size} from '../../../styles';
import {LessonContext} from '../../../Provider/LessonCourse';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import {updateCurrentTime} from '../../../Actions/LessonCourse';
import {AuthenticationContext} from '../../../Provider/Authentication';
const getYouTubeID = (str) => {
  return str.substring(str.lastIndexOf('/') + 1, str.length);
};
const PLayYouTube = (props) => {
  const {navigation, onCompleteVideo} = props;
  const playerRef = useRef();
  const {itemCourse, setTime} = useContext(LessonContext);
  const [widthVid, setWidth] = useState(0);
  const [heightVid, setHeight] = useState(0);
  const {state} = useContext(AuthenticationContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', async () => {
      try {
        let currentTime = await playerRef.current.getCurrentTime();
        updateCurrentTime(state.token, itemCourse.itemLesson.id, currentTime);
      } catch (err) {
        Alert.alert(err);
      }
      // ;
    });
    return unsubscribe;
  }, [navigation, state.token, itemCourse.itemLesson.id]);
  useEffect(() => {
    const fetchYoutubeMetadata = async () => {
      try {
        let response = await getYoutubeMeta(
          getYouTubeID(itemCourse.itemVideo.videoUrl),
        );
        setWidth(response.width);
        setHeight(response.height);
      } catch (err) {
        console.log(err);
      }
    };
    fetchYoutubeMetadata();
  }, [itemCourse.itemVideo.videoUrl]);
  const getHeightVid = () => {
    if (heightVid && widthVid) {
      return (heightVid * Size.WIDTH) / widthVid;
    }
    return 300;
  };

  const readyPLayVideo = () => {
    if (itemCourse.itemVideo.currentTime) {
      playerRef.current.seekTo(itemCourse.itemVideo.currentTime);
      setTime(itemCourse.itemVideo.currentTime);
    }
  };

  return (
    <YoutubePlayer
      ref={playerRef}
      height={getHeightVid()}
      width={Size.WIDTH}
      videoId={getYouTubeID(itemCourse.itemVideo.videoUrl)}
      play={true}
      volume={50}
      playbackRate={1}
      onChangeState={(event) => {
        if (event === 'ended') {
          onCompleteVideo();
        }
      }}
      webViewStyle={styles.videoYoutube}
      onReady={readyPLayVideo}
      initialPlayerParams={{
        cc_lang_pref: 'us',
        controls: true,
        showClosedCaptions: true,
      }}
    />
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoYoutube: {
    backgroundColor: 'black',
    flex: 1,
  },
});
export default PLayYouTube;
