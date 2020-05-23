import React from 'react';
import {SafeAreaView} from 'react-native';
import {ListCourseOfAuthor} from '../../components/AuthorDetail';
const AuthorDetail = (props) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <ListCourseOfAuthor navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
export default AuthorDetail;
