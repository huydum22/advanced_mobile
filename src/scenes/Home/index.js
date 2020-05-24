import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {ListCourseHorizontal} from '../../components/ListCourseHorizontal';
import EmptyComponent from '../../components/EmptyComponent';
import {Colors, Distance} from '../../styles';
import Banner from '../../components/Banner';
import backgroundImage02 from '../../assets/image/backgroundImage02.jpg';

import courses from '../../ExampleData/course';
import emptyCourse from '../../ExampleData/emptyCourse';
const titleData = [
  {
    title: 'Software development',
  },
  {
    title: 'IT operations',
  },
  {
    title: 'Data Professional',
  },
  {
    title: 'Security Professional',
  },
];
const home = (props) => {
  const {navigation, route} = props;
  const Header = () => {
    return <Banner backgroundImage={backgroundImage02} name="Stay at Home" />;
  };
  const Footer = () => {
    return emptyCourse.map((item) => (
      <EmptyComponent
        title={item.title}
        icon={item.icon}
        message={item.message}
        key={item.title}
      />
    ));
  };
  return (
    <SafeAreaView>
      <FlatList
        data={titleData}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return <Header />;
        }}
        ListFooterComponent={() => {
          return <Footer />;
        }}
        renderItem={({item}) => (
          <ListCourseHorizontal
            title="Security Professional"
            navigation={navigation}
            route={route}
            data={courses}
          />
        )}
        keyExtractor={(item, index) => item + index}
      />
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
