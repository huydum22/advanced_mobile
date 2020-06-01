import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Colors, Typography} from '../../../../styles';
import Feather from 'react-native-vector-icons/Feather';
const LearningCheck = (props) => {
  const onPress = () => {};
  return (
    <TouchableHighlight underlayColor={Colors.whiteColor} onPress={onPress}>
      <View style={styles.container}>
        <Feather name="target" size={20} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Take a learning check</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: Colors.backgroundSeeAllButton,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    ...Typography.fontRegular,
  },
});
export default LearningCheck;
