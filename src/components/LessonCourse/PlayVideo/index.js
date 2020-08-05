import React, {useEffect, useContext, useRef, useState} from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import Video from 'react-native-video';
import {Styles, Size, BoxModel, Typography, Distance} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Slider} from 'react-native-elements';
import Moment from 'moment';
const PLayVideo = (props) => {
  const {urlVideo} = props;
  const {theme} = useContext(ThemeContext);
  const {itemLesson} = useContext(LessonContext);
  const [paused, setPaused] = useState(false);
  const [onDragSlider, setDragSlider] = useState(false);
  const [isHide, setHide] = useState(true);
  const [valueSlider, setValueSlider] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [time, setTime] = useState(0);
  var playerRef = useRef();
  useEffect(() => {
    if (itemLesson) {
      setTotalTime(itemLesson.hours * 3600);
    }
  }, [itemLesson]);
  const onPressPlayVideo = () => {
    setPaused(!paused);
  };
  const onForward10s = () => {
    playerRef.seek((valueSlider + 10 / totalTime) * totalTime);
  };
  const onReplay10s = () => {
    playerRef.seek((valueSlider - 10 / totalTime) * totalTime);
  };
  const onPressHide = () => {
    setHide(!isHide);
  };
  useEffect(() => {
    if (!isHide) {
      if (!onDragSlider) {
        setTimeout(() => {
          setHide(true);
        }, 3000);
      }
    }
  }, [isHide, onDragSlider]);
  const getOnTouch = () => {
    if (isHide) {
      return theme.overlayColor;
    } else {
      return theme.blackWith05OpacityColor;
    }
  };
  const onCompleteSeek = (value) => {
    playerRef.seek(value * totalTime);
  };
  const onSeekSlider = (value) => {
    setDragSlider(true);
    setTimeout(() => {
      setDragSlider(false);
    }, 1000);
  };
  const onProgress = (data) => {
    setValueSlider(data.currentTime / data.seekableDuration);
    setTime(data.currentTime);
    // setTime(
    //   Moment('1900-01-01 00:00:00')
    //     .add(data.currentTime, 'seconds')
    //     .format('mm:ss'),
    // );
  };
  return (
    <View style={styles.videoContainer}>
      <Video
        onProgress={onProgress}
        controls={false}
        source={{uri: urlVideo}}
        ref={(ref) => {
          playerRef = ref;
        }}
        paused={paused}
        style={styles.videoContainer}
        onBuffer={this.onBuffer}
        onError={this.videoError}
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
              onValueChange={onSeekSlider}
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
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
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
export default PLayVideo;
