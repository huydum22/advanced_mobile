import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import mainStyle from '../../../../styles/styles';
import colors from '../../../../styles/color';
import data from '../../../../ExampleData/skill';
const PopularSkill = (props) => {
  const renderList = (listData) => {
    return listData.map((item) => (
      <TouchableOpacity key={item.id} style={styles.skillContainer}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={mainStyle.titleInList}>Popular skills</Text>
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
    height: 25,
    marginLeft: 15,
  },
  skillContainer: {
    backgroundColor: colors.backgroundButtonColor,
    borderRadius: 15,
    marginLeft: 10,
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  footer: {
    width: 15,
  },
});

export default PopularSkill;
