import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Size, Styles} from '../../../styles';
const getYouTubeID = (str) => {
  return str.substring(str.lastIndexOf('/') + 1, str.length);
};
const PLayYouTube = (props) => {
  const {urlVideo} = props;

  const playerRef = useRef(null);
  return (
    <View style={[styles.backgroundVideo, Styles.center]}>
      <YoutubePlayer
        ref={playerRef}
        height={250}
        width={Size.WIDTH}
        videoId={getYouTubeID(urlVideo)}
        play={true}
        onChangeState={(event) => console.log(event)}
        onReady={() => console.log('ready')}
        onError={(e) => console.log(e)}
        onPlaybackQualityChange={(q) => console.log(q)}
        volume={50}
        playbackRate={1}
        initialPlayerParams={{
          cc_lang_pref: 'us',
          showClosedCaptions: true,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default PLayYouTube;
