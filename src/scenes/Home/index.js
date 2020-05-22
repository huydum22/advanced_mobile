import React from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {EmptyCourse, ListCourse} from '../../components/Main/Home';
import {Colors, Distance} from '../../styles';
const home = (props) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}>
        <ListCourse title="Software development" />
        <ListCourse title="IT operations" />
        <ListCourse title="Data Professional" />
        <ListCourse title="Security Professional" />
        <EmptyCourse
          title="My paths"
          icon="book-open"
          message="Paths will guild you in learning a specific skill or technology"
        />
        <EmptyCourse
          title="My channels"
          icon="radio"
          message="Use channels to save, organize, save and share content to accomplish your learning objectives"
        />
        <EmptyCourse
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
