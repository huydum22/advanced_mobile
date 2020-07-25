import React, {useContext} from 'react';
import {
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
import data from '../../../ExampleData/courseDetail';
import contentData from '../../../ExampleData/contents';
import {Size, Typography, Styles} from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../HeaderComponent';
import {ThemeContext} from '../../../Provider/Theme';

const CourseDetail = (props) => {
  const {navigation, route, item} = props;
  const {theme} = useContext(ThemeContext);

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
        <MaterialIcons
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
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <ImageBackground
        style={[
          styles.videoContainer,
          {backgroundColor: theme.backgroundColor},
        ]}
        source={data.image}>
        <View
          style={[
            styles.blurContainer,
            {backgroundColor: theme.blackWith05OpacityColor},
          ]}>
          <TouchableHighlight
            onPress={dismiss}
            underlayColor={theme.backgroundColor}>
            <MaterialIcons
              name="cancel"
              size={30}
              color={theme.whiteWith07OpacityColor}
              style={styles.cancelButton}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={onShare}
            underlayColor={theme.backgroundColor}>
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
              <Header
                navigation={navigation}
                route={route}
                name={data.name}
                author={data.author}
                level={data.level}
                timeToStart={data.timeToStart}
                totalHour={data.totalHour}
                totalRate={data.totalRate}
                rate={data.rate}
                description={data.description}
              />
            );
          }}
        />
        <View style={styles.footer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Size.HEIGHT,
  },
  videoContainer: {
    flex: 1,
  },
  blurContainer: {
    ...Styles.fillRowBetween,
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
