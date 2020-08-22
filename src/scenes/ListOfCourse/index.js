import React, {useContext, useEffect, useReducer} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {ThemeContext} from '../../Provider/Theme';
import {Size} from '../../styles';
import separator from '../../components/Separator';
import {CourseVerticalItem} from '../../components/Course';
import {listCourseReducer} from '../../Reducers/ListCourse';
import * as Actions from '../../Actions/ListCourse';
import {AuthenticationContext} from '../../Provider/Authentication';
import * as screenName from '../../Constants/ScreenName';
import Spinner from 'react-native-loading-spinner-overlay';
import EmptyCourse from '../../components/EmptyCourse';
const initialState = {
  isLoading: true,
  listCourse: [],
  message: '',
};
const ListOfCourse = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {id, keyword} = route.params;
  const {state} = useContext(AuthenticationContext);
  const [listCourseData, dispatch] = useReducer(
    listCourseReducer,
    initialState,
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      switch (id) {
        case screenName.NewRelease:
          Actions.getTopNewAction(dispatch)();
          break;
        case screenName.TopRating:
          Actions.getTopRateAction(dispatch)();
          break;
        case screenName.BestSeller:
          Actions.getTopSellAction(dispatch)();
          break;
        case screenName.YourFavorite:
          Actions.getYourFavoriteAction(dispatch)(state.userInfo.id);

          break;
        case screenName.RecommendCourse:
          Actions.getRecommendCourseAction(dispatch)(state.userInfo.id);
          break;
        case screenName.searchCourseScreen:
          Actions.getSearchCourseAction(dispatch)(keyword.price);

          break;
        default:
          Actions.getDefaultAction(dispatch)(id);
          break;
      }
    });

    return unsubscribe;
  }, [id, keyword, navigation, state.userInfo.id]);
  ListOfCourse.navigationOptions = () => ({
    title: navigation.getParam('title'),
  });

  const onPressItem = (item) => {
    navigation.navigate(screenName.CourseDetailScreenName, {id: item.id});
  };
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      {listCourseData.listCourse.length === 0 ? (
        <EmptyCourse />
      ) : (
        <FlatList
          data={listCourseData.listCourse}
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
      )}
      <Spinner
        visible={listCourseData.isLoading}
        textContent={'Loading...'}
        color={theme.whiteColor}
        textStyle={{color: theme.whiteColor}}
        overlayColor={theme.blackWith05OpacityColor}
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
