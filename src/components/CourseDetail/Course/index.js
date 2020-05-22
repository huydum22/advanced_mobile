import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import data from '../../../ExampleData/courseDetail';
import contentData from '../../../ExampleData/contents';
import {Size, Colors} from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../HeaderComponent';
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
      underlayColor={Colors.backgroundSeeAllButton}>
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
        color={Colors.successColor}
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
  const {navigation} = props;
  const dismiss = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.videoContainer} source={data.image}>
        <View style={styles.blurContainer}>
          <TouchableHighlight onPress={dismiss}>
            <MaterialIcons
              name="cancel"
              size={30}
              color={Colors.whiteWith07OpacityColor}
              style={styles.cancelButton}
            />
          </TouchableHighlight>
        </View>
      </ImageBackground>
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
    backgroundColor: Colors.backgroundColor,
    height: Size.HEIGHT,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  blurContainer: {
    flex: 1,
    backgroundColor: Colors.blackWith05OpacityColor,
  },
  mainContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: Colors.whiteColor,
    justifyContent: 'flex-start',
  },
  divide: {
    backgroundColor: Colors.backgroundGroupButton,
    height: 1,
    marginHorizontal: 20,
  },
  footer: {height: 40},
  separator: {
    height: 1,
    backgroundColor: Colors.backgroundSeeAllButton,
  },
  headerTouchable: {
    height: 50,
    backgroundColor: Colors.backgroundSeeAllButton,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: Colors.backgroundSeeAllButton,
  },
  textHeader: {
    color: Colors.blackColor,
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
    backgroundColor: Colors.whiteColor,
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkContainer: {
    marginRight: 20,
  },
  image: {
    resizeMode: 'cover',
  },
  cancelButton: {
    top: 15,
    left: 15,
  },
});
export default CourseDetail;
