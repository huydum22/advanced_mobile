import React from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import courseData from '../../ExampleData/course';
import {CourseVerticalItem} from '../../components/Course';
import {Styles, Colors, Typography} from '../../styles';
import {Header} from '../../components/PathDetail';
import {CourseDetailScreenName} from '../../config/ScreenName';
const PathDetail = (props) => {
  const {navigation, route} = props;
  const onPressItem = (item) => {
    navigation.push(CourseDetailScreenName);
  };
  const flatListSeparator = () => {
    return <View style={styles.separator} />;
  };
  const renderHeader = (title) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>{title}</Text>
      </View>
    );
  };
  const renderCoursesItem = (item) => {
    return <CourseVerticalItem onPressItem={onPressItem} item={item} />;
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.whiteColor}}>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={Colors.primaryColor}
          {...props}
        />

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
export default PathDetail;
