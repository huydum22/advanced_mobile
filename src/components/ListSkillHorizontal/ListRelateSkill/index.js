import React from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import Item from '../RelateSkillItem';
import {Distance} from '../../../styles';
import {RelateSkillScreenName} from '../../../config/ScreenName';
const RelateSkill = (props) => {
  const {navigation, route, data} = props;
  const onPress = () => {
    navigation.navigate(RelateSkillScreenName);
  };
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
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Item name={item.name} image={randomID(item.id)} onPress={onPress} />
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
