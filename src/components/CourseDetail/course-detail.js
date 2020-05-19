import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import data from '../../ExampleData/courseDetail';
import colors from '../../config/color';
import size from '../../config/size';

import Title from './TitleItem/title-item';
import Author from './AuthorItem/author-item';
import InfoCourse from './InfoCourse/info-course';
const CourseDetail = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Text></Text>
      </View>
      <View style={styles.mainContainer}>
        <Title name={data.name} />
        <Author name={data.author} />
        <InfoCourse
          level={data.level}
          timeToStart={data.timeToStart}
          totalHour={data.totalHour}
          totalRate={data.totalRate}
          rate={data.rate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: size.HEIGHT,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
  mainContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: colors.whiteColor,
    justifyContent: 'flex-start',
  },
});
export default CourseDetail;
