import React, {useContext, useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Text,
} from 'react-native';
import {Slider} from 'react-native-elements';

import Video from 'react-native-video';
import {Styles, Size, BoxModel, Typography, Distance} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSafeArea} from 'react-native-safe-area-context';

import Moment from 'moment';
import YoutubePlayer from 'react-native-youtube-iframe';

const PLayVideo = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const [valueSlider, setValueSlider] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isHide, setHide] = useState(true);
  const [onChangeYoutube, setChangeYoutube] = useState(false);

  const [time, setTime] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('');
  const insets = useSafeArea();
  const [totalTime, setTotalTime] = useState(0);
  const playerRef = useRef(null);

  const dismiss = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (isHide === false) {
      setTimeout(() => {
        setHide(true);
      }, 3000);
    }
  }, [isHide]);
  const onPressPlayVideo = () => {
    setPaused(!paused);
    if (paused) {
      setHide(true);
    } else {
      setHide(false);
    }
  };
  const onProgress = (data) => {
    setTotalTime(data.seekableDuration);
    setValueSlider(data.currentTime / data.seekableDuration);
    setTime(
      Moment('1900-01-01 00:00:00')
        .add(data.currentTime, 'seconds')
        .format('mm:ss'),
    );
    setTimeRemaining(
      Moment('1900-01-01 00:00:00')
        .add(data.seekableDuration - data.currentTime, 'seconds')
        .format('mm:ss'),
    );
  };

  const onChangeValue = (value) => {
    this.player.seek(value * totalTime);
  };

  const onForward10s = () => {
    this.player.seek((valueSlider + 10 / totalTime) * totalTime);
  };
  const onReplay10s = () => {
    this.player.seek((valueSlider - 10 / totalTime) * totalTime);
  };
  //   console.log(props);
  const getYouTubeID = (str) => {
    return str.substring(str.lastIndexOf('/') + 1, str.length);
  };

  const getOnTouch = () => {
    if (isHide) {
      return theme.overlayColor;
    } else {
      return theme.blackWith05OpacityColor;
    }
  };

  const onPressHide = () => {
    setHide(!isHide);
  };

  return (
    <SafeAreaView style={styles.backgroundVideo}>
      <TouchableHighlight onPress={dismiss} underlayColor={theme.overlayColor}>
        <MaterialIcons
          name="close"
          size={30}
          color={theme.whiteWith07OpacityColor}
          style={styles.cancelButton}
        />
      </TouchableHighlight>
      {route.params.typeUploadVideoLesson === 1 ? (
        <View style={styles.backgroundVideo}>
          <Video
            paused={paused}
            onProgress={onProgress}
            source={{uri: route.params.urlVideo}}
            style={styles.videoContainer}
            ref={(ref) => {
              this.player = ref;
            }}
            onBuffer={this.onBuffer}
            onError={this.videoError}
          />

          <TouchableHighlight
            onPress={onPressHide}
            underlayColor={theme.overlayColor}
            style={[styles.container, {backgroundColor: getOnTouch()}]}>
            <View>
              <View
                style={[
                  styles.controlContainer,
                  BoxModel.marginHorizontal,
                  {
                    height:
                      Size.HEIGHT -
                      insets.top -
                      insets.bottom -
                      Size.scaleSize(50),
                  },
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
                <Text
                  style={[styles.timeContainer, BoxModel.tinyMarginHorizontal]}>
                  {time}
                </Text>
                <Slider
                  value={valueSlider}
                  onSlidingComplete={onChangeValue}
                  // onValueChange={onChangeValue}
                  thumbTintColor={theme.whiteColor}
                  style={styles.sliderContainer}
                  minimumTrackTintColor={theme.primaryColor}
                />
                <Text
                  style={[styles.timeContainer, BoxModel.tinyMarginHorizontal]}>
                  {timeRemaining}
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
            </View>
          </TouchableHighlight>
          {isHide ? undefined : (
            <View
              style={[
                styles.control,
                {
                  bottom: Size.HEIGHT / 2 - Size.scaleSize(30) - insets.top,
                },
              ]}>
              <TouchableHighlight
                onPress={onReplay10s}
                underlayColor={theme.overlayColor}
                style={Styles.center}>
                <MaterialIcons
                  name="replay-10"
                  size={50}
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
                    size={70}
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
                  size={50}
                  color={theme.whiteColor}
                  style={Styles.center}
                />
              </TouchableHighlight>
            </View>
          )}
        </View>
      ) : (
        <View style={[styles.backgroundVideo, Styles.fillCenter]}>
          <YoutubePlayer
            ref={playerRef}
            height={300}
            width={Size.WIDTH}
            videoId={getYouTubeID(route.params.urlVideo)}
            play={!paused}
            onPlaybackQualityChange={(q) => console.log(q)}
            volume={50}
            playbackRate={1}
            initialPlayerParams={{
              cc_lang_pref: 'us',
              showClosedCaptions: true,
              controls: true,
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoContainer: {
    height: Size.HEIGHT - Size.scaleSize(150),
    width: Size.WIDTH,
    backgroundColor: 'black',
  },
  cancelButton: {
    left: 15,
  },
  sliderContainer: {
    flex: 1,
    marginRight: Distance.spacing_10,
  },
  timeContainer: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    color: 'white',
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
  container: {
    position: 'absolute',
    height: Size.HEIGHT,
    width: '100%',
  },
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default PLayVideo;
