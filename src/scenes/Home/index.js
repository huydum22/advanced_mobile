import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import {CourseHorizontalItem} from '../../components/Course';
import EmptyComponent from '../../components/EmptyComponent';
import {CourseContext} from '../../Provider/Course';
import {Distance, Styles, Typography, BoxModel, Size} from '../../styles';
import Banner from '../../components/Banner';
import backgroundImage02 from '../../assets/image/backgroundImage02.png';
import SeeAllBtn from '../../components/common/see-all-button';
import {listCourseProvider} from '../../services/Courses';
import emptyCourse from '../../ExampleData/emptyCourse';
import {
  ShowListCourseScreenName,
  CourseDetailScreenName,
  CourseDetailScreenStack,
} from '../../Constants/ScreenName';
import {
  SearchAllCategoryAPI,
  ListCourseByCategoryAPI,
} from '../../services/Category';
import {ThemeContext} from '../../Provider/Theme';
import {BookmarkContext} from '../../Provider/Bookmark';
import {MyChannelContext} from '../../Provider/MyChannel';
import {MyPathContext} from '../../Provider/MyPath';
import {CategoryContext} from '../../Provider/Category';

import p from 'pretty-format';
const Home = (props) => {
  const {navigation, route} = props;
  const {courses, setCourses} = useContext(CourseContext);
  const {listCategory, setListCategory} = useContext(CategoryContext);
  const {bookmarkCourses} = useContext(BookmarkContext);
  const {myChannelPath} = useContext(MyChannelContext);
  const {myPath} = useContext(MyPathContext);
  const {theme} = useContext(ThemeContext);
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState([]);

  const fetchData = async () => {
    try {
      let response = await listCourseProvider();
      let res = await SearchAllCategoryAPI();
      // console.log(p(res.data.payload));
      setListCategory(res.data.payload);
      setCourses(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getData();
  }, [listCategory]);
  const onPressEmptyComponent = (title) => {
    navigation.navigate(ShowListCourseScreenName, {
      title: title,
    });
  };
  const onPressBanner = () => {};
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenStack, {
      screen: CourseDetailScreenName,
      params: {id: item.id},
    });
  };

  const getData = async () => {
    try {
      let response = await ListCourseByCategoryAPI(listCategory[0].id);
      console.log(response.data.payload.rows);
      setState1(response.data.payload.rows);
      let response1 = await ListCourseByCategoryAPI(listCategory[1].id);
      setState2(response1.data.payload.rows);
    } catch ({response}) {}
  };
  console.log(p(listCategory));
  const Footer = () => {
    return emptyCourse.map((item) => (
      <EmptyComponent
        title={item.title}
        icon={item.icon}
        message={item.message}
        key={item.title}
      />
    ));
  };
  const showListCourse = (title) => {
    navigation.navigate(ShowListCourseScreenName, {
      title: title,
    });
  };
  const renderHeader = (title, data) => {
    if (data[0] === 6 && bookmarkCourses.length === 0) {
      return <View />;
    }
    if (data[0] === 5 && myChannelPath.length === 0) {
      return <View />;
    }
    if (data[0] === 4 && myPath.length === 0) {
      return <View />;
    }
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
        <SeeAllBtn onPress={() => showListCourse(title)} />
      </View>
    );
  };
  const renderListItem = (indexItem) => {
    if (indexItem === 6 && bookmarkCourses.length === 0) {
      return (
        <EmptyComponent
          title={emptyCourse[2].title}
          icon={emptyCourse[2].icon}
          message={emptyCourse[2].message}
        />
      );
    }
    if (indexItem === 5 && myChannelPath.length === 0) {
      return (
        <EmptyComponent
          title={emptyCourse[1].title}
          icon={emptyCourse[1].icon}
          message={emptyCourse[1].message}
        />
      );
    }
    if (indexItem === 4 && myPath.length === 0) {
      return (
        <EmptyComponent
          title={emptyCourse[0].title}
          icon={emptyCourse[0].icon}
          message={emptyCourse[0].message}
        />
      );
    }
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={courses.slice(0, 5)}
        renderItem={({item}) => (
          <CourseHorizontalItem item={item} onPress={() => onPressItem(item)} />
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
    <SafeAreaView style={{backgroundColor: theme.backgroundColor}}>
      <ScrollView>
        <Banner
          backgroundImage={backgroundImage02}
          name="Stay at Home"
          onPress={onPressBanner}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              Styles.titleRow,
              Typography.fontBold,
              {color: theme.primaryTextColor},
            ]}>
            test
            {}{' '}
          </Text>
          <SeeAllBtn onPress={() => showListCourse('test')} />
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={state1}
          renderItem={({item}) => (
            <CourseHorizontalItem
              item={item}
              onPress={() => onPressItem(item)}
            />
          )}
          keyExtractor={(item, index) => item + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(200),
            offset: Size.scaleSize(200) * index,
            index,
          })}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              Styles.titleRow,
              Typography.fontBold,
              {color: theme.primaryTextColor},
            ]}>
            test
            {}{' '}
          </Text>
          <SeeAllBtn onPress={() => showListCourse('test')} />
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={state2}
          renderItem={({item}) => (
            <CourseHorizontalItem
              item={item}
              onPress={() => onPressItem(item)}
            />
          )}
          keyExtractor={(item, index) => item + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(200),
            offset: Size.scaleSize(200) * index,
            index,
          })}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              Styles.titleRow,
              Typography.fontBold,
              {color: theme.primaryTextColor},
            ]}>
            test
            {}{' '}
          </Text>
          <SeeAllBtn onPress={() => showListCourse('test')} />
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={courses.slice(0, 5)}
          renderItem={({item}) => (
            <CourseHorizontalItem
              item={item}
              onPress={() => onPressItem(item)}
            />
          )}
          keyExtractor={(item, index) => item + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(200),
            offset: Size.scaleSize(200) * index,
            index,
          })}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              Styles.titleRow,
              Typography.fontBold,
              {color: theme.primaryTextColor},
            ]}>
            test
            {}{' '}
          </Text>
          <SeeAllBtn onPress={() => showListCourse('test')} />
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={courses.slice(0, 5)}
          renderItem={({item}) => (
            <CourseHorizontalItem
              item={item}
              onPress={() => onPressItem(item)}
            />
          )}
          keyExtractor={(item, index) => item + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(200),
            offset: Size.scaleSize(200) * index,
            index,
          })}
        />
      </ScrollView>
      {/* <SectionList
        sections={[
          {title: 'Software development', data: [0]},
          {title: 'IT operations', data: [1]},
          {title: 'Data Professional', data: [2]},
          {title: 'Security Professional', data: [3]},
          {title: 'My paths', data: [4]},
          {title: 'My channels', data: [5]},
          {title: 'Bookmarks', data: [6]},
        ]}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title, data}}) =>
          renderHeader(title, data)
        }
        ListHeaderComponent={() => {
          return (
            <Banner
              backgroundImage={backgroundImage02}
              name="Stay at Home"
              onPress={onPressBanner}
            />
          );
        }}
        ListFooterComponent={() => {
          return <View style={styles.footer} />;
        }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderListItem(item)}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {height: Distance.spacing_20},
  titleContainer: {
    ...BoxModel.marginHorizontal,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});

export default Home;
