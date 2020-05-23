import React from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {ListCourseHorizontal} from '../../components/ListCourseHorizontal';
import EmptyComponent from '../../components/EmptyComponent';
import {Colors, Distance} from '../../styles';
import Banner from '../../components/Banner';
import backgroundImage02 from '../../assets/image/backgroundImage02.jpg';

const home = (props) => {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}>
        <Banner backgroundImage={backgroundImage02} name="Stay at Home" />
        <ListCourseHorizontal
          title="Software development"
          navigation={navigation}
          route={route}
        />
        <ListCourseHorizontal
          title="IT operations"
          navigation={navigation}
          route={route}
        />
        <ListCourseHorizontal
          title="Data Professional"
          navigation={navigation}
          route={route}
        />
        <ListCourseHorizontal
          title="Security Professional"
          navigation={navigation}
          route={route}
        />
        <EmptyComponent
          title="My paths"
          icon="book-open"
          message="Paths will guild you in learning a specific skill or technology"
        />
        <EmptyComponent
          title="My channels"
          icon="radio"
          message="Use channels to save, organize, save and share content to accomplish your learning objectives"
        />
        <EmptyComponent
          title="Bookmarks"
          icon="bookmark"
          message="Use bookmarks to quickly save courses for later"
        />
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
