import React from 'react';
import {StyleSheet, View, SectionList, Text, StatusBar} from 'react-native';

import courseData from '../../ExampleData/course';
import pathData from '../../ExampleData/path';
import authorData from '../../ExampleData/author';

import {CourseVerticalItem} from '../ListCourseVertical';
import {PathItemVertical} from '../ListPathVertical';
import {AuthorVerticalItem} from '../ListAuthorVertical';

import {Styles, Colors, Typography} from '../../styles';
import SeeAllBtn from '../common/see-all-button';
import {
  SearchCourseScreenName,
  SearchPathScreenName,
  SearchAuthorScreenName,
} from '../../config/ScreenName';
const Search = (props) => {
  const {navigation, route} = props;

  const showAll = (e) => {
    if (e === 'Courses') {
      navigation.jumpTo(SearchCourseScreenName);
    }
    if (e === 'Paths') {
      navigation.jumpTo(SearchPathScreenName);
    }
    if (e === 'Authors') {
      navigation.jumpTo(SearchAuthorScreenName);
    }
  };
  const flatListSeparator = () => {
    return <View style={styles.separator} />;
  };
  const renderHeader = (title) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>{title}</Text>
        <SeeAllBtn onPress={() => showAll(title)} />
      </View>
    );
  };
  const renderCoursesItem = (item) => {
    return (
      <CourseVerticalItem
        navigation={navigation}
        route={route}
        name={item.name}
        author={item.author}
        level={item.level}
        timeToStart={item.timeToStart}
        totalHour={item.totalHour}
        totalRate={item.totalRate}
        rate={item.rate}
        image={item.image}
      />
    );
  };
  const renderPathItem = (item) => {
    return (
      <PathItemVertical
        navigation={navigation}
        route={route}
        name={item.name}
        image={item.image}
        numberOfCourse={item.numberOfCourse}
        totalHour={item.totalHour}
      />
    );
  };
  const renderAuthorItem = (item) => {
    return (
      <AuthorVerticalItem
        navigation={navigation}
        route={route}
        name={item.name}
        image={item.image}
        numberOfCourse={item.numberOfCourse}
      />
    );
  };
  const renderListItem = (item) => {
    if (courseData.find((e) => e === item)) {
      return renderCoursesItem(item);
    }
    if (pathData.find((e) => e === item)) {
      return renderPathItem(item);
    }
    if (authorData.find((e) => e === item)) {
      return renderAuthorItem(item);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={Colors.primaryColor} {...props} />

      <SectionList
        ItemSeparatorComponent={flatListSeparator}
        sections={[
          {title: 'Courses', data: courseData.slice(0, 5)},
          {title: 'Paths', data: pathData.slice(0, 5)},
          {title: 'Authors', data: authorData.slice(0, 5)},
        ]}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => renderListItem(item)}
        renderSectionHeader={({section: {title}}) => renderHeader(title)}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  headerContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundSeeAllButton,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.backgroundColor,
  },
  textHeader: {
    marginLeft: 10,
  },
});
export default Search;
