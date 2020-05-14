import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import EmptyCourses from './EmptyCource/empty-cource';
import colors from '../../../config/color';
const home = (props) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={true}>
      <SectionCourses title="Software development" />
      <SectionCourses title="IT operations" />
      <SectionCourses title="Data Professional" />
      <SectionCourses title="Security Professional" />
      <EmptyCourses
        title="My paths"
        icon="book-open"
        message="Paths will guild you in learning a specific skill or technology"
      />
      <EmptyCourses
        title="My channels"
        icon="radio"
        message="Use channels to save, organize, save and share content to accomplish your learning objectives"
      />
      <EmptyCourses
        title="Bookmarks"
        icon="bookmark"
        message="Use bookmarks to quickly save courses for later"
      />
      <View style={{height: 20}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.backgroundColor,
    // backgroundColor: 'white'
  },
});

export default home;
