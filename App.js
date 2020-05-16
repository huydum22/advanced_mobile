import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Login from './src/components/Main/Browse/brown';
export default function App() {
  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight}}>
      <Login />
    </SafeAreaView>
  );
}
