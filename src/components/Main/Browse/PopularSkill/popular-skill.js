import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  Styles,
  Typography,
  Distance,
  BoxModel,
} from '../../../../styles';
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
  skillContainer: {
    ...BoxModel.smallBorderRadius,
    ...Styles.mainCenter,
    ...BoxModel.smallPaddingHorizontal,
    backgroundColor: Colors.backgroundSeeAllButton,
    marginLeft: Distance.spacing_10,
    height: Distance.spacing_30,
  },
  footer: {
    width: Distance.spacing_14,
  },
});

export default PopularSkill;
