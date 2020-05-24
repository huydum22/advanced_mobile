import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Item from '../PathItem';
import SeeAllBtn from '../../common/see-all-button';
import {Styles, BoxModel, Distance, Typography} from '../../../styles';
import data from '../../../ExampleData/path';
import {ShowListPathScreenName} from '../../../config/ScreenName';
const Path = (props) => {
  const {navigation, route} = props;
  const seeAllPath = () => {
    navigation.navigate(ShowListPathScreenName);
  };
  const renderListData = (list) => {
    return list.map((item) => (
      <Item
        navigation={navigation}
        route={route}
        name={item.name}
        numberOfCourse={item.numberOfCourse}
        totalHour={item.totalHour}
        key={item.id}
      />
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>
          {props.title}{' '}
        </Text>
        <SeeAllBtn onPress={seeAllPath} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderListData(data)}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    ...BoxModel.smallMargin,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});
export default Path;
