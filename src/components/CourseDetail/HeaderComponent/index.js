import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from './TitleItem';
import Author from './AuthorItem';
import InfoCourse from './InfoCourse';
import Feature from './SomeFeature';
import Relate from './Relate';
import LearningCheck from './LearningCheck';
import SegmentControl from './SegmentControl';
import WhatLearn from './WhatLearn';
import {AuthorDetailScreenName} from '../../../Constants/ScreenName';
import {FavoriteContext} from '../../../Provider/Favorite';
import {ListCourseHorizontal} from '../../Course';
import {Typography, BoxModel} from '../../../styles';
import {
  findExistFavoriteCourse,
  findIndexFavoriteCourse,
} from '../../../services/Favorite';
import {ThemeContext} from '../../../Provider/Theme';
const Header = (props) => {
  const {item, navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const {favorite, setFavorite} = useContext(FavoriteContext);
  const [indexFavorite, setIndexFavorite] = useState();

  useEffect(() => {
    const checkExistFavorite = async () => {
      try {
        const response = findExistFavoriteCourse(favorite, item.id);
        const newIndex = findIndexFavoriteCourse(favorite, response);
        setIndexFavorite(newIndex);
      } catch (err) {
        console.log(err);
      }
    };
    checkExistFavorite();
  }, [favorite, item.id]);

  const onPressAuthor = () => {
    navigation.navigate(AuthorDetailScreenName, {
      name: item.name,
    });
  };

  const onPressJoin = async (id, index) => {};
  const onPressLike = async (id, index) => {};
  return (
    <View style={{backgroundColor: theme.themeColor}}>
      <Title name={item.title} subtitle={item.subtitle} />
      <Author instructor={item.instructor} onPress={onPressAuthor} />
      <InfoCourse
        videoNumber={item.videoNumber}
        timeToStart={item.createdAt}
        totalHour={item.totalHours}
        totalRate={item.ratedNumber}
        rate={Number(item.averagePoint)}
        soldNumber={item.soldNumber}
        updatedAt={item.updatedAt}
      />
      <Feature
        onPressLike={onPressLike}
        onPressJoin={onPressJoin}
        id={item.id}
      />
      <WhatLearn
        WhatLearnItem={item.learnWhat}
        requireItem={item.requirement}
        description={item.description}
      />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        The same topic
      </Text>
      <ListCourseHorizontal data={item.coursesLikeCategory} />
      <LearningCheck />
      <SegmentControl />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
});
export default Header;
