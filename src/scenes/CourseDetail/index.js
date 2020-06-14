import React, {useState, useEffect} from 'react';
import {findCourseProvider} from '../../services/Courses';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SectionList,
  TouchableHighlight,
  Share,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import data from '../../ExampleData/courseDetail';
import contentData from '../../ExampleData/contents';
import {Size, Colors, Typography, Styles} from '../../styles';
import Header from '../../components/CourseDetail/HeaderComponent';
const CourseDetail = (props) => {
  const {navigation, route} = props;
  const [item, setItem] = useState('');
  const getItem = async (id) => {
    try {
      let response = await findCourseProvider(id);
      setItem(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItem(route.params.id);
  });
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
          name="check-circle"
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
  const dismiss = () => {
    navigation.goBack();
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Share image',
        message: 'This image so beautiful ',
        url: 'https://reactjs.org/logo-og.png',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground style={styles.videoContainer} source={item.image}>
          <View style={styles.blurContainer}>
            <TouchableHighlight
              onPress={dismiss}
              underlayColor={Colors.backgroundColor}>
              <MaterialIcons
                name="cancel"
                size={30}
                color={Colors.whiteWith07OpacityColor}
                style={styles.cancelButton}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onShare}
              underlayColor={Colors.backgroundColor}>
              <Feather
                name="share"
                size={25}
                color={Colors.whiteWith07OpacityColor}
                style={styles.shareButton}
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
              return (
                <Header navigation={navigation} route={route} item={item} />
              );
            }}
          />
          <View style={styles.footer} />
        </View>
      </View>
    </SafeAreaView>
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
    ...Styles.fillRowBetween,
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
    ...Styles.rowBetween,
    marginHorizontal: 20,
    backgroundColor: Colors.backgroundSeeAllButton,
  },
  textHeader: {
    color: Colors.blackColor,
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
  maxHeightText: {
    height: null,
  },
  minHeightText: {
    height: 0,
  },
  textContent: {
    marginHorizontal: 20,
    ...Typography.fontRegular,
  },
  textContainer: {
    backgroundColor: Colors.whiteColor,
    height: 35,
    ...Styles.rowBetween,
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
  shareButton: {
    top: 15,
    right: 15,
  },
});
export default CourseDetail;
