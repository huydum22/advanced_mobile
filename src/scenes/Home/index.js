import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  Text,
  FlatList,
} from 'react-native';
import {CourseHorizontalItem} from '../../components/ListCourseHorizontal';
import EmptyComponent from '../../components/EmptyComponent';
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
import courses from '../../ExampleData/course';
import emptyCourse from '../../ExampleData/emptyCourse';
import {
  ShowListCourseScreenName,
  CourseDetailScreenName,
} from '../../config/ScreenName';
const home = (props) => {
  const {navigation, route} = props;
  const onPressEmptyComponent = (title) => {
    navigation.navigate(ShowListCourseScreenName, {
      title: title,
    });
  };
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenName);
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
  const showListCourse = () => {};
  const renderHeader = (title) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>{title} </Text>
        <SeeAllBtn onPress={showListCourse} />
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
          <CourseHorizontalItem item={item} onPress={onPressItem} />
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
            <Banner backgroundImage={backgroundImage02} name="Stay at Home" />
          );
        }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={() => renderListItem(courses)}
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

export default home;
