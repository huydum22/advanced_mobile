import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Styles, Typography, Distance, BoxModel} from '../../../styles';
import Item from '../PopularSkillItem';
import data from '../../../ExampleData/skill';
import {PopularSkillScreenName} from '../../../config/ScreenName';
const PopularSkill = (props) => {
  const {navigation, route} = props;
  const onPress = () => {
    navigation.navigate(PopularSkillScreenName);
  };
  const renderList = (listData) => {
    return listData.map((item) => (
      <Item key={item.id} name={item.name} onPress={onPress} />
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[Styles.titleRow, Typography.fontBold]}>
          Popular skills
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderList(data)}
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    ...Styles.rowCross,
    ...BoxModel.tinyMarginVertical,
    ...BoxModel.marginHorizontal,
    height: Distance.medium,
  },
  footer: {
    width: Distance.spacing_14,
  },
});

export default PopularSkill;
