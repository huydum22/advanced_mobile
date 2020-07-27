import React, {useState, useEffect, useContext} from 'react';
import {findCourseProvider} from '../../services/Courses';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  SectionList,
  TouchableHighlight,
  Share,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {getCourseDetailAPI} from '../../services/Courses';
import {AuthenticationContext} from '../../Provider/Authentication';
import {useSafeArea} from 'react-native-safe-area-context';
import {Size, Colors, Typography, Styles, BoxModel} from '../../styles';
import * as screenName from '../../Constants/ScreenName';
import Header from '../../components/CourseDetail/HeaderComponent';
import {ThemeContext} from '../../Provider/Theme';
import p from 'pretty-format';

const CourseDetail = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {state} = useContext(AuthenticationContext);
  const [item, setItem] = useState({});
  const [link, setLink] = useState('');
  const [paused, setPaused] = useState(true);

  const insets = useSafeArea();
  console.log(p(item.promoVidUrl));
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getCourseDetailAPI(route.params.id);
        setItem(response.data.payload);
      } catch ({response}) {
        console.log(p(response.data));
      }
    };
    fetchData();
  }, [route.params.id]);
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

  const renderListItem = (itemLesson) => {
    return (
      <TouchableHighlight
        onPress={() => onPressPreviewLesson(itemLesson)}
        underlayColor={theme.overlayColor}>
        <View
          style={[
            styles.textContainer,
            {backgroundColor: theme.primaryBackgroundColor},
          ]}>
          <Text style={[styles.textContent, {color: theme.primaryTextColor}]}>
            {itemLesson.name}
          </Text>
          {itemLesson.isPreview ? (
            <View
              style={[
                styles.previewContainer,
                {borderColor: theme.primaryColor},
              ]}>
              <Text style={[styles.previewText, {color: theme.primaryColor}]}>
                Preview
              </Text>
            </View>
          ) : undefined}
        </View>
      </TouchableHighlight>
    );
  };
  const dismiss = () => {
    navigation.goBack();
  };
  const onPressPlayVideo = () => {
    if (item.promoVidUrl) {
      navigation.navigate(screenName.PlayVideoScreenName, {
        urlVideo: item.promoVidUrl,
      });
    }
  };
  const onPressPreviewLesson = (itemLesson) => {
    if (itemLesson.videoUrl) {
      navigation.navigate(screenName.PlayVideoScreenName, {
        urlVideo: itemLesson.videoUrl,
      });
    }
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
        <FastImage
          style={[
            styles.videoContainer,
            Styles.fillRow,
            {backgroundColor: theme.backgroundColor},
          ]}
          source={{uri: item.imageUrl}}>
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
              onPress={onPressPlayVideo}
              underlayColor={theme.overlayColor}
              style={Styles.center}>
              <MaterialIcons
                name="play-arrow"
                size={150}
                color={theme.whiteWith07OpacityColor}
                style={Styles.center}
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
        </FastImage>
        <View
          style={[
            styles.mainContainer,
            {backgroundColor: theme.primaryBackgroundColor},
          ]}>
          <SectionList
            ItemSeparatorComponent={flatListSeparator}
            sections={
              item.section
                ? item.section.map((data) => {
                    return {
                      title: data.name,
                      data: data.lesson,
                    };
                  })
                : []
            }
            keyExtractor={(itemLesson, index) => itemLesson + index}
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
            ListFooterComponent={() => {
              return (
                <View style={[styles.footer, {marginBottom: insets.bottom}]} />
              );
            }}
          />
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
    height: Size.scaleSize(50),
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
  previewContainer: {
    borderWidth: 1,
    ...BoxModel.tinyPadding,

    ...BoxModel.marginHorizontal,
  },
  previewText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
  },
});
export default CourseDetail;
