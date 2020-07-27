import React, {useContext, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {Size} from '../../styles';
import separator from '../../components/Separator';
import {CourseVerticalItem} from '../../components/Course';
import {
  topNewCourseAPI,
  topRateCourseAPI,
  topSellerCourseAPI,
  topCourseUserFavoriteAPI,
  recommendCourseAPI,
} from '../../services/Courses';
import {
  SearchCourseByCategoryAPI,
  SearchCourseByPrice,
} from '../../services/Search';
import {AuthenticationContext} from '../../Provider/Authentication';
import * as screenName from '../../Constants/ScreenName';
const ListOfCourse = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {id, keyword} = route.params;
  const [data, setData] = useState([]);
  const {state} = useContext(AuthenticationContext);

  ListOfCourse.navigationOptions = () => ({
    title: navigation.getParam('title'),
  });
  const fetchData = async () => {
    try {
      switch (id) {
        case screenName.NewRelease:
          let newRelease = await topNewCourseAPI();
          setData(newRelease.data.payload);
          break;
        case screenName.TopRating:
          let topRating = await topRateCourseAPI();
          setData(topRating.data.payload);
          break;
        case screenName.BestSeller:
          let bestSeller = await topSellerCourseAPI();
          setData(bestSeller.data.payload);
          break;
        case screenName.YourFavorite:
          let userFavorite = await topCourseUserFavoriteAPI(state.userInfo.id);
          setData(userFavorite.data.payload);
          break;
        case screenName.RecommendCourse:
          let recommendCourse = await recommendCourseAPI(state.userInfo.id);
          setData(recommendCourse.data.payload);
          break;
        case screenName.searchCourseScreen:
          let searchCoursePrice = await SearchCourseByPrice(keyword.price);
          setData(searchCoursePrice.data.payload.rows);
          break;
        default:
          let searchCourse = await SearchCourseByCategoryAPI(id);
          setData(searchCourse.data.payload.rows);
          break;
      }
    } catch ({response}) {
      console.log(response);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onPressItem = (item) => {
    navigation.navigate(screenName.CourseDetailScreenName, {id: item.id});
  };
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <FlatList
        data={data}
        image
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CourseVerticalItem
            onPressItem={() => onPressItem(item)}
            item={item}
          />
        )}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(100),
          offset: Size.scaleSize(100) * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ListOfCourse;
