import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  Text,
  FlatList,
} from 'react-native';
import {CourseHorizontalItem} from '../../components/ListCourseHorizontal';
import {PathItemHorizontal} from '../../components/ListPathHorizontal';
import {AuthorHorizontalItem} from '../../components/ListAuthorHorizontal';
import {
  Colors,
  Distance,
  Styles,
  Typography,
  Size,
  BoxModel,
} from '../../styles';
import SeeAllBtn from '../../components/common/see-all-button';
import dataCourse from '../../ExampleData/course';
import dataAuthor from '../../ExampleData/author';
import dataPath from '../../ExampleData/path';
import {
  PathDetailScreenName,
  AuthorDetailScreenName,
  CourseDetailScreenName,
} from '../../config/ScreenName';
const PopularSkill = (props) => {
  const {navigation, route} = props;
  const showListCourse = () => {};
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
        <SeeAllBtn onPress={showListCourse} />
      </View>
    );
  };
  const renderListItem = (data) => {
    if (data === 0) {
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
    if (data === 3) {
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
          {title: 'Path', data: [0]},
          {title: 'New', data: [1]},
          {title: 'Trending', data: [2]},
          {title: 'Top author', data: [3]},
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
    ...BoxModel.smallMarginVertical,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});

export default PopularSkill;
