import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  Text,
  FlatList,
} from 'react-native';
import {CourseHorizontalItem} from '../../components/Course';
import EmptyComponent from '../../components/EmptyComponent';
import {CourseContext} from '../../Provider/Course';
import {
  Colors,
  Distance,
  Styles,
  Typography,
  BoxModel,
  Size,
} from '../../styles';
import Banner from '../../components/Banner';
import backgroundImage02 from '../../assets/image/backgroundImage02.png';
import SeeAllBtn from '../../components/common/see-all-button';
import {listCourseProvider} from '../../services/Courses';
import emptyCourse from '../../ExampleData/emptyCourse';
import {
  ShowListCourseScreenName,
  CourseDetailScreenName,
  CourseDetailScreenStack,
} from '../../config/ScreenName';
const Home = (props) => {
  const {navigation, route} = props;
  const {courses, setCourses} = useContext(CourseContext);

  const fetchData = async () => {
    try {
      let response = await listCourseProvider();
      setCourses(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  const Footer = () => {
    return emptyCourse.map((item) => (
      <EmptyComponent
        title={item.title}
        icon={item.icon}
        message={item.message}
        key={item.title}
        onPress={onPressEmptyComponent}
      />
    ));
  };
  const showListCourse = (title) => {
    navigation.navigate(ShowListCourseScreenName, {
      title: title,
    });
  };
  const renderHeader = (title) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>{title} </Text>
        <SeeAllBtn onPress={() => showListCourse(title)} />
      </View>
    );
  };
  const renderListItem = (data) => {
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data.slice(0, 5)}
        renderItem={({item}) => (
          <CourseHorizontalItem item={item} onPress={() => onPressItem(item)} />
        )}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(200),
          offset: Size.scaleSize(200) * index,
          index,
        })}
      />
    );
  };
  return (
    <SafeAreaView>
      <SectionList
        sections={[
          {title: 'Software development', data: [1]},
          {title: 'IT operations', data: [1]},
          {title: 'Data Professional', data: [1]},
          {title: 'Security Professional', data: [1]},
        ]}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title}}) => renderHeader(title)}
        ListFooterComponent={Footer}
        ListHeaderComponent={() => {
          return (
            <Banner
              backgroundImage={backgroundImage02}
              name="Stay at Home"
              onPress={onPressBanner}
            />
          );
        }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={() => renderListItem(courses.slice())}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  footer: {height: Distance.spacing_20},
  titleContainer: {
    ...BoxModel.marginHorizontal,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});

export default Home;
