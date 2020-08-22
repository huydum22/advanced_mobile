import React, {useContext, useState} from 'react';
import {
  SectionList,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Title from '../../CourseDetail/HeaderComponent/TitleItem';
import Collapsible from 'react-native-collapsible';
import {useSafeArea} from 'react-native-safe-area-context';
import {Size, Styles, Typography, BoxModel, Distance} from '../../../styles';
import {API, DownloadLessonVideo} from '../../../services';
import {LESSON_VIDEO} from '../../../Constants/API';
import {AuthenticationContext} from '../../../Provider/Authentication';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';
import HeaderTitle from '../../CourseDetail/HeaderComponent';

const LessonList = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {itemCourse, itemLesson, setItemLesson} = useContext(LessonContext);
  const [collapsibleItems, setCollapsibleItems] = useState([]);
  const {state} = useContext(AuthenticationContext);
  const insets = useSafeArea();
  const [isPreview, setPreview] = useState(false);

  const showPreviewTitle = () => {
    setPreview(!isPreview);
  };
  const changeColorItemLesson = (lesson) => {
    if (itemLesson) {
      if (lesson.id === itemLesson.id) {
        return theme.primaryColor;
      }
    }

    return theme.primaryTextColor;
  };

  const DownloadLesson = async () => {
    try {
      return await DownloadLessonVideo(itemLesson.videoUrl, {
        responseType: 'arraybuffer',
        onDownloadProgress: (progressEvent) => {
          console.log(progressEvent);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
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
  const renderListItem = (ItemLesson) => {
    const renderDownloadItem = () => {
      if (ItemLesson.isFinish) {
        return (
          <MaterialIcons.Button
            name="file-download"
            size={20}
            color={theme.successColor}
            onPress={DownloadLesson}
            backgroundColor={theme.themeColor}
          />
        );
      } else {
        return (
          <MaterialIcons.Button
            name="file-download"
            size={20}
            color={theme.grayColor}
            onPress={DownloadLesson}
            backgroundColor={theme.themeColor}
          />
        );
      }
    };
    return (
      <Collapsible collapsed={collapsibleItems.includes(ItemLesson.sectionId)}>
        {/* <View style={Styles.fillRow}> */}
        <TouchableHighlight
          onPress={() => onPressPreviewLesson(ItemLesson)}
          underlayColor={theme.overlayColor}
          style={[styles.fill, BoxModel.smallMarginVertical]}>
          <View style={Styles.fillRowStart}>
            <View style={[Styles.center, {width: Size.scaleSize(30)}]}>
              <Text
                style={[
                  Typography.fontRegular,
                  {color: changeColorItemLesson(ItemLesson)},
                ]}>
                {ItemLesson.numberOrder}
              </Text>
            </View>
            <View
              style={[
                Styles.fillColumnStart,
                BoxModel.smallMarginHorizontal,
                {backgroundColor: theme.themeColor},
              ]}>
              <View style={[Styles.fillRow, {marginRight: Distance.medium}]}>
                {ItemLesson.isFinish ? (
                  <FontAwesome
                    name="check-circle"
                    size={20}
                    color={theme.primaryColor}
                    style={{marginRight: Distance.small}}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={20}
                    color={theme.primaryColor}
                    style={{marginRight: Distance.small}}
                  />
                )}
                <Text
                  style={[
                    Typography.fontRegular,
                    {color: changeColorItemLesson(ItemLesson)},
                  ]}>
                  {ItemLesson.name}
                </Text>
              </View>
              <Text style={[Typography.fontRegular, {color: theme.grayColor}]}>
                {' '}
                Video -{' '}
                {Moment('1900-01-01 00:00:00')
                  .add(ItemLesson.hours * 3600, 'seconds')
                  .format('mm:ss')}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </Collapsible>
    );
  };
  const onPressHeader = (section) => {
    const newIds = [...collapsibleItems];
    const index = newIds.indexOf(section.data[0].sectionId);
    if (index > -1) {
      newIds.splice(index, 1);
    } else {
      newIds.push(section.data[0].sectionId);
    }
    setCollapsibleItems(newIds);
  };
  const onPressPreviewLesson = async (ItemLesson) => {
    setItemLesson({
      ...ItemLesson,
      videoUrl: '',
      currentTime: 0,
    });
    try {
      let response1 = await API.get(
        `${LESSON_VIDEO}/${itemCourse.id}/${ItemLesson.id}`,
        state.token,
      );

      if (response1.isSuccess) {
        const resultSection = itemCourse.section.find(({lesson}) => {
          return lesson.find(({id}) => id === ItemLesson.id);
        });
        const result = resultSection.lesson.find(
          ({id}) => id === ItemLesson.id,
        );
        setItemLesson({
          ...result,
          videoUrl: response1.data.payload.videoUrl,
          currentTime: response1.data.payload.currentTime,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const renderHeader = (section) => {
    const {title} = section;

    return (
      <TouchableHighlight
        style={[
          styles.headerTouchable,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}
        onPress={() => onPressHeader(section)}
        underlayColor={theme.backgroundSeeAllButton}>
        <View
          style={[
            styles.headerContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}>
          <Text style={[styles.textHeader, {color: theme.primaryTextColor}]}>
            {title}
          </Text>
          {collapsibleItems.includes(section.data[0].sectionId) ? (
            <MaterialIcons
              name="expand-less"
              size={15}
              color={theme.primaryTextColor}
            />
          ) : (
            <MaterialIcons
              name="expand-more"
              size={15}
              color={theme.primaryTextColor}
            />
          )}
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SectionList
      ItemSeparatorComponent={flatListSeparator}
      sections={
        itemCourse.section
          ? itemCourse.section.map((data) => {
              return {
                title: data.name,
                data: data.lesson,
              };
            })
          : []
      }
      keyExtractor={(ItemLessonID, index) => ItemLessonID + index}
      renderItem={({item}) => renderListItem(item)}
      renderSectionHeader={({section}) => renderHeader(section)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => {
        return (
          <View>
            {isPreview ? (
              <HeaderTitle
                navigation={navigation}
                route={route}
                item={itemCourse}
                showPreview={false}
                showPreviewTitle={showPreviewTitle}
                courseID={itemCourse.id}
              />
            ) : (
              <MaterialIcons.Button
                name="expand-less"
                size={20}
                backgroundColor={theme.themeColor}
                onPress={showPreviewTitle}
                style={styles.previewButton}
                color={theme.primaryTextColor}>
                <Title name={itemCourse.title} />
              </MaterialIcons.Button>
            )}
          </View>
        );
      }}
      ListFooterComponent={() => {
        return (
          <View
            style={[
              styles.footer,
              {
                marginBottom: insets.bottom,
                backgroundColor: theme.themeColor,
              },
            ]}
          />
        );
      }}
      style={{backgroundColor: theme.themeColor}}
    />
  );
};
const styles = StyleSheet.create({
  footer: {height: 40},
  separator: {
    height: 1,
  },
  fill: {
    flex: 1,
  },
  textContainer: {
    height: Size.scaleSize(50),
    ...Styles.rowBetween,
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
  previewButton: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',

    // width: 100,
    // height: 500,
  },
});
export default LessonList;
