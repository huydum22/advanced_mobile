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
import YouTube from 'react-native-youtube';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import {Slider} from 'react-native-elements';
import Moment from 'moment';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const getYouTubeID = (str) => {
  return str.substring(str.lastIndexOf('/') + 1, str.length);
};
const PLayYouTube = (props) => {
  const {urlVideo} = props;
  const playerRef = useRef();
  const {theme} = useContext(ThemeContext);
  const {itemLesson} = useContext(LessonContext);
  const [paused, setPaused] = useState(false);
  const [isHide, setHide] = useState(true);
  const [valueSlider, setValueSlider] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (Platform.android) {
      if (totalTime) {
        const fetchDataAndroid = async () => {
          try {
            let response = await playerRef.current.getCurrentTime();
            setValueSlider(response / totalTime);
            setTime(response);
            console.log(response);
          } catch (err) {
            console.log(err);
          }
        };
        setTimeout(() => {
          fetchDataAndroid();
        }, 500);
      }
    }
  });
  useEffect(() => {
    if (itemLesson) {
      setTotalTime(itemLesson.hours * 3600);
    }
  }, [itemLesson]);
  const onPressPlayVideo = () => {
    setPaused(!paused);
  };
  const onForward10s = () => {
    playerRef.current.seekTo((valueSlider + 10 / totalTime) * totalTime);
  };
  const onReplay10s = () => {
    playerRef.current.seekTo((valueSlider - 10 / totalTime) * totalTime);
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

  const onProgress = (data) => {
    setValueSlider(data.currentTime / totalTime);
    setTime(data.currentTime);
  };
  return (
    <View style={styles.backgroundVideo}>
      <YouTube
        apiKey="AIzaSyAy_jBdA-GWmf6dVmMstMXe8DSKWdPI69k"
        ref={playerRef}
        videoId={getYouTubeID(urlVideo)}
        play={!paused}
        fullscreen={false}
        loop={false}
        controls={0}
        style={styles.videoYoutube}
        onProgress={onProgress}
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
