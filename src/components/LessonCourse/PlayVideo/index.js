import React, {useEffect, useContext, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import {Styles} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
const PLayVideo = (props) => {
  const {urlVideo} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.videoContainer}>
      {urlVideo === '' ? (
        <ActivityIndicator color={theme.primaryColor} />
      ) : (
        <Video
          controls={true}
          source={{uri: urlVideo}}
          ref={(ref) => {
            this.player = ref;
          }}
          style={styles.videoContainer}
          onBuffer={this.onBuffer}
          onError={this.videoError}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default PLayVideo;
