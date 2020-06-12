import React from 'react';
import {SafeAreaView} from 'react-native';
import {ListCourseVertical} from '../../components/Course';

const ListOfCourse = (props) => {
  const {navigation, route} = props;
  ListOfCourse.navigationOptions = () => ({
    title: navigation.getParam('title'),
  });
  return (
    <SafeAreaView>
      <ListCourseVertical navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
export default ListOfCourse;
