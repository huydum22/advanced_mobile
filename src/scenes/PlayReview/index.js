import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Text,
} from 'react-native';
import {Slider} from 'react-native-elements';

import {Styles, Size, BoxModel, Typography, Distance} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import VideoFrame from '../../components/PreviewCourse/Video';
import YoutubeFrame from '../../components/PreviewCourse/Youtube';

const PLayVideo = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const [paused, setPaused] = useState(false);

  const dismiss = () => {
    navigation.goBack();
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
      {route.params.typeUploadVideoLesson === 1 ? (
        <VideoFrame
          urlVideo={route.params.urlVideo}
          paused={paused}
          setPaused={setPaused}
        />
      ) : (
        <YoutubeFrame paused={paused} urlVideo={route.params.urlVideo} />
        // <View style={[styles.backgroundVideo, Styles.fillCenter]}>
        //   <YoutubePlayer
        //     ref={playerRef}
        //     height={300}
        //     width={Size.WIDTH}
        //     videoId={getYouTubeID(route.params.urlVideo)}
        //     play={!paused}
        //     volume={50}
        //     playbackRate={1}
        //     initialPlayerParams={{
        //       cc_lang_pref: 'us',
        //       showClosedCaptions: true,
        //       controls: true,
        //     }}
        //   />
        // </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'black',
  },

  cancelButton: {
    left: 15,
  },
});
export default PLayVideo;
