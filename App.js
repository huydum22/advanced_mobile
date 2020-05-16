import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Login from './src/components/Courses/ListCourses/list-course';
export default function App() {
  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight}}>
      <Login />
    </SafeAreaView>
  );
}
