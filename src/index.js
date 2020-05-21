import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Login from './scenes/Register';
export default function App() {
  return (
    // <SafeAreaView
    //   style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
    <Login />
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {},
});
