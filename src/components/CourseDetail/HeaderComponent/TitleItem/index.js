import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Typography} from '../../../../styles';
const Title = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 10,
  },
  textContainer: {
    color: Colors.blackColor,
    fontSize: Typography.fontSize20,
    ...Typography.fontBold,
  },
});

export default Title;
