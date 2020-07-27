import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Text,
} from 'react-native';
import Video from 'react-native-video';
import {Styles, Size, BoxModel, Typography, Distance} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Slider} from 'react-native-elements';
import Moment from 'moment';

const PLayVideo = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const [value, setValue] = useState(0);
  const [paused, setPaused] = useState(false);
  const [time, setTime] = useState('');
  const [totalTime, setTotalTime] = useState(0);

  const dismiss = () => {
    navigation.goBack();
  };
  const onPressPlayVideo = () => {
    setPaused(!paused);
  };
  const onProgress = (data) => {
    // console.log(data);
    // setTime(Moment(Moment.duration(3500)._data).format('mm:ss'));
    setTotalTime(data.seekableDuration);
    setValue(data.currentTime / data.seekableDuration);
    setTime(
      Moment('1900-01-01 00:00:00')
        .add(data.currentTime, 'seconds')
        .format('mm:ss'),
    );
  };
  const onSeek = (data) => {
    // console.log(data);
    this.player.seek(0);
  };
  const onChangeValue = (value) => {
    // console.log(this.player._onLoad.currentTime);
    // console.log();
    this.player.seek(value * totalTime);
  };
  //   console.log(props);
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
      <View style={[Styles.fillRowCenter, BoxModel.marginHorizontal]}>
        <TouchableHighlight
          onPress={onPressPlayVideo}
          underlayColor={theme.overlayColor}
          style={Styles.center}>
          {paused ? (
            <MaterialIcons
              name="play-arrow"
              size={30}
              color={theme.whiteWith07OpacityColor}
              style={Styles.center}
            />
          ) : (
            <MaterialIcons
              name="pause"
              size={30}
              color={theme.whiteWith07OpacityColor}
              style={Styles.center}
            />
          )}
        </TouchableHighlight>
        <Slider
          value={value}
          onValueChange={onChangeValue}
          thumbTintColor={theme.primaryColor}
          style={styles.sliderContainer}
        />
        <Text style={styles.timeContainer}>{time}</Text>
      </View>
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
    // top: 15,
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
});
export default PLayVideo;
