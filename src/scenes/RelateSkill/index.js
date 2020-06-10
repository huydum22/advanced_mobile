import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  FlatList,
  SectionList,
  Text,
} from 'react-native';
import SeeAllBtn from '../../components/common/see-all-button';
import {CourseHorizontalItem} from '../../components/ListCourseHorizontal';
import {PathItemHorizontal} from '../../components/ListPathHorizontal';
import {AuthorHorizontalItem} from '../../components/ListAuthorHorizontal';
import {PopularSkillItem} from '../../components/ListSkillHorizontal';
import {
  Colors,
  Distance,
  Typography,
  Styles,
  BoxModel,
  Size,
} from '../../styles';
import dataCourse from '../../ExampleData/course';
import dataSkill from '../../ExampleData/skill';
import dataAuthor from '../../ExampleData/author';
import dataPath from '../../ExampleData/path';
import {
  PopularSkillScreenName,
  PathDetailScreenName,
  AuthorDetailScreenName,
  CourseDetailScreenName,
} from '../../config/ScreenName';
const RelateSkill = (props) => {
  const {navigation, route} = props;
  const showListCourse = () => {};
  const onPressSkill = (item) => {
    navigation.navigate(PopularSkillScreenName);
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
  const onPressCourseItem = (item) => {
    navigation.navigate(CourseDetailScreenName);
  };
  const renderHeader = (title) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>{title} </Text>
        {title === 'Popular skills' ? undefined : (
          <SeeAllBtn onPress={showListCourse} />
        )}
      </View>
    );
  };
  const renderListItem = (data) => {
    if (data === 0) {
      return (
        <FlatList
          data={dataSkill}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <PopularSkillItem
              key={item.id}
              item={item}
              onPress={onPressSkill}
            />
          )}
          ListFooterComponent={() => {
            return <View style={styles.footer} />;
          }}
        />
      );
    }
    if (data === 1) {
      return (
        <FlatList
          data={dataPath.slice(0, 5)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <PathItemHorizontal
              item={item}
              key={item.id}
              onPress={onPressPathItem}
            />
          )}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(200),
            offset: Size.scaleSize(200) * index,
            index,
          })}
        />
      );
    }
    if (data === 4) {
      return (
        <FlatList
          data={dataAuthor.slice(0, 5)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <AuthorHorizontalItem
              item={item}
              key={item.id}
              onPress={onPressAuthorItem}
            />
          )}
          ListFooterComponent={() => {
            return <View style={styles.footer} />;
          }}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(160),
            offset: Size.scaleSize(160) * index,
            index,
          })}
        />
      );
    }
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={dataCourse.slice(0, 5)}
        renderItem={({item}) => (
          <CourseHorizontalItem item={item} onPress={onPressCourseItem} />
        )}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(200),
          offset: Size.scaleSize(200) * index,
          index,
        })}
      />
    );
  };
  return (
    <SafeAreaView>
      <SectionList
        style={styles.container}
        sections={[
          {title: 'Popular skills', data: [0]},
          {title: 'Path', data: [1]},
          {title: 'New', data: [2]},
          {title: 'Trending', data: [3]},
          {title: 'Top authors', data: [4]},
        ]}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title}}) => renderHeader(title)}
        ListFooterComponent={() => {
          return <View style={styles.footer} />;
        }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderListItem(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  footer: {height: Distance.spacing_20},
  titleContainer: {
    ...BoxModel.marginHorizontal,
    marginTop: Distance.normal,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});

export default RelateSkill;
