import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './TitleItem/title-item';
import Author from './AuthorItem/author-item';
import InfoCourse from './InfoCourse/info-course';
import Feature from './SomeFeature/feature';
import Description from './Description/description';
import Relate from './Relate/relate';
import LearningCheck from './LearningCheck/learning-check';
import SegmentControl from './SegmentControl/segment-control';
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
