import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography} from '../../../styles';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import * as screenName from '../../../config/ScreenName';
import * as scenes from '../../../scenes';
import {Styles, BoxModel, Size} from '../../../styles';
import skill01 from '../../../assets/image/skill01.png';

const BrowseStack = createStackNavigator();
const configBrowseNavigator = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.whiteColor,
  headerTitleStyle: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
  },
};
const configBackgrounfImageNavigator = {
  header: (props) => {
    return (
      <ImageBackground style={styles.container} source={skill01}>
        <TouchableOpacity style={[styles.blurContainer, styles.container]}>
          <Text style={[Styles.textInBanner, styles.text]}>Test test</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  },
};
const BrowseNavigatorStack = () => {
  return (
    <BrowseStack.Navigator
      screenOptions={configBrowseNavigator}
      headerMode="screen">
      <BrowseStack.Screen
        name={screenName.BrowseScreenName}
        component={scenes.Browse}
        options={{title: 'Browse'}}
      />
      <BrowseStack.Screen
        name={screenName.ShowListCourseScreenName}
        component={scenes.ListOfCourse}
        initialParams={{
          title: 'Course',
        }}
        options={({route}) => ({title: route.params.title})}
      />
      <BrowseStack.Screen
        name={screenName.AuthorDetailScreenName}
        component={scenes.AuthorDetail}
        options={{title: 'Author'}}
      />
      <BrowseStack.Screen
        name={screenName.PathDetailScreenName}
        component={scenes.PathDetail}
      />
      <BrowseStack.Screen
        name={screenName.ShowListPathScreenName}
        component={scenes.ListOfPath}
        options={{title: 'Path'}}
      />
      <BrowseStack.Screen
        name={screenName.PopularSkillScreenName}
        component={scenes.PopularSkill}
        options={{title: 'Popular skill'}}
      />
      <BrowseStack.Screen
        name={screenName.RelateSkillScreenName}
        component={scenes.RelateSkill}
        options={{title: 'Skill'}}
      />
    </BrowseStack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.center,
    ...BoxModel.tinyMargin,
    width: Size.WIDTH,
    height: Size.bannerHeight,
  },
  blurContainer: {
    backgroundColor: Colors.blackWith05OpacityColor,
  },
  text: {
    ...BoxModel.smallPadding,
    ...Typography.fontBold,
    color: Colors.whiteColor,
  },
});
export default BrowseNavigatorStack;
