import React, {useContext} from 'react';
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
import {CourseHorizontalItem} from '../../components/Course';
import {PathItemHorizontal} from '../../components/Path';
import {AuthorHorizontalItem} from '../../components/Author';
import {PopularSkillItem} from '../../components/Skill';
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
  LessonCourseScreenStack,
  ShowListPathScreenName,
  ShowListCourseScreenName,
} from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
const RelateSkill = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const showListCourse = (index, title) => {
    if (index === 1) {
      navigation.navigate(ShowListPathScreenName);
    } else {
      navigation.navigate(ShowListCourseScreenName, {
        title: title,
      });
    }
  };
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
    navigation.navigate(CourseDetailScreenName, {id: item.id});
  };
  const renderHeader = (title, itemIndex) => {
    return (
      <View style={styles.titleContainer}>
        <Text
          style={[
            Styles.titleRow,
            Typography.fontBold,
            {color: theme.primaryTextColor},
          ]}>
          {title}{' '}
        </Text>
        {itemIndex[0] === 0 || itemIndex[0] === 4 ? undefined : (
          <SeeAllBtn onPress={() => showListCourse(itemIndex[0], title)} />
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
        style={{backgroundColor: theme.backgroundColor}}
        sections={[
          {title: 'Popular skills', data: [0]},
          {title: 'Path', data: [1]},
          {title: 'New', data: [2]},
          {title: 'Trending', data: [3]},
          {title: 'Top authors', data: [4]},
        ]}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title, data}}) =>
          renderHeader(title, data)
        }
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
  footer: {height: Distance.spacing_20},
  titleContainer: {
    ...BoxModel.marginHorizontal,
    marginTop: Distance.normal,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});

export default RelateSkill;
