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
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <Item item={item} onPress={onPress} />}
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
