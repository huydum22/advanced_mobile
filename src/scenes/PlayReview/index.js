import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Video from 'react-native-video';

const PLayVideo = (props) => {
  const {navigation, route} = props;
  console.log(route);
  return (
    <View style={styles.backgroundVideo}>
      <Video
        controls
        fullscreen
        paused
        source={{uri: route.params.urlVideo}} // Can be a URL or a local file.
        style={styles.backgroundVideo}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
  },
});
export default PLayVideo;
