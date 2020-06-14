import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Colors, Typography, BoxModel, Styles} from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const data = ['System', 'Light', 'Dark'];
const Theme = (props) => {
  const flatListSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={flatListSeparator}
      renderItem={({item}) => (
        <TouchableHighlight style={styles.titleContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item}</Text>
            {item !== 'System' ? (
              <MaterialIcons name="check" size={20} />
            ) : (
              <View />
            )}
          </View>
        </TouchableHighlight>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    ...BoxModel.marginHorizontal,
    ...BoxModel.mediumMarginVertical,
    backgroundColor: Colors.backgroundColor,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.grayLightColor,
  },
  titleContainer: {
    flex: 1,
    ...Styles.rowCenter,
    height: 50,
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    flex: 1,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize20,
  },
});

export default Theme;
