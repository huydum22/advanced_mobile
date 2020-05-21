import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../../styles/color';
import mainStyle from '../../../../styles/styles';
import size from '../../../../styles/size';
const Empty = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={mainStyle.titleInList}>{props.title} </Text>
      </View>
      <View style={styles.contentContainer}>
        <Feather name={props.icon} size={50} />
        <Text style={styles.text}>{props.message}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    height: 40,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    width: size.WIDTH - 20,
    margin: 10,
    backgroundColor: colors.backgroundItem,
    shadowColor: colors.blackTitleColor,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
    borderRadius: 5,
  },
  image: {
    backgroundColor: 'green',
  },
  text: {
    marginHorizontal: 50,
    textAlign: 'center',
    color: colors.subTextColor,
  },
});
export default Empty;
