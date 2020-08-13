import React, {useContext, useState} from 'react';
import {
  SectionList,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Title from '../../CourseDetail/HeaderComponent/TitleItem';
import Collapsible from 'react-native-collapsible';
import {useSafeArea} from 'react-native-safe-area-context';
import {Size, Styles, Typography, BoxModel} from '../../../styles';
import {API} from '../../../services';
import {LESSON_VIDEO} from '../../../Constants/API';
import {AuthenticationContext} from '../../../Provider/Authentication';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const LessonList = (props) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse, itemLesson, setItemLesson} = useContext(LessonContext);
  const [collapsibleItems, setCollapsibleItems] = useState([]);
  const {state} = useContext(AuthenticationContext);
  const insets = useSafeArea();

  const changeColorItemLesson = (lesson) => {
    if (itemLesson) {
      if (lesson.id === itemLesson.id) {
        return theme.primaryColor;
      }
    }

    return theme.primaryTextColor;
  };
  const flatListSeparator = () => {
    return (
      <View
        style={[
          styles.separator,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}
      />
    );
  };
  const renderListItem = (ItemLesson) => {
    return (
      <Collapsible collapsed={collapsibleItems.includes(ItemLesson.sectionId)}>
        <TouchableHighlight
          onPress={() => onPressPreviewLesson(ItemLesson)}
          underlayColor={theme.overlayColor}>
          <View
            style={[
              styles.textContainer,
              BoxModel.smallMarginHorizontal,
              {backgroundColor: theme.themeColor},
            ]}>
            <Text
              style={[
                styles.textContent,
                {color: changeColorItemLesson(ItemLesson)},
              ]}>
              {ItemLesson.name}
            </Text>
            {ItemLesson.isFinish ? (
              <FontAwesome
                name="check-circle"
                size={20}
                color={theme.successColor}
              />
            ) : undefined}
          </View>
        </TouchableHighlight>
      </Collapsible>
    );
  };
  const onPressHeader = (section) => {
    const newIds = [...collapsibleItems];
    const index = newIds.indexOf(section.data[0].sectionId);
    if (index > -1) {
      newIds.splice(index, 1);
    } else {
      newIds.push(section.data[0].sectionId);
    }
    setCollapsibleItems(newIds);
  };
  const onPressPreviewLesson = async (ItemLesson) => {
    try {
      let response1 = await API.get(
        `${LESSON_VIDEO}/${itemCourse.id}/${ItemLesson.id}`,
        state.token,
      );

      if (response1.isSuccess) {
        const resultSection = itemCourse.section.find(({lesson}) => {
          return lesson.find(({id}) => id === ItemLesson.id);
        });
        const result = resultSection.lesson.find(
          ({id}) => id === ItemLesson.id,
        );
        setItemLesson({
          ...result,
          videoUrl: response1.data.payload.videoUrl,
          currentTime: response1.data.payload.currentTime,
        });
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const renderHeader = (section) => {
    const {title} = section;
    return (
      <TouchableHighlight
        style={[
          styles.headerTouchable,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}
        onPress={() => onPressHeader(section)}
        underlayColor={theme.backgroundSeeAllButton}>
        <View
          style={[
            styles.headerContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}>
          <Text style={[styles.textHeader, {color: theme.primaryTextColor}]}>
            {title}
          </Text>
          {collapsibleItems.includes(section.data[0].sectionId) ? (
            <MaterialIcons
              name="expand-less"
              size={15}
              color={theme.primaryTextColor}
            />
          ) : (
            <MaterialIcons
              name="expand-more"
              size={15}
              color={theme.primaryTextColor}
            />
          )}
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SectionList
      ItemSeparatorComponent={flatListSeparator}
      sections={
        itemCourse.section
          ? itemCourse.section.map((data) => {
              return {
                title: data.name,
                data: data.lesson,
              };
            })
          : []
      }
      keyExtractor={(ItemLessonID, index) => ItemLessonID + index}
      renderItem={({item}) => renderListItem(item)}
      renderSectionHeader={({section}) => renderHeader(section)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => {
        return (
          <Title name={itemCourse.title} subtitle={itemCourse.instructorName} />
        );
      }}
      ListFooterComponent={() => {
        return (
          <View
            style={[
              styles.footer,
              {
                marginBottom: insets.bottom,
                backgroundColor: theme.themeColor,
              },
            ]}
          />
        );
      }}
      style={{backgroundColor: theme.themeColor}}
    />
  );
};
const styles = StyleSheet.create({
  footer: {height: 40},
  separator: {
    height: 1,
  },
  textContainer: {
    height: Size.scaleSize(50),
    ...Styles.rowBetween,
  },
  textContent: {
    ...Typography.fontRegular,
  },
  headerTouchable: {
    height: 50,
  },

  headerContainer: {
    height: 50,
    ...Styles.rowBetween,
    marginHorizontal: 20,
  },
  textHeader: {
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
});
export default LessonList;
