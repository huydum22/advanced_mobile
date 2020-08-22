import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Collapsible from 'react-native-collapsible';
import {API} from '../../services';
import {COURSE_DETAIL} from '../../Constants/API';
import {AuthenticationContext} from '../../Provider/Authentication';
import {useSafeArea} from 'react-native-safe-area-context';
import {Size, Distance, Typography, Styles, BoxModel} from '../../styles';
import * as screenName from '../../Constants/ScreenName';
import Header from '../../components/CourseDetail/HeaderComponent';
import {ThemeContext} from '../../Provider/Theme';
import p from 'pretty-format';
import Moment from 'moment';
import separator from '../../components/Separator';

const CourseDetail = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {state} = useContext(AuthenticationContext);
  const [item, setItem] = useState({});
  const [collapsibleItems, setCollapsibleItems] = useState([]);
  const insets = useSafeArea();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await API.get(
          `${COURSE_DETAIL}/${route.params.id}/null`,
        );
        if (response.isSuccess) {
          setItem(response.data.payload);
        }
      } catch ({response}) {
        console.log(p(response.data));
      }
    };
    fetchData();
  }, [route.params.id]);
  const onPressHeader = (section) => {
    const newIds = [...collapsibleItems];
    const index = newIds.indexOf(section.data[0].sectionId);
    if (index > -1) {
      newIds.splice(index, 1);
    } else {
      newIds.push(section.data[0].sectionId);
    }
    setCollapsibleItems(newIds);
    // setExpand(!isExpand);
  };

  const renderHeader = (section) => {
    const {title} = section;
    return (
      <TouchableHighlight
        style={{
          backgroundColor: theme.backgroundSeeAllButton,
          height: Size.scaleSize(50),
        }}
        onPress={() => onPressHeader(section)}
        underlayColor={theme.backgroundSeeAllButton}>
        <View
          style={[
            styles.headerContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}>
          <Text
            style={[
              Typography.fontBold,
              {color: theme.primaryTextColor, fontSize: Typography.fontSize14},
            ]}>
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

  const renderListItem = (itemLesson) => {
    return (
      <Collapsible collapsed={collapsibleItems.includes(itemLesson.sectionId)}>
        <TouchableHighlight
          onPress={() => onPressPreviewLesson(itemLesson)}
          underlayColor={theme.overlayColor}
          style={[styles.fill, BoxModel.smallMarginVertical]}>
          <View style={Styles.fillRowStart}>
            <View style={[Styles.center, {width: Size.scaleSize(30)}]}>
              <Text
                style={[
                  Typography.fontRegular,
                  {color: theme.primaryTextColor},
                ]}>
                {itemLesson.numberOrder}
              </Text>
            </View>
            <View
              style={[
                Styles.fillColumnStart,
                BoxModel.smallMarginHorizontal,
                {backgroundColor: theme.themeColor},
              ]}>
              <View style={[Styles.rowBetween, {marginRight: Distance.medium}]}>
                <Text
                  style={[
                    Typography.fontRegular,
                    {color: theme.primaryTextColor},
                  ]}>
                  {itemLesson.name}
                </Text>
                {itemLesson.isPreview ? (
                  <View
                    style={[
                      BoxModel.marginHorizontal,
                      BoxModel.tinyPadding,
                      {
                        borderColor: theme.primaryColor,
                        borderWidth: Size.scaleSize(1),
                      },
                    ]}>
                    <Text
                      style={[
                        Typography.fontRegular,
                        {
                          color: theme.primaryColor,
                          fontSize: Typography.fontSize14,
                        },
                      ]}>
                      Preview
                    </Text>
                  </View>
                ) : undefined}
              </View>
              <Text style={[Typography.fontRegular, {color: theme.grayColor}]}>
                {' '}
                Video -{' '}
                {Moment('1900-01-01 00:00:00')
                  .add(itemLesson.hours * 3600, 'seconds')
                  .format('mm:ss')}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </Collapsible>
    );
  };

  const onPressPreviewLesson = (itemLesson) => {
    if (itemLesson.videoUrl && itemLesson.isPreview) {
      navigation.navigate(screenName.PlayVideoScreenName, {
        urlVideo: itemLesson.videoUrl,
        typeUploadVideoLesson: item.typeUploadVideoLesson,
      });
    }
  };

  return (
    <SafeAreaView>
      <View style={{backgroundColor: theme.themeColor, height: Size.HEIGHT}}>
        <View
          style={[styles.mainContainer, {backgroundColor: theme.themeColor}]}>
          <SectionList
            ItemSeparatorComponent={separator}
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
            renderSectionHeader={({section}) => renderHeader(section)}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <Header
                  navigation={navigation}
                  route={route}
                  item={item}
                  showPreview={true}
                />
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
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  footer: {height: 40},
  separator: {
    height: 1,
  },

  headerContainer: {
    height: 50,
    ...Styles.rowBetween,
    marginHorizontal: 20,
  },
});
export default CourseDetail;
