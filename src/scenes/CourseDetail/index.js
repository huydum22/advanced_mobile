import React from 'react';
import {SafeAreaView} from 'react-native';
import {CourseDetail} from '../../components/CourseDetail';
const Course = (props) => {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <CourseDetail navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default Course;
