import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './TitleItem';
import Author from './AuthorItem';
import InfoCourse from './InfoCourse';
import Feature from './SomeFeature';
import Description from './Description';
import Relate from './Relate';
import LearningCheck from './LearningCheck';
import SegmentControl from './SegmentControl';
import {AuthorDetailScreenName} from '../../../Constants/ScreenName';
import {FavoriteContext} from '../../../Provider/Favorite';
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
  const onPressFavorite = async (id, index) => {
    try {
      if (index === -1) {
        setFavorite((favorite) => [...favorite, item]);
      } else {
        setFavorite(favorite.filter((item) => item.id !== id));
        setIndexFavorite(-1);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{backgroundColor: theme.themeColor}}>
      <Title name={item.name} />
      <Author name={item.author} onPress={onPressAuthor} />
      <InfoCourse
        level={item.level}
        timeToStart={item.timeToStart}
        totalHour={item.totalHour}
        totalRate={item.totalRate}
        rate={item.rate}
      />
      <Feature
        onPressFavorite={onPressFavorite}
        checkFavorite={indexFavorite}
        id={item.id}
      />
      <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
      <Description description={item.description} />
      <Relate />
      <LearningCheck />
      <SegmentControl />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  divide: {
    height: 1,
  },
});
export default Header;
