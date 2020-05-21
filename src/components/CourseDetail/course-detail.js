import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import data from '../../ExampleData/courseDetail';
import contentData from '../../ExampleData/contents';
import colors from '../../styles/color';
import size from '../../styles/size';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './HeaderComponent/header-component';
const flatListSeparator = () => {
  return <View style={styles.separator} />;
};
const onPressHeader = () => {
  // setExpand(!isExpand);
};
const renderHeader = (title, index) => {
  return (
    <TouchableHighlight
      style={styles.headerTouchable}
      onPress={onPressHeader}
      underlayColor={colors.backgroundGroupButton}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>
          {index}
          {title}
        </Text>
        <Ionicons name="ios-arrow-down" size={15} />
      </View>
    </TouchableHighlight>
  );
};
const completeSessionCourse = (isCheck) => {
  if (isCheck) {
    return (
      <MaterialCommunityIcons
        name="marker-check"
        size={15}
        color={colors.greenCheckColor}
        style={styles.checkContainer}
      />
    );
  }
};
const renderListItem = (item) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textContent}>{item.subTitle}</Text>
      {completeSessionCourse(item.isCheck)}
    </View>
  );
};
const CourseDetail = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Image source={data.image} />
      </View>
      <View style={styles.mainContainer}>
        <SectionList
          ItemSeparatorComponent={flatListSeparator}
          sections={contentData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => renderListItem(item)}
          renderSectionHeader={({section: {title}, index}) =>
            renderHeader(title, index)
          }
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return <Header data={data} />;
          }}
        />
        <View style={styles.footer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: size.HEIGHT,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
  mainContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: colors.whiteColor,
    justifyContent: 'flex-start',
  },
  divide: {
    backgroundColor: colors.backgroundGroupButton,
    height: 1,
    marginHorizontal: 20,
  },
  footer: {height: 40},
  separator: {
    height: 1,
    backgroundColor: colors.backgroundGroupButton,
  },
  headerTouchable: {
    height: 50,
    backgroundColor: colors.backgroundGroupButton,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: colors.backgroundGroupButton,
  },
  textHeader: {
    color: colors.blackTitleColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  maxHeightText: {
    height: null,
  },
  minHeightText: {
    height: 0,
  },
  textContent: {
    marginHorizontal: 20,
  },
  textContainer: {
    flexDirection: 'row',
    backgroundColor: colors.whiteColor,
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkContainer: {
    marginRight: 20,
  },
});
export default CourseDetail;
