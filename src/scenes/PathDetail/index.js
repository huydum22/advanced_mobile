import React from 'react';
import {SafeAreaView} from 'react-native';
import {ListCourseOfPath} from '../../components/PathDetail';
const PathDetail = (props) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <ListCourseOfPath navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
export default PathDetail;
