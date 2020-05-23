import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';

import {Styles} from '../../styles';
import backgroundImage from '../../assets/image/backgroundImage.jpg';
import backgroundImage02 from '../../assets/image/backgroundImage02.jpg';

import {ListPathHorizontal} from '../../components/ListPathHorizontal';
import {ListAuthorHorizontal} from '../../components/ListAuthorHorizontal';
import {
  ListPopularSkillHorizontal,
  ListRelateSkillHorizontal,
} from '../../components/ListSkillHorizontal';
import Banner from '../../components/Banner';
import {ShowListCourseScreenName} from '../../config/ScreenName';
const brown = (props) => {
  const {navigation, route} = props;
  const onPressBanner01 = () => {
    navigation.push(ShowListCourseScreenName, {
      title: 'New',
    });
  };
  const onPressBanner02 = () => {
    navigation.push(ShowListCourseScreenName, {
      title: 'Recommend',
    });
  };
  return (
    <SafeAreaView>
      <ScrollView
        style={Styles.backgroundReset}
        showsVerticalScrollIndicator={false}>
        <Banner
          backgroundImage={backgroundImage}
          name="new releases"
          onPress={onPressBanner01}
        />
        <Banner
          backgroundImage={backgroundImage02}
          name="recommended for you"
          onPress={onPressBanner02}
        />
        <ListPopularSkillHorizontal />
        <ListRelateSkillHorizontal />
        <ListPathHorizontal title="Path" />
        <ListAuthorHorizontal />
      </ScrollView>
    </SafeAreaView>
  );
};
export default brown;
