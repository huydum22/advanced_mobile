import React, {useState, useEffect, useContext} from 'react';
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
import {ThemeContext} from '../../Provider/Theme';
const CourseDetail = (props) => {
  const {theme} = useContext(ThemeContext);
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
    return (
      <View
        style={[
          styles.separator,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}
      />
    );
  };
  const onPressHeader = () => {
    // setExpand(!isExpand);
  };
  const renderHeader = (title, index) => {
    return (
      <TouchableHighlight
        style={[
          styles.headerTouchable,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}
        onPress={onPressHeader}
        underlayColor={theme.backgroundSeeAllButton}>
        <View
          style={[
            styles.headerContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}>
          <Text style={[styles.textHeader, {color: theme.primaryTextColor}]}>
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
          color={theme.successColor}
          style={styles.checkContainer}
        />
      );
    }
  };

  const renderListItem = (item) => {
    return (
      <View
        style={[
          styles.textContainer,
          {backgroundColor: theme.primaryBackgroundColor},
        ]}>
        <Text style={[styles.textContent, {color: theme.primaryTextColor}]}>
          {item.subTitle}
        </Text>
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
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <ImageBackground
          style={[
            styles.videoContainer,
            {backgroundColor: theme.backgroundColor},
          ]}
          source={item.image}>
          <View
            style={{
              ...Styles.fillRowBetween,
              backgroundColor: theme.blackWith05OpacityColor,
            }}>
            <TouchableHighlight
              onPress={dismiss}
              underlayColor={theme.overlayColor}>
              <MaterialIcons
                name="cancel"
                size={30}
                color={theme.whiteWith07OpacityColor}
                style={styles.cancelButton}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onShare}
              underlayColor={theme.overlayColor}>
              <Feather
                name="share"
                size={25}
                color={theme.whiteWith07OpacityColor}
                style={styles.shareButton}
              />
            </TouchableHighlight>
          </View>
        </ImageBackground>
        <View
          style={[
            styles.mainContainer,
            {backgroundColor: theme.primaryBackgroundColor},
          ]}>
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
    height: Size.HEIGHT,
  },
  videoContainer: {
    flex: 1,
  },

  mainContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  footer: {height: 40},
  separator: {
    height: 1,
  },
  headerTouchable: {
    height: 50,
  },
  headerContainer: {
    height: 50,
    ...Styles.rowBetween,
    marginHorizontal: 20,
  },
  textHeader: {
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
