import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import {CourseHorizontalItem} from '../../components/Course';
import EmptyComponent from '../../components/EmptyComponent';
import {Distance, Styles, Typography, BoxModel, Size} from '../../styles';
import Banner from '../../components/Banner';
import backgroundImage02 from '../../assets/image/backgroundImage02.png';
import SeeAllBtn from '../../components/common/see-all-button';
import emptyCourse from '../../ExampleData/emptyCourse';
import {
  ShowListCourseScreenName,
  CourseDetailScreenName,
  CourseDetailScreenStack,
} from '../../Constants/ScreenName';
import {ListCourseByCategoryAPI} from '../../services/Category';
import {ThemeContext} from '../../Provider/Theme';
import {CategoryContext} from '../../Provider/Category';
import {AuthenticationContext} from '../../Provider/Authentication';
import p from 'pretty-format';
const Home = (props) => {
  const {navigation, route} = props;
  const {courses, setCourses} = useState([[]]);
  const {listCategory, setListCategory} = useContext(CategoryContext);
  const {theme} = useContext(ThemeContext);
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState([]);

  const fetchData = async () => {
    listCategory.forEach(async (element) => {
      try {
        let response = await ListCourseByCategoryAPI(element.id);
        setCourses({...courses, [element.name]: response.data.payload.rows});
        console.log(p(response.data.payload.rows));
      } catch ({response}) {
        console.log(p(response.data.message));
      }
    });
  };
  useEffect(() => {
    // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await ListCourseByCategoryAPI(listCategory[0].id);
        setState1(response.data.payload.rows);
        let response1 = await ListCourseByCategoryAPI(listCategory[1].id);
        setState2(response1.data.payload.rows);
      } catch ({response}) {}
    };
    getData();
  }, [listCategory]);

  const getDataByID = async (id) => {
    try {
      return await ListCourseByCategoryAPI(id);
    } catch ({response}) {
      console.log(p(response));
    }
  };
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

  const showListCourse = (title) => {
    navigation.navigate(ShowListCourseScreenName, {
      title: title,
    });
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
            {' '}
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
            {' '}
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
        <EmptyComponent
          title="My paths"
          icon="book-open"
          message="Paths will guild you in learning a specific skill or technology"
        />
        <EmptyComponent
          title="My channels"
          icon="radio"
          message="Use channels to save, organize, save and share content to accomplish your learning objectives"
        />
        <EmptyComponent
          title="Bookmarks"
          icon="bookmark"
          message="Use bookmarks to quickly save courses for later"
        />

        <View style={styles.footer} />
      </ScrollView>
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
