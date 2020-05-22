import React from 'react';
import {StyleSheet, View, SectionList, Text, list} from 'react-native';

import courseData from '../../ExampleData/course';
import pathData from '../../ExampleData/path';
import authorData from '../../ExampleData/author';

import ItemCourse from '../../Courses/CoursesItem/course-item';
import ItemPath from '../Paths/PathItem/path-item';
import ItemAuthor from '../Authors/AuthorItem/author-item';

import mainStyle from '../../styles/styles';
import colors from '../../styles/color';
import SeeAllBtn from '../common/see-all-button';

const Search = (props) => {
  const flatListSeparator = () => {
    return <View style={styles.separator} />;
  };
  const renderHeader = (title) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[mainStyle.titleInList, styles.textHeader]}>{title}</Text>
        <SeeAllBtn />
      </View>
    );
  };
  const renderCoursesItem = (item) => {
    return (
      <ItemCourse
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
      <ItemPath
        name={item.name}
        image={item.image}
        numberOfCourse={item.numberOfCourse}
        totalHour={item.totalHour}
      />
    );
  };
  const renderAuthorItem = (item) => {
    return (
      <ItemAuthor
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
    backgroundColor: colors.backgroundColor,
  },
  headerContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundColor,
  },
  separator: {
    height: 1,
    backgroundColor: colors.backgroundColor,
  },
  textHeader: {
    marginLeft: 10,
  },
});
export default Search;
