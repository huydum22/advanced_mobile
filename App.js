import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Login from './src/components/Main/Home/home';
export default function App() {
  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight}}>
      <Login />
    </SafeAreaView>
  );
}
