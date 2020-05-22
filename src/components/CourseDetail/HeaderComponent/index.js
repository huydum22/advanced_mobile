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
const Header = (props) => {
  return (
    <View>
      <Title name={props.data.name} />
      <Author name={props.data.author} />
      <InfoCourse
        level={props.data.level}
        timeToStart={props.data.timeToStart}
        totalHour={props.data.totalHour}
        totalRate={props.data.totalRate}
        rate={props.data.rate}
      />
      <Feature />
      <View style={styles.divide} />
      <Description description={props.data.description} />
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
