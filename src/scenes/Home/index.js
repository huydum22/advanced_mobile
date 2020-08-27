import React, {useContext, useEffect, useReducer} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native';
import {ListCourseHorizontal} from '../../components/Course';
import {ListAuthorHorizontal} from '../../components/Author';
import EmptyComponent from '../../components/EmptyComponent';
import {Distance, Styles, Typography, BoxModel} from '../../styles';
import Banner from '../../components/Banner';
import {background3} from '../../Constants/Image';
import * as screenName from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
import {CategoryContext} from '../../Provider/Category';
import {AuthenticationContext} from '../../Provider/Authentication';
import ListCategoryComponent from '../../components/category';
import {fetchHomeDataAction} from '../../Actions/Home';
import {homeReducer} from '../../Reducers/Home';
import {LocalizeContext} from '../../Provider/Localize';
import {MyCourseContext} from '../../Provider/MyCourse';
import Spinner from 'react-native-loading-spinner-overlay';
import {FavoriteContext} from '../../Provider/Favorite';
const initialState = {
  isLoading: true,
  listTopNew: [],
  listTopSell: [],
  listTopRate: [],
  listRecommended: [],
  listInstructor: [],
};
const Home = (props) => {
  console.disableYellowBox = true;
  const {navigation, route} = props;
  const [homeData, dispatch] = useReducer(homeReducer, initialState);
  const {category} = useContext(CategoryContext);
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const {localize} = useContext(LocalizeContext);
  const {myCoursesProvider} = useContext(MyCourseContext);
  const {favoriteProvider} = useContext(FavoriteContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      myCoursesProvider(state.token);
      favoriteProvider(state.token);
    });

    return unsubscribe;
  }, [myCoursesProvider, navigation, state.token, favoriteProvider]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      fetchHomeDataAction(dispatch)(state.userInfo.id);
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const onPressBanner = () => {};
  const onPressItem = (item) => {
    navigation.navigate(screenName.CourseDetailScreenName, {id: item.id});
  };
  const onPressCategory = (item) => {
    navigation.navigate(screenName.ShowListCourseScreenName, {
      title: item.name,
      id: item.id,
    });
  };
  const onPressAuthor = (item) => {
    navigation.navigate(screenName.AuthorDetailScreenName, {
      id: item.id,
    });
  };
  const showListCourse = (id, title) => {
    navigation.navigate(screenName.ShowListCourseScreenName, {
      title: title,
      id: id,
    });
  };
  const renderItem = (title, data, onPressItemSeeAll) => {
    if (data.length === 0) {
      return <EmptyComponent title={title} />;
    } else {
      return (
        <View>
          <View style={styles.titleContainer}>
            <Text
              style={[
                Styles.titleRow,
                Typography.fontBold,
                {
                  color: theme.primaryTextColor,
                  fontSize: Typography.fontSize20,
                },
              ]}>
              {title}
            </Text>
          </View>
          <ListCourseHorizontal
            data={data}
            navigation={navigation}
            route={route}
            onPress={onPressItemSeeAll}
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: theme.backgroundColor}}>
      <ScrollView>
        <Banner
          backgroundImage={background3}
          name="Stay at Home"
          onPress={onPressBanner}
        />

        {renderItem(localize.homeRecommend, homeData.listRecommended, () =>
          showListCourse(screenName.RecommendCourse, localize.homeRecommend),
        )}
        <View style={styles.titleContainer}>
          <Text
            style={[
              Styles.titleRow,
              Typography.fontBold,
              {
                color: theme.primaryTextColor,
                fontSize: Typography.fontSize20,
              },
            ]}>
            {localize.homeCategories}
          </Text>
        </View>
        <ListCategoryComponent
          onPress={onPressCategory}
          listCategory={category.listCategory}
        />
        {renderItem(localize.homeBestSeller, homeData.listTopSell, () =>
          showListCourse(screenName.BestSeller, localize.homeBestSeller),
        )}
        {renderItem(localize.homeRating, homeData.listTopRate, () =>
          showListCourse(screenName.TopRating, localize.homeRating),
        )}
        {renderItem(localize.homeNewRelease, homeData.listTopNew, () =>
          showListCourse(screenName.NewRelease, localize.homeNewRelease),
        )}
        <ListAuthorHorizontal
          data={homeData.listInstructor}
          onPress={onPressAuthor}
        />
        <View style={styles.footer} />
      </ScrollView>
      <Spinner
        visible={homeData.isLoading}
        textContent={'Loading...'}
        color={theme.whiteColor}
        textStyle={{color: theme.whiteColor}}
        overlayColor={theme.blackWith05OpacityColor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  footer: {height: Distance.spacing_20},
  titleContainer: {
    ...BoxModel.marginHorizontal,
    ...Styles.rowBetween,
    ...BoxModel.tinyMarginVertical,
    height: Distance.medium,
  },
});

export default Home;
