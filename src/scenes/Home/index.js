import React from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {ListCourseHorizontal} from '../../components/ListCourseHorizontal';
import EmptyComponent from '../../components/EmptyComponent';
import {Colors, Distance} from '../../styles';
import Banner from '../../components/Banner';
import backgroundImage02 from '../../assets/image/backgroundImage02.jpg';

import courses from '../../ExampleData/course';
import emptyCourse from '../../ExampleData/emptyCourse';
const home = (props) => {
  const {navigation, route} = props;
  const Footer = emptyCourse.map((item) => (
    <EmptyComponent
      title={item.title}
      icon={item.icon}
      message={item.message}
      key={item.title}
    />
  ));
  const renderItem = [
    'Software development',
    'IT operations',
    'Data Professional',
    'Security Professional',
  ].map((item) => (
    <ListCourseHorizontal
      title={item}
      navigation={navigation}
      route={route}
      data={courses}
      key={item}
    />
  ));
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}>
        <Banner backgroundImage={backgroundImage02} name="Stay at Home" />
        {renderItem}
        {Footer}
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  footer: {height: Distance.spacing_20},
});

export default home;
