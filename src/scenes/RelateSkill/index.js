import React from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {ListCourseHorizontal} from '../../components/ListCourseHorizontal';
import {ListPathHorizontal} from '../../components/ListPathHorizontal';
import {ListAuthorHorizontal} from '../../components/ListAuthorHorizontal';
import {ListPopularSkillHorizontal} from '../../components/ListSkillHorizontal';
import {Colors, Distance} from '../../styles';

const RelateSkill = (props) => {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}>
        <ListPopularSkillHorizontal navigation={navigation} route={route} />

        <ListPathHorizontal
          title="Path"
          navigation={navigation}
          route={route}
        />
        <ListCourseHorizontal
          title="New"
          navigation={navigation}
          route={route}
        />
        <ListCourseHorizontal title="Trending" navigation={navigation} />
        <ListAuthorHorizontal navigation={navigation} route={route} />

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

export default RelateSkill;
