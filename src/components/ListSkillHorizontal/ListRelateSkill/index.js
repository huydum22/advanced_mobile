import React from 'react';
import {StyleSheet, FlatList, ScrollView, YellowBox} from 'react-native';
import Item from '../RelateSkillItem';
import data from '../../../ExampleData/relate-skill';
import {Distance} from '../../../styles';
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
const RelateSkill = (props) => {
  const randomID = (i) => {
    return (Math.floor(Math.random() * 100) * i) % 3;
  };

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      <FlatList
        nestedScrollEnabled={true}
        contentContainerStyle={styles.contentContainer}
        numColumns={data.length / 2}
        alwaysBounceVertical={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Item name={item.name} image={randomID(item.id)} />
        )}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Distance.spacing_14,
  },
});
export default RelateSkill;
