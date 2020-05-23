import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './TitleItem';
import Author from './AuthorItem';
import InfoCourse from './InfoCourse';
import Feature from './SomeFeature';
import Description from './Description';
import Relate from './Relate';
import LearningCheck from './LearningCheck';
import SegmentControl from './SegmentControl';
import {AuthorDetailScreenName} from '../../../config/ScreenName';
const Header = (props) => {
  const {
    name,
    author,
    level,
    timeToStart,
    totalHour,
    totalRate,
    rate,
    description,
    navigation,
    route,
  } = props;
  const onPressAuthor = () => {
    navigation.push(AuthorDetailScreenName, {
      name: name,
    });
  };
  return (
    <View>
      <Title name={name} />
      <Author name={author} onPress={onPressAuthor} />
      <InfoCourse
        level={level}
        timeToStart={timeToStart}
        totalHour={totalHour}
        totalRate={totalRate}
        rate={rate}
      />
      <Feature />
      <View style={styles.divide} />
      <Description description={description} />
      <Relate />
      <LearningCheck />
      <SegmentControl />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default Header;
