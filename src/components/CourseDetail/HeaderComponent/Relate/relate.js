import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import colors from '../../../../config/color';
import Feather from 'react-native-vector-icons/Feather';
const Relate = (props) => {
  const onPress = () => {
    // console.log('test');
  };
  return (
    <TouchableHighlight underlayColor={colors.whiteColor} onPress={onPress}>
      <View style={styles.container}>
        <Feather name="layers" size={20} />
        <View style={styles.textContainer}>
          <Text>{'Related paths & courses'}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: colors.backgroundGroupButton,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
});
export default Relate;
