import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../../styles';
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
    fontSize: 21,
    fontWeight: '700',
  },
});

export default Title;
