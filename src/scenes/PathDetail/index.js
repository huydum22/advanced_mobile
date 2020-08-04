import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {CourseVerticalItem} from '../../components/Course';
import {Styles, Typography} from '../../styles';
import {Header} from '../../components/PathDetail';
import {
  CourseDetailScreenName,
  LessonCourseScreenStack,
} from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
const PathDetail = (props) => {
  const {navigation, route, courseData} = props;
  const {theme} = useContext(ThemeContext);
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenName, {id: item.id});
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
      </View>
    );
  };
  const renderCoursesItem = (item) => {
    return <CourseVerticalItem onPressItem={onPressItem} item={item} />;
  };
  return (
    <SafeAreaView style={{backgroundColor: theme.primaryBackgroundColor}}>
      <View style={{backgroundColor: theme.backgroundColor}}>
        <StatusBar translucent barStyle="light-content" {...props} />

        <SectionList
          ItemSeparatorComponent={flatListSeparator}
          sections={[
            {title: 'Beginner', data: courseData.slice(0, 5)},
            {title: 'Intermediate', data: courseData.slice(5, 10)},
            {title: 'Advanced', data: courseData.slice(10, 15)},
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => renderCoursesItem(item)}
          renderSectionHeader={({section: {title}}) => renderHeader(title)}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <Header
                name={route.params.name}
                numberOfCourse={route.params.numberOfCourse}
                totalHour={route.params.totalHour}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
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
export default PathDetail;
