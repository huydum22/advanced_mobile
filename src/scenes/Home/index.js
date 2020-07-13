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
import backgroundImage02 from '../../assets/image/backgroundImage.jpg';
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
  const [state3, setState3] = useState([]);
  const [state4, setState4] = useState([]);

  const fetchData = async () => {
    listCategory.forEach(async (element) => {
      try {
        let response = await ListCourseByCategoryAPI(element.id);
        setCourses({...courses, [element.name]: response.data.payload.rows});
      } catch ({response}) {
        console.log(p(response.data.message));
      }
    });
  };
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await ListCourseByCategoryAPI(listCategory[0].id);
        setState1(response.data.payload.rows);
        let response1 = await ListCourseByCategoryAPI(listCategory[1].id);
        setState2(response1.data.payload.rows);
        let response2 = await ListCourseByCategoryAPI(listCategory[2].id);
        setState3(response2.data.payload.rows);
        let response3 = await ListCourseByCategoryAPI(listCategory[3].id);
        setState4(response3.data.payload.rows);
      } catch ({response}) {}
    };
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
            {listCategory[0].name}
          </Text>
          <SeeAllBtn onPress={() => showListCourse(listCategory[0].name)} />
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
            {listCategory[1].name}
          </Text>
          <SeeAllBtn onPress={() => showListCourse(listCategory[1].name)} />
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
        {state3.length === 0 ? (
          <EmptyComponent
            title={listCategory[2].name}
            icon="book-open"
            message="Coming Soon "
          />
        ) : (
          <View>
            <View style={styles.titleContainer}>
              <Text
                style={[
                  Styles.titleRow,
                  Typography.fontBold,
                  {color: theme.primaryTextColor},
                ]}>
                {listCategory[2].name}
              </Text>
              <SeeAllBtn onPress={() => showListCourse(listCategory[2].name)} />
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={state3}
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
          </View>
        )}

        {state4.length === 0 ? (
          <EmptyComponent
            title={listCategory[3].name}
            icon="book-open"
            message="Coming Soon "
          />
        ) : (
          <View>
            <View style={styles.titleContainer}>
              <Text
                style={[
                  Styles.titleRow,
                  Typography.fontBold,
                  {color: theme.primaryTextColor},
                ]}>
                {listCategory[3].name}
              </Text>

              <SeeAllBtn onPress={() => showListCourse(listCategory[3].name)} />
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={state4}
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
          </View>
        )}
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
