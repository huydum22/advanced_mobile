import React, {useContext, useState, useEffect} from 'react';
import {TouchableHighlight, View, Text, Alert} from 'react-native';
import Collapsible from 'react-native-collapsible';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Styles, Typography, BoxModel, Distance, Size} from '../../../../styles';
import Moment from 'moment';
import {ThemeContext} from '../../../../Provider/Theme';
import {LessonContext} from '../../../../Provider/LessonCourse';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Pie} from 'react-native-progress';
import RNFetchBlob from 'rn-fetch-blob';
import {getVideoUrlLesson} from '../../../../Actions/LessonCourse';
import {AuthenticationContext} from '../../../../Provider/Authentication';
const LessonItem = ({ItemLesson, collapsibleItems, onPressLesson}) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exist, setExist] = useState(false);
  const {state} = useContext(AuthenticationContext);
  const checkExist = () =>
    fs.exists(fs.dirs.DocumentDir + `/${ItemLesson.id}.mp4`).then((check) => {
      setExist(check);
    });
  useEffect(() => {
    checkExist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ItemLesson.id, fs, downloading]);
  const changeColorItemLesson = (lesson) => {
    if (itemCourse.itemLesson) {
      if (lesson.id === itemCourse.itemLesson.id) {
        return theme.primaryColor;
      }
    }

    return theme.primaryTextColor;
  };

  const renderDownloadView = () => {
    if (exist) {
      return (
        <Ionicons.Button
          name="checkmark-circle"
          size={20}
          color={theme.successColor}
          onPress={removeLesson}
          backgroundColor={theme.themeColor}
        />
      );
    } else {
      return (
        <Ionicons.Button
          name="arrow-down-circle-outline"
          size={20}
          color={theme.grayColor}
          onPress={DownloadLesson}
          backgroundColor={theme.themeColor}
        />
      );
    }
  };
  const fs = RNFetchBlob.fs;
  const removeLesson = () => {
    fs.unlink(fs.dirs.DocumentDir + `/${ItemLesson.id}.mp4`).then(() => {
      checkExist();
      Alert.alert('Xoá thành công');
    });
  };
  const DownloadLesson = () => {
    getVideoUrlLesson(itemCourse.course.id, ItemLesson.id, state.token).then(
      (response) => {
        setDownloading(true);
        RNFetchBlob.config({
          path: fs.dirs.DocumentDir + `/${ItemLesson.id}.mp4`,
        })
          .fetch('GET', response.videoUrl)
          .progress((received, total) => {
            setProgress(received / total);
          })
          .then((res) => {
            // the temp file path
            console.log('The file saved to ', res.path());
            setTimeout(() => {
              setDownloading(false);
            }, 400);
          });
      },
    );
  };
  return (
    <Collapsible collapsed={collapsibleItems.includes(ItemLesson.sectionId)}>
      <View style={Styles.fillRow}>
        <TouchableHighlight
          onPress={() => onPressLesson(ItemLesson)}
          underlayColor={theme.overlayColor}
          style={[BoxModel.smallMarginVertical, {flex: 1}]}>
          <View style={Styles.fillRowStart}>
            <View style={[Styles.center, {width: Size.scaleSize(30)}]}>
              <Text
                style={[
                  Typography.fontRegular,
                  {color: changeColorItemLesson(ItemLesson)},
                ]}>
                {ItemLesson.numberOrder}
              </Text>
            </View>
            <View
              style={[
                Styles.fillColumnStart,
                BoxModel.smallMarginHorizontal,
                {backgroundColor: theme.themeColor},
              ]}>
              <View style={[Styles.fillRow, {marginRight: Distance.medium}]}>
                {ItemLesson.isFinish ? (
                  <FontAwesome
                    name="check-circle"
                    size={20}
                    color={theme.primaryColor}
                    style={{marginRight: Distance.small}}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={20}
                    color={theme.primaryColor}
                    style={{marginRight: Distance.small}}
                  />
                )}
                <Text
                  style={[
                    Typography.fontRegular,
                    {color: changeColorItemLesson(ItemLesson)},
                  ]}>
                  {ItemLesson.name}
                </Text>
              </View>
              <Text style={[Typography.fontRegular, {color: theme.grayColor}]}>
                {' '}
                Video -{' '}
                {Moment('1900-01-01 00:00:00')
                  .add(ItemLesson.hours * 3600, 'seconds')
                  .format('mm:ss')}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={[Styles.center, {width: Size.scaleSize(50)}]}>
          {downloading ? (
            <Pie progress={progress} color={theme.primaryColor} size={20} />
          ) : (
            renderDownloadView()
          )}
        </View>
      </View>
    </Collapsible>
  );
};
export default LessonItem;
