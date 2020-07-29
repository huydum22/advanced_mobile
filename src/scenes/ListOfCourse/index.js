import React, {useContext, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {Size} from '../../styles';
import separator from '../../components/Separator';
import {CourseVerticalItem} from '../../components/Course';

import {API} from '../../services';
import {
  TOP_NEW,
  TOP_RATE,
  TOP_SELL,
  TOP_USER_FAVORITE,
  RECOMMEND_COURSE,
  SEARCH,
} from '../../Constants/API';

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
  const body = {
    limit: 10,
    offset: 0,
  };
  const fetchData = async () => {
    try {
      switch (id) {
        case screenName.NewRelease:
          let response = await API.post(TOP_NEW, body);
          if (response.isSuccess) {
            setData(response.data.payload);
          }
          break;
        case screenName.TopRating:
          let topRating = await API.post(TOP_RATE, body);
          if (topRating.isSuccess) {
            setData(topRating.data.payload);
          }
          break;
        case screenName.BestSeller:
          let bestSeller = await API.post(TOP_SELL, body);
          if (bestSeller.isSuccess) {
            setData(bestSeller.data.payload);
          }
          break;
        case screenName.YourFavorite:
          let userFavorite = await API.post(TOP_USER_FAVORITE, {
            userId: state.userInfo.id,
          });
          if (userFavorite.isSuccess) {
            setData(userFavorite.data.payload);
          }
          break;
        case screenName.RecommendCourse:
          let recommendCourse = await API.get(
            `${RECOMMEND_COURSE}${state.userInfo.id}/10/1`,
          );
          if (recommendCourse.isSuccess) {
            setData(recommendCourse.data.payload);
          }
          break;
        case screenName.searchCourseScreen:
          let searchCoursePrice = await API.post(SEARCH, {
            keyword: '',
            opt: {price: [keyword.price]},
            limit: 12,
            offset: 0,
          });
          if (searchCoursePrice.isSuccess) {
            setData(searchCoursePrice.data.payload.rows);
          }
          break;
        default:
          let searchCourse = await API.post(SEARCH, {
            keyword: '',
            opt: {category: [id]},
            limit: 7,
            offset: 0,
          });
          if (searchCourse.isSuccess) {
            setData(searchCourse.data.payload.rows);
          }
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
