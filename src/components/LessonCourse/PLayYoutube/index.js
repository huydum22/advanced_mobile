import React, {useRef, useEffect, useState, useContext} from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {
  Size,
  Styles,
  BoxModel,
  Typography,
  Distance,
  Platform,
} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import {Slider} from 'react-native-elements';
import Moment from 'moment';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const getYouTubeID = (str) => {
  return str.substring(str.lastIndexOf('/') + 1, str.length);
};
const PLayYouTube = (props) => {
  const {urlVideo} = props;
  const playerRef = useRef();
  const {theme} = useContext(ThemeContext);
  const {itemLesson, time, setTime} = useContext(LessonContext);
  const [paused, setPaused] = useState(false);
  const [isHide, setHide] = useState(true);
  const [valueSlider, setValueSlider] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [widthVid, setWidth] = useState(0);
  const [heightVid, setHeight] = useState(0);
  useEffect(() => {
    if (totalTime) {
      if (!paused) {
        if (!isHide) {
          setTimeout(() => {
            fetchDataAndroid();
          }, 500);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalTime, valueSlider, time, paused, isHide]);
  const fetchDataAndroid = async () => {
    try {
      let response = await playerRef.current.getCurrentTime();
      setValueSlider(response / totalTime);
      setTime(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchYoutubeMetadata = async () => {
      try {
        let response = await getYoutubeMeta(getYouTubeID(urlVideo));
        setWidth(response.width);
        setHeight(response.height);
      } catch (err) {
        console.log(err);
      }
    };
    fetchYoutubeMetadata();
  }, [urlVideo]);
  const getHeightVid = () => {
    if (heightVid && widthVid) {
      return (heightVid * Size.WIDTH) / widthVid;
    }
    return 300;
  };
  useEffect(() => {
    if (itemLesson) {
      setTotalTime(itemLesson.hours * 3600);
    }
  }, [itemLesson]);
  const onPressPlayVideo = () => {
    setPaused(!paused);
    fetchDataAndroid();
  };
  const onForward10s = () => {
    playerRef.current.seekTo((valueSlider + 10 / totalTime) * totalTime);
    fetchDataAndroid();
  };
  const onReplay10s = () => {
    playerRef.current.seekTo((valueSlider - 10 / totalTime) * totalTime);
    fetchDataAndroid();
  };
  const onPressHide = () => {
    setHide(!isHide);
  };
  const getOnTouch = () => {
    if (isHide) {
      return theme.overlayColor;
    } else {
      return theme.blackWith05OpacityColor;
    }
  };
  const onCompleteSeek = (value) => {
    playerRef.current.seekTo(value * totalTime);
    setTime(value * totalTime);
  };

  const readyPLayVideo = () => {
    if (itemLesson.currentTime) {
      playerRef.current.seekTo(itemLesson.currentTime);
      setTime(itemLesson.currentTime);
    }
  };

  return (
    <View style={styles.backgroundVideo}>
      <YoutubePlayer
        ref={playerRef}
        height={getHeightVid()}
        width={Size.WIDTH}
        videoId={getYouTubeID(urlVideo)}
        play={!paused}
        volume={50}
        playbackRate={1}
        webViewStyle={styles.videoYoutube}
        onReady={readyPLayVideo}
        initialPlayerParams={{
          cc_lang_pref: 'us',
          controls: false,
        }}
      />
      <TouchableHighlight
        onPress={onPressHide}
        underlayColor={theme.overlayColor}
        style={[styles.container, {backgroundColor: getOnTouch()}]}>
        <View />
      </TouchableHighlight>
      {isHide ? undefined : (
        <View>
          <View
            style={[
              styles.controlContainer,
              BoxModel.marginHorizontal,
              {height: Size.scaleSize(50)},
            ]}>
            <TouchableHighlight
              underlayColor={theme.overlayColor}
              style={Styles.center}>
              <MaterialIcons
                name="library-books"
                size={20}
                color={theme.whiteWith07OpacityColor}
                style={Styles.center}
              />
            </TouchableHighlight>
            <Text style={[styles.timeContainer, BoxModel.tinyMarginHorizontal]}>
              {Moment('1900-01-01 00:00:00')
                .add(time, 'seconds')
                .format('mm:ss')}
            </Text>
            <Slider
              value={valueSlider}
              onSlidingComplete={onCompleteSeek}
              thumbTintColor={theme.whiteColor}
              style={styles.sliderContainer}
              minimumTrackTintColor={theme.primaryColor}
            />
            <Text style={[styles.timeContainer, BoxModel.tinyMarginHorizontal]}>
              {Moment('1900-01-01 00:00:00')
                .add(totalTime - time, 'seconds')
                .format('mm:ss')}
            </Text>
            <TouchableHighlight
              onPress={onPressPlayVideo}
              underlayColor={theme.overlayColor}
              style={Styles.center}>
              <MaterialIcons
                name="fullscreen"
                size={25}
                color={theme.whiteWith07OpacityColor}
                style={Styles.center}
              />
            </TouchableHighlight>
          </View>
          <View
            style={[
              styles.control,
              {
                bottom: Size.HEIGHT / 10,
              },
            ]}>
            <TouchableHighlight
              onPress={onReplay10s}
              underlayColor={theme.overlayColor}
              style={Styles.center}>
              <MaterialIcons
                name="replay-10"
                size={30}
                color={theme.whiteColor}
                style={Styles.center}
              />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={onPressPlayVideo}
              underlayColor={theme.overlayColor}
              style={Styles.center}>
              {paused ? (
                <MaterialIcons
                  name="play-arrow"
                  size={70}
                  color={theme.whiteColor}
                  style={Styles.center}
                />
              ) : (
                <MaterialIcons
                  name="pause"
                  size={50}
                  color={theme.whiteColor}
                  style={Styles.center}
                />
              )}
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onForward10s}
              underlayColor={theme.overlayColor}
              style={Styles.center}>
              <MaterialIcons
                name="forward-10"
                size={30}
                color={theme.whiteColor}
                style={Styles.center}
              />
            </TouchableHighlight>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoYoutube: {alignSelf: 'stretch', flex: 1},
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  control: {
    height: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  controlContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0,
  },
  timeContainer: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    color: 'white',
  },
  sliderContainer: {
    flex: 1,
    marginRight: Distance.spacing_10,
  },
});
export default PLayYouTube;
