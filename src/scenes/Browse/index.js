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
import backgroundImage03 from '../../assets/image/backgroundImage03.jpg';
import backgroundImage02 from '../../assets/image/backgroundImage02.jpg';
import {AuthorHorizontalItem} from '../../components/Author';
import {PopularSkillItem, RelateSkillItem} from '../../components/Skill';
import {listInstructorAPI} from '../../services/Instructor';
import Banner from '../../components/Banner';
import * as screenName from '../../Constants/ScreenName';
import {CategoryContext} from '../../Provider/Category';
import SeeAllBtn from '../../components/common/see-all-button';
import dataSkill from '../../ExampleData/skill';
import {ThemeContext} from '../../Provider/Theme';
const Browse = (props) => {
  const {navigation, route} = props;
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
      const response = await listInstructorAPI();
      setLIstInstructor(response.data.payload);
    } catch ({response}) {
      console.log(response);
    }
  };
  useEffect(() => {
    getInstructor();
  }, []);

  const onPressPopularSkill = () => {
    navigation.navigate(screenName.PopularSkillScreenName);
  };
  const onPressPath = (item) => {
    navigation.navigate(screenName.PathDetailScreenName, {
      name: item.name,
      numberOfCourse: item.numberOfCourse,
      totalHour: item.totalHour,
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
    // navigation.navigate(screenName.RelateSkillScreenName);
  };
  const showAllPath = (title) => {
    navigation.navigate(screenName.ShowListPathScreenName);
  };
  const renderHeader = (title, data) => {
    if (data[0] === 2) {
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
          <SeeAllBtn onPress={showAllPath} />
        </View>
      );
    } else {
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
    }
  };

  const Header = () => {
    return (
      <View>
        <Banner
          key="new releases"
          backgroundImage={backgroundImage02}
          name="new releases"
          onPress={() => onPressBanner(screenName.NewRelease, 'New Releases')}
        />
        <Banner
          key="recommended for you"
          backgroundImage={backgroundImage03}
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
              onPress={onPressPopularSkill}
            />
          )}
        />
      );
    }
    if (data === 1) {
      return (
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}>
          <FlatList
            nestedScrollEnabled={true}
            contentContainerStyle={styles.contentContainer}
            numColumns={JSON.parse(JSON.stringify(listCategory)).length / 2}
            alwaysBounceVertical={false}
            data={JSON.parse(JSON.stringify(listCategory))}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => (
              <RelateSkillItem item={item} onPress={onPressRelateSkill} />
            )}
            getItemLayout={(data, index) => ({
              length: Size.scaleSize(150),
              offset: Size.scaleSize(150) * index,
              index,
            })}
          />
        </ScrollView>
      );
    }

    if (data === 2) {
      return (
        <FlatList
          data={listInstructor.slice(0, 10)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <AuthorHorizontalItem
              item={item}
              key={item.id}
              onPress={onPressAuthor}
            />
          )}
          ListFooterComponent={() => {
            return <View style={Styles.footer} />;
          }}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(160),
            offset: Size.scaleSize(160) * index,
            index,
          })}
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
