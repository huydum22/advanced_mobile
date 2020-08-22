/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {MyCourseVerticalItem} from '../../components/Course';
import {Styles, Distance, BoxModel, Typography, Size} from '../../styles';
import separator from '../../components/Separator';
import Spinner from 'react-native-loading-spinner-overlay';
import EmptyCourse from '../../components/EmptyCourse';
import {
  LessonCourseScreenName,
  LessonCourseScreenStack,
} from '../../Constants/ScreenName';
import {AuthenticationContext} from '../../Provider/Authentication';
import {ThemeContext} from '../../Provider/Theme';
import {MyCourseContext} from '../../Provider/MyCourse';
const ListCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {state} = useContext(AuthenticationContext);
  const {myCourses, myCoursesProvider} = useContext(MyCourseContext);
  const onPressItem = (item) => {
    navigation.navigate(LessonCourseScreenStack, {
      screen: LessonCourseScreenName,
      params: {id: item.id},
    });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      myCoursesProvider(state.token);
    });
    return unsubscribe;
  }, [myCoursesProvider, navigation, state.token]);
  return (
    <SafeAreaView
      style={[styles.safeAreaView, {backgroundColor: theme.backgroundColor}]}>
      <Spinner
        visible={myCourses.isLoading}
        textContent={'Loading...'}
        color={theme.whiteColor}
        textStyle={{color: theme.whiteColor}}
        overlayColor={theme.blackWith05OpacityColor}
      />
      {myCourses.listMyCourse.length === 0 ? (
        <EmptyCourse />
      ) : (
        <FlatList
          data={myCourses.listMyCourse}
          image
          ItemSeparatorComponent={separator}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <MyCourseVerticalItem onPressItem={onPressItem} item={item} />
          )}
          keyExtractor={(item, index) => item.id + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(100),
            offset: Size.scaleSize(100) * index,
            index,
          })}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    ...Styles.rowBetween,
    ...BoxModel.smallPaddingHorizontal,
    height: Distance.spacing_40,
  },
  textDownload: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  textRemove: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
  },
});

export default ListCourse;
