import React, {useState, useEffect, useContext, useReducer} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthenticationContext} from '../../Provider/Authentication';
import {useSafeArea} from 'react-native-safe-area-context';
import {Size, Typography, Styles} from '../../styles';
import * as screenName from '../../Constants/ScreenName';
import Header from '../../components/CourseDetail/HeaderComponent';
import {ThemeContext} from '../../Provider/Theme';
import Spinner from 'react-native-loading-spinner-overlay';
import separator from '../../components/Separator';
import ItemRow from '../../components/CourseDetail/RenderItem';
import {getCourseDetailAction} from '../../Actions/CourseDetail';
import {courseDetailReducer} from '../../Reducers/CourseDetail';
const initialState = {
  isLoading: true,
  courseDetail: [],
};
const CourseDetail = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {state} = useContext(AuthenticationContext);
  const [collapsibleItems, setCollapsibleItems] = useState([]);
  const insets = useSafeArea();
  const [dataCourse, dispatch] = useReducer(courseDetailReducer, initialState);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      getCourseDetailAction(dispatch)(route.params.id);
    });

    return unsubscribe;
  }, [navigation, state.userInfo.id, route.params.id]);
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

  const onPressPreviewLesson = (itemLesson) => {
    if (itemLesson.videoUrl && itemLesson.isPreview) {
      navigation.navigate(screenName.PlayVideoScreenName, {
        urlVideo: itemLesson.videoUrl,
        typeUploadVideoLesson: dataCourse.courseDetail.typeUploadVideoLesson,
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
              dataCourse.courseDetail.section
                ? dataCourse.courseDetail.section.map((data) => {
                    return {
                      title: data.name,
                      data: data.lesson,
                    };
                  })
                : []
            }
            keyExtractor={(itemLesson, index) => itemLesson + index}
            renderItem={({item}) => (
              <ItemRow
                itemLesson={item}
                collapsibleItems={collapsibleItems}
                onPressPreviewLesson={onPressPreviewLesson}
              />
            )}
            renderSectionHeader={({section}) => renderHeader(section)}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <Header
                  navigation={navigation}
                  route={route}
                  item={dataCourse.courseDetail}
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
      <Spinner
        visible={dataCourse.isLoading}
        textContent={'Loading...'}
        color={theme.whiteColor}
        textStyle={{color: theme.whiteColor}}
        overlayColor={theme.blackWith05OpacityColor}
      />
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
