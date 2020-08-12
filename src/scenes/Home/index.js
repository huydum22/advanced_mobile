import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import {ListCourseHorizontal} from '../../components/Course';
import {ListAuthorHorizontal} from '../../components/Author';
import EmptyComponent from '../../components/EmptyComponent';
import {Distance, Styles, Typography, BoxModel, Size} from '../../styles';
import Banner from '../../components/Banner';
import {background3} from '../../Constants/Image';
import SeeAllBtn from '../../components/common/see-all-button';
import * as screenName from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
import {AuthenticationContext} from '../../Provider/Authentication';
import ListCategoryComponent from '../../components/category';

import {API} from '../../services';
import {
  TOP_NEW,
  TOP_SELL,
  TOP_RATE,
  TOP_USER_FAVORITE,
  INSTRUCTOR,
} from '../../Constants/API';
import p from 'pretty-format';
const body = {
  limit: 7,
  offset: 0,
};

const Home = (props) => {
  const {navigation, route} = props;
  // const {listCategory, setListCategory} = useContext(CategoryContext);
  const {theme} = useContext(ThemeContext);
  const {state} = useContext(AuthenticationContext);
  const [state0, setState0] = useState([]);
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState([]);
  const [state3, setState3] = useState([]);
  const [state4, setState4] = useState([]);
  const [listInstructor, setLIstInstructor] = useState([]);

  const fetchDataState1 = async () => {
    try {
      let response = await API.post(TOP_NEW, body);
      if (response.isSuccess) {
        setState1(response.data.payload);
      }
    } catch (response) {
      console.log(p(response));
    }
  };
  const fetchDataState2 = async () => {
    try {
      let response = await API.post(TOP_SELL, body);
      if (response.isSuccess) {
        setState2(response.data.payload);
      }
    } catch (response) {
      console.log(p(response));
    }
  };
  const fetchDataState3 = async () => {
    try {
      let response = await API.post(TOP_RATE, body);
      if (response.isSuccess) {
        setState3(response.data.payload);
      }
    } catch (response) {
      console.log(p(response));
    }
  };
  const getInstructor = async () => {
    try {
      const response = await API.get(INSTRUCTOR);

      // const response = await listInstructorAPI();]
      if (response.isSuccess) {
        setLIstInstructor(response.data.payload);
      }
    } catch ({response}) {
      console.log(response);
    }
  };
  useEffect(() => {
    const fetchDataState4 = async () => {
      try {
        const body1 = {userId: state.userInfo.id};
        let response = await API.post(TOP_USER_FAVORITE, body1);
        if (response.isSuccess) {
          setState4(response.data.payload);
        }
      } catch (response) {
        console.log(p(response));
      }
    };
    getInstructor();
    fetchDataState1();
    fetchDataState2();
    fetchDataState3();
    fetchDataState4();
  }, [state, setState4, setState3, setState2, setState1, setState0]);

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

        {renderItem('Recommended For You', state4.slice(0, 7), () =>
          showListCourse(screenName.YourFavorite, 'Your Favorite'),
        )}
        <View style={styles.titleContainer}>
          <Text
            style={[
              Styles.titleRow,
              Typography.fontBold,
              {color: theme.primaryTextColor, fontSize: Typography.fontSize20},
            ]}>
            Categories
          </Text>
        </View>
        <ListCategoryComponent onPress={onPressCategory} />
        {renderItem('Best Seller', state2.slice(0, 7), () =>
          showListCourse(screenName.BestSeller, 'Best Seller'),
        )}
        {renderItem('Top Rating', state3.slice(0, 7), () =>
          showListCourse(screenName.TopRating, 'Top Rating'),
        )}
        {renderItem('New Releases', state1.slice(0, 7), () =>
          showListCourse(screenName.NewRelease, 'New Release'),
        )}
        <ListAuthorHorizontal
          data={listInstructor.slice(0, 7)}
          onPress={onPressAuthor}
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
    ...BoxModel.tinyMarginVertical,
    height: Distance.medium,
  },
});

export default Home;
