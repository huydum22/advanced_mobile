import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ListCourseOfPath} from '../../components/PathDetail';
import {Colors} from '../../styles';
const PathDetail = (props) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView style={{backgroundColor: Colors.whiteColor}}>
      <ListCourseOfPath navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
export default PathDetail;
