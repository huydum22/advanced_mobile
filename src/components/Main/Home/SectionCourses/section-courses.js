import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import Item from '../SectionCoursesItem/section-courses-item';
import SeeAllBtn from '../../../common/see-all-button';
import colors from '../../../../config/color';
import mainStyle from '../../../../config/styles';
const SectionCourses = (props) => {
  const data = [
    {
      id: '1',
      name: 'Angular Fundamentals',
    },
    {
      id: '2',
      name: 'C# Fundamentals',
    },
    {
      id: '3',
      name: 'Managing AWS Operations',
    },
    {
      id: '4',
      name: 'Spring Framework: Spring MVC Fundamentals',
    },
    {
      id: '5',
      name: 'Spring: The Big Picture',
    },
    {
      id: '6',
      name: 'Domain-Driven Design',
    },
    {
      id: '7',
      name: 'Dependency Injection in ASP.NET Core',
    },
    {
      id: '8',
      name: 'Building Application with React and Flux',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={mainStyle.titleInList}>{props.title} </Text>
        <SeeAllBtn />
      </View>
      <FlatList
        horizontal={true}
        // showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
      {/* {renderListItem(data)} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    height: 40,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default SectionCourses;
