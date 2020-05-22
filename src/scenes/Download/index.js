import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {ListCourseVertical} from '../../components/ListCourseVertical';
const ListCourse = (props) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <ListCourseVertical />
    </SafeAreaView>
  );
};

export default ListCourse;
