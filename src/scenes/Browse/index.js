import React, {useContext} from 'react';
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
import {PathItemHorizontal} from '../../components/Path';
import {AuthorHorizontalItem} from '../../components/Author';
import {PopularSkillItem, RelateSkillItem} from '../../components/Skill';
import Banner from '../../components/Banner';
import {
  ShowListCourseScreenName,
  PopularSkillScreenName,
  PathDetailScreenName,
  AuthorDetailScreenName,
  RelateSkillScreenName,
  ShowListPathScreenName,
} from '../../Constants/ScreenName';
import SeeAllBtn from '../../components/common/see-all-button';
import dataSkill from '../../ExampleData/skill';
import dataRelate from '../../ExampleData/relate-skill';
import dataAuthor from '../../ExampleData/author';
import dataPath from '../../ExampleData/path';
import {ThemeContext} from '../../Provider/Theme';
const Browse = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const onPressBanner = (name) => {
    navigation.navigate(ShowListCourseScreenName, {
      title: name,
    });
  };

  const onPressPopularSkill = () => {
    navigation.navigate(PopularSkillScreenName);
  };
  const onPressPath = (item) => {
    navigation.navigate(PathDetailScreenName, {
      name: item.name,
      numberOfCourse: item.numberOfCourse,
      totalHour: item.totalHour,
    });
  };
  const onPressAuthor = (item) => {
    navigation.navigate(AuthorDetailScreenName, {
      name: item.name,
    });
  };
  const onPressRelateSkill = (item) => {
    navigation.navigate(RelateSkillScreenName);
  };
  const showAllPath = (title) => {
    navigation.navigate(ShowListPathScreenName);
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
    // return ['new releases', 'recommended for you'].map((item) => (
    //   <Banner
    //     key={item.toString()}
    //     backgroundImage={backgroundImage02}
    //     name={item}
    //     onPress={() => onPressBanner(item)}
    //   />
    // ));
    return (
      <View>
        <Banner
          key="new releases"
          backgroundImage={backgroundImage02}
          name="new releases"
          // onPress={() => onPressBanner('new releases')}
        />
        <Banner
          key="recommended for you"
          backgroundImage={backgroundImage03}
          name="recommended for you"
          // onPress={() => onPressBanner('new releases')}
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
            numColumns={dataRelate.length / 2}
            alwaysBounceVertical={false}
            data={dataRelate}
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
          data={dataPath.slice(0, 5)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => (
            <PathItemHorizontal
              item={item}
              key={item.id}
              onPress={onPressPath}
            />
          )}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(200),
            offset: Size.scaleSize(200) * index,
            index,
          })}
        />
      );
    }
    if (data === 3) {
      return (
        <FlatList
          data={dataAuthor.slice(0, 5)}
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
          {title: 'Popular Skill', data: [0]},
          {title: '', data: [1]},
          {title: 'Paths', data: [2]},
          {title: 'Top Author', data: [3]},
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
