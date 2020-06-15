import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ListCourseVertical} from '../../components/Course';

const ListOfCourse = (props) => {
  const {navigation, route} = props;
  ListOfCourse.navigationOptions = () => ({
    title: navigation.getParam('title'),
  });
  return (
    <SafeAreaView style={styles.container}>
      <ListCourseVertical navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ListOfCourse;
