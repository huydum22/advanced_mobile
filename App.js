import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Login from './src/components/CourseDetail/course-detail';
import colors from './src/config/color';
export default function App() {
  return (
    <SafeAreaView
      style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
      <Login />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.backgroundColor,
  },
});
