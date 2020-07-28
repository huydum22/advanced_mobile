import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {Styles} from '../../../styles';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../../Provider/Theme';
const BackgroundVideo = (props) => {
  const {theme} = useContext(ThemeContext);
  const {dismiss, imageUrl, onPressPlayVideo, onShare} = props;
  return (
    <FastImage
      style={[
        styles.videoContainer,
        Styles.fillRow,
        {backgroundColor: theme.backgroundColor},
      ]}
      source={{uri: imageUrl}}>
      <View
        style={{
          ...Styles.fillRowBetween,
          backgroundColor: theme.blackWith05OpacityColor,
        }}>
        <TouchableHighlight
          onPress={dismiss}
          underlayColor={theme.overlayColor}>
          <MaterialIcons
            name="cancel"
            size={30}
            color={theme.whiteWith07OpacityColor}
            style={styles.cancelButton}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onPressPlayVideo}
          underlayColor={theme.overlayColor}
          style={Styles.center}>
          <MaterialIcons
            name="play-arrow"
            size={150}
            color={theme.whiteWith07OpacityColor}
            style={Styles.center}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onShare}
          underlayColor={theme.overlayColor}>
          <Feather
            name="share"
            size={25}
            color={theme.whiteWith07OpacityColor}
            style={styles.shareButton}
          />
        </TouchableHighlight>
      </View>
    </FastImage>
  );
};
const styles = StyleSheet.create({
  cancelButton: {
    top: 15,
    left: 15,
  },
  shareButton: {
    top: 15,
    right: 15,
  },
  videoContainer: {
    flex: 1,
  },
});
export default BackgroundVideo;
