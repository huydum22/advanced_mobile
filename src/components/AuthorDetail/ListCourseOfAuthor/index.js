import React from 'react';
import {} from 'react-native';
import {ListCourseVertical} from '../../ListCourseVertical';
const ListCourseOfAuthor = (props) => {
  const {navigation, route} = props;
  return <ListCourseVertical navigation={navigation} route={route} />;
};

export default ListCourseOfAuthor;
