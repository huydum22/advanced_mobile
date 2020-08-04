import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import {Size, Styles} from '../../../styles';
const getYouTubeID = (str) => {
  return str.substring(str.lastIndexOf('/') + 1, str.length);
};
const PLayYouTube = (props) => {
  const {urlVideo} = props;
  const [widthVid, setWidth] = useState(0);
  const [heightVid, setHeight] = useState(0);
  const playerRef = useRef();

  useEffect(() => {
    const fetchYoutubeMetadata = async () => {
      try {
        let response = await getYoutubeMeta(getYouTubeID(urlVideo));
        setWidth(response.width);
        setHeight(response.height);

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchYoutubeMetadata();
  }, [urlVideo]);
  return (
    <View style={styles.backgroundVideo}>
      <YoutubePlayer
        ref={playerRef}
        height={heightVid}
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
