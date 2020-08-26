import React, {useContext, useState} from 'react';
import {SectionList, View, StyleSheet} from 'react-native';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Title from '../../CourseDetail/HeaderComponent/TitleItem';
import {useSafeArea} from 'react-native-safe-area-context';
import {AuthenticationContext} from '../../../Provider/Authentication';
import HeaderTitle from '../../CourseDetail/HeaderComponent';
import Item from './LessonItem';
import Header from './LessonHeader';
const LessonList = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {itemCourse, pressLessonProvider} = useContext(LessonContext);
  const [collapsibleItems, setCollapsibleItems] = useState([]);
  const {state} = useContext(AuthenticationContext);
  const insets = useSafeArea();
  const [isPreview, setPreview] = useState(false);

  const showPreviewTitle = () => {
    setPreview(!isPreview);
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
  const onPressLesson = async (ItemLesson) => {
    pressLessonProvider(state.token, itemCourse.course.id, ItemLesson.id);
  };

  return (
    <SectionList
      ItemSeparatorComponent={flatListSeparator}
      sections={
        itemCourse.course.section
          ? itemCourse.course.section.map((data) => {
              return {
                title: data.name,
                data: data.lesson,
              };
            })
          : []
      }
      keyExtractor={(ItemLessonID, index) => ItemLessonID + index}
      renderItem={({item}) => (
        <Item
          ItemLesson={item}
          collapsibleItems={collapsibleItems}
          onPressLesson={onPressLesson}
        />
      )}
      renderSectionHeader={({section}) => (
        <Header
          section={section}
          collapsibleItems={collapsibleItems}
          onPressHeader={onPressHeader}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => {
        return (
          <View>
            {isPreview ? (
              <HeaderTitle
                navigation={navigation}
                route={route}
                item={itemCourse.course}
                showPreview={false}
                showPreviewTitle={showPreviewTitle}
                courseID={itemCourse.course.id}
              />
            ) : (
              <MaterialIcons.Button
                name="expand-less"
                size={20}
                backgroundColor={theme.themeColor}
                onPress={showPreviewTitle}
                style={styles.previewButton}
                color={theme.primaryTextColor}>
                <Title name={itemCourse.course.title} />
              </MaterialIcons.Button>
            )}
          </View>
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

  previewButton: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LessonList;
