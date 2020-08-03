import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import {AuthenticationContext} from '../../../Provider/Authentication';
import {Styles, Typography, BoxModel, Size, Distance} from '../../../styles';
import {API} from '../../../services';
import {NOTE_ALL_LESSON} from '../../../Constants/API';
import Moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const NoteView = (props) => {
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const {itemCourse} = useContext(LessonContext);
  const [allNote, setAllNote] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        let response = await API.get(
          `${NOTE_ALL_LESSON}/${itemCourse.id}`,
          state.token,
        );
        if (response.isSuccess) {
          setAllNote(response.data.payload);
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchNote();
  }, [itemCourse, state]);
  const moreAction = (item) => {
    // console.log(item);
  };
  const renderNoteItem = () => {
    if (allNote) {
      return allNote.map((note) => (
        <View key={note.id} style={Styles.fillRowCenter}>
          <View
            style={[
              Styles.fillColumnStart,
              BoxModel.marginHorizontal,
              BoxModel.tinyMarginVertical,
              styles.container,
            ]}>
            <View
              style={[
                styles.timeContainer,
                {
                  backgroundColor: theme.primaryColor,
                  borderRadius: Size.scaleSize(15),
                },
              ]}>
              <Text
                style={[
                  Typography.fontBold,
                  BoxModel.tinyPadding,
                  {
                    color: theme.primaryBackgroundColor,
                    fontSize: Typography.fontSize14,
                  },
                ]}>
                {Moment('1900-01-01 00:00:00')
                  .add(note.time, 'seconds')
                  .format('mm:ss')}
              </Text>
            </View>
            <View style={[Styles.fillRowStart, BoxModel.tinyMarginVertical]}>
              <FontAwesome
                name="file-text-o"
                size={15}
                color={theme.primaryColor}
              />
              <Text
                style={[
                  Typography.fontBold,
                  BoxModel.marginHorizontal,
                  {
                    color: theme.primaryColor,
                    fontSize: Typography.fontSize16,
                  },
                ]}>
                Lesson {note.lessonNumberOrder} - {note.lessonName}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: theme.backgroundSeeAllButton,
                borderRadius: Size.scaleSize(5),
              }}>
              <Text
                style={[
                  Typography.fontRegular,
                  BoxModel.smallPadding,
                  {
                    color: theme.primaryTextColor,
                    fontSize: Typography.fontSize14,
                    marginLeft: Distance.normal,
                  },
                ]}>
                {note.content}
              </Text>
            </View>
            <Text
              style={[
                Typography.fontRegular,
                BoxModel.tinyMarginVertical,
                {
                  color: theme.grayColor,
                  fontSize: Typography.fontSize14,
                },
              ]}>
              {Moment(note.updatedAt).format(' h:mm:ss')},{' '}
              {Moment(note.updatedAt).subtract(10, 'days').calendar()}
            </Text>
          </View>
          <TouchableHighlight
            onPress={() => moreAction(note)}
            underlayColor={theme.overlayColor}
            style={{marginRight: Distance.small}}>
            <Entypo
              name="dots-three-horizontal"
              color={theme.primaryTextColor}
              size={20}
            />
          </TouchableHighlight>
        </View>
      ));
    }
  };

  return (
    <ScrollView style={{backgroundColor: theme.themeColor}}>
      {allNote.length === 0 ? (
        <View style={[Styles.columnCenter, BoxModel.marginVertical]}>
          <Text
            style={[
              Typography.fontBold,
              {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
            ]}>
            There's nothing here yet
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize14, color: theme.grayColor},
            ]}>
            Tap create note to make your first note
          </Text>
        </View>
      ) : (
        renderNoteItem()
      )}
      <View style={{height: Size.scaleSize(50)}} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  timeContainer: {
    alignSelf: 'flex-start',
  },
  container: {
    flex: 1,
  },
});
export default NoteView;
