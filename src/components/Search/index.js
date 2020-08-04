import React, {useContext} from 'react';
import {StyleSheet, View, SectionList, Text, StatusBar} from 'react-native';

import {CourseVerticalItem} from '../Course';
import {PathItemVertical} from '../Path';
import {AuthorVerticalItem} from '../Author';

import {Styles, Colors, Typography} from '../../styles';
import SeeAllBtn from '../common/see-all-button';
import {
  SearchCourseScreenName,
  SearchPathScreenName,
  SearchAuthorScreenName,
  CourseDetailScreenName,
  PathDetailScreenName,
  AuthorDetailScreenName,
  LessonCourseScreenStack,
} from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
const Search = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route, courseData, pathData, authorData} = props;
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenName, {id: item.id});
  };
  const onPressPathItem = (item) => {
    navigation.navigate(PathDetailScreenName, {
      name: item.name,
      numberOfCourse: item.numberOfCourse,
      totalHour: item.totalHour,
    });
  };
  const onPressAuthorItem = (item) => {
    navigation.navigate(AuthorDetailScreenName, {
      name: item.name,
    });
  };
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
    return (
      <View
        style={[styles.separator, {backgroundColor: theme.backgroundColor}]}
      />
    );
  };
  const renderHeader = (title) => {
    return (
      <View
        style={[
          styles.headerContainer,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}>
        <Text
          style={[
            Styles.titleRow,
            Typography.fontBold,
            {color: theme.primaryTextColor},
          ]}>
          {title}
        </Text>
        <SeeAllBtn onPress={() => showAll(title)} />
      </View>
    );
  };
  const renderCoursesItem = (item) => {
    return <CourseVerticalItem onPressItem={onPressItem} item={item} />;
  };
  const renderPathItem = (item) => {
    return <PathItemVertical onPressItem={onPressPathItem} item={item} />;
  };
  const renderAuthorItem = (item) => {
    return <AuthorVerticalItem onPressItem={onPressAuthorItem} item={item} />;
  };
  const renderListItem = (item) => {
    if (courseData.includes(item)) {
      return renderCoursesItem(item);
    }
    if (pathData.includes(item)) {
      return renderPathItem(item);
    }
    if (authorData.includes(item)) {
      return renderAuthorItem(item);
    }
  };

  return (
    <View style={{backgroundColor: theme.backgroundColor}}>
      <StatusBar translucent backgroundColor={theme.primaryColor} {...props} />

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
  headerContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    height: 1,
  },
  textHeader: {
    marginLeft: 10,
  },
});
export default Search;
