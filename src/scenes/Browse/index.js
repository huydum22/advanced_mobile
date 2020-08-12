import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  SectionList,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Styles, Typography, Distance, BoxModel, Size} from '../../styles';
import {background1, background2} from '../../Constants/Image';
import {ListAuthorHorizontal} from '../../components/Author';
import {PopularSkillItem, RelateSkillItem} from '../../components/Skill';
import {INSTRUCTOR} from '../../Constants/API';
import {API} from '../../services';
import ListCategoryComponent from '../../components/category';
import Banner from '../../components/Banner';
import * as screenName from '../../Constants/ScreenName';
import {CategoryContext} from '../../Provider/Category';
import {ThemeContext} from '../../Provider/Theme';
const titleItem = (id) => {
  if (id === 0) {
    return 'Free';
  }
  if (id === 1) {
    return '<200.000đ';
  }
  if (id === 2) {
    return '200.000đ - 500.000đ';
  }
  if (id === 3) {
    return '500.000đ - 1.000.000đ';
  }
  if (id === 4) {
    return '1.000.000đ - 2.000.000đ ';
  }
  return '>2.000.000đ';
};
const Browse = (props) => {
  const {navigation, route, dataSkill} = props;
  const {theme} = useContext(ThemeContext);
  const {listCategory} = useContext(CategoryContext);
  const [listInstructor, setLIstInstructor] = useState([]);
  const onPressBanner = (id, title) => {
    navigation.navigate(screenName.ShowListCourseScreenName, {
      title: title,
      id: id,
    });
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
    getInstructor();
  }, []);

  const onPressPopularSkill = (item) => {
    navigation.navigate(screenName.ShowListCourseScreenName, {
      title: titleItem(item.id),
      id: screenName.searchCourseScreen,
      keyword: item,
    });
  };

  const onPressAuthor = (item) => {
    navigation.navigate(screenName.AuthorDetailScreenName, {
      id: item.id,
    });
  };
  const onPressRelateSkill = (item) => {
    navigation.navigate(screenName.ShowListCourseScreenName, {
      title: item.name,
      id: item.id,
    });
  };

  const renderHeader = (title, data) => {
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
      </View>
    );
  };

  const Header = () => {
    return (
      <View>
        <Banner
          key="new releases"
          backgroundImage={background1}
          name="new releases"
          onPress={() => onPressBanner(screenName.NewRelease, 'New Releases')}
        />
        <Banner
          key="recommended for you"
          backgroundImage={background2}
          name="recommended for you"
          onPress={() =>
            onPressBanner(screenName.RecommendCourse, 'Recommended For You')
          }
        />
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
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => (
            <PopularSkillItem
              key={item.id}
              item={item}
              onPress={() => onPressPopularSkill(item)}
            />
          )}
        />
      );
    }
    if (data === 1) {
      return <ListCategoryComponent onPress={onPressRelateSkill} />;
    }

    if (data === 2) {
      return (
        <ListAuthorHorizontal
          data={listInstructor.slice(0, 7)}
          onPress={onPressAuthor}
        />
      );
    }
  };
  return (
    <SafeAreaView
      style={(styles.container, {backgroundColor: theme.backgroundColor})}>
      <SectionList
        sections={[
          {title: 'Price', data: [0]},
          {title: '', data: [1]},
          {title: 'Top Author', data: [2]},
        ]}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title, data}}) =>
          renderHeader(title, data)
        }
        ListHeaderComponent={Header}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderListItem(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    ...BoxModel.marginHorizontal,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});
export default Browse;
