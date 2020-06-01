import React from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {ListCourseHorizontal} from '../../components/ListCourseHorizontal';
import {ListPathHorizontal} from '../../components/ListPathHorizontal';
import {ListAuthorHorizontal} from '../../components/ListAuthorHorizontal';
import {Colors, Distance} from '../../styles';
import data from '../../ExampleData/course';
import dataAuthor from '../../ExampleData/author';
import dataPath from '../../ExampleData/path';
const PopularSkill = (props) => {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}>
        <ListPathHorizontal
          title="Path"
          navigation={navigation}
          route={route}
          data={dataPath}
        />
        <ListCourseHorizontal
          title="New"
          navigation={navigation}
          route={route}
          data={data}
        />
        <ListCourseHorizontal
          title="Trending"
          navigation={navigation}
          data={data}
        />
        <ListAuthorHorizontal
          navigation={navigation}
          route={route}
          data={dataAuthor}
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

export default PopularSkill;
