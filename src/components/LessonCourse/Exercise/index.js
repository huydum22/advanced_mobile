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
import {LIST_EXERCISE} from '../../../Constants/API';
import Moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {LocalizeContext} from '../../../Provider/Localize';
const ExerciseView = (props) => {
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const {itemCourse} = useContext(LessonContext);
  const [allExercise, setAllExercise] = useState([]);
  const {localize} = useContext(LocalizeContext);
  useEffect(() => {
    const fetchNote = async () => {
      try {
        let response = await API.post(
          LIST_EXERCISE,
          {lessonId: itemCourse.itemLesson.id},
          state.token,
        );
        if (response.isSuccess) {
          setAllExercise(response.data.payload.exercises);
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchNote();
  }, [itemCourse.itemLesson, state]);
  const moreAction = (item) => {
    // console.log(item);
  };
  const renderNoteItem = () => {
    if (allExercise) {
      return allExercise.map((note) => (
        <View key={note.id} style={Styles.fillRowCenter}>
          <View
            style={[
              Styles.fillColumnStart,
              BoxModel.marginHorizontal,
              BoxModel.tinyMarginVertical,
              styles.container,
            ]}>
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
                {localize.lessonExercise} : {note.title}
              </Text>
              <Text
                style={[
                  Typography.fontBold,
                  BoxModel.marginHorizontal,
                  {
                    color: theme.primaryColor,
                    fontSize: Typography.fontSize16,
                    textAlign: 'right',
                  },
                ]}>
                0/{note.exercises_questions.length}
              </Text>
            </View>
          </View>
        </View>
      ));
    }
  };

  return (
    <ScrollView style={{backgroundColor: theme.themeColor}}>
      {allExercise.length === 0 ? (
        <View style={[Styles.columnCenter, BoxModel.marginVertical]}>
          <Text
            style={[
              Typography.fontBold,
              {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
            ]}>
            {localize.searchErr}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize14, color: theme.grayColor},
            ]}>
            {localize.searchTry}
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
export default ExerciseView;
