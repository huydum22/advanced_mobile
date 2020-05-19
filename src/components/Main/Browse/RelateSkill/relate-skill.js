import React from 'react';
import {StyleSheet, FlatList, ScrollView, YellowBox} from 'react-native';
import Item from './RelateSkillItem/relate-skill-item';
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
const RelateSkill = (props) => {
  const data = [
    {
      id: '1',
      name: 'conferences',
    },
    {
      id: '2',
      name: 'business professional',
    },
    {
      id: '3',
      name: 'software development',
    },
    {
      id: '4',
      name: 'creative professional',
    },
    {
      id: '5',
      name: 'it ops',
    },
    {
      id: '6',
      name: 'manufacturing and design',
    },
    {
      id: '7',
      name: 'information and cyber security',
    },
    {
      id: '8',
      name: 'Architecture and construction',
    },
    {
      id: '9',
      name: 'Data professional',
    },
    {
      id: '10',
      name: 'certification',
    },
  ];
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
    marginTop: 15,
  },
  contentContainer: {
    alignSelf: 'flex-start',
  },
});
export default RelateSkill;
