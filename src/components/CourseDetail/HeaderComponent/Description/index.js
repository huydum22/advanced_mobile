import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import colors from '../../../../styles/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Description = (props) => {
  const [isExpand, setExpand] = useState(true);
  const onPress = () => {
    if (isExpand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };
  const renderIcon = () => {
    if (isExpand) {
      return <Ionicons name="ios-arrow-down" size={15} />;
    } else {
      return <Ionicons name="ios-arrow-up" size={15} />;
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textContainer,
          isExpand ? styles.maxHeightText : styles.minHeightText,
        ]}>
        <Text style={styles.text}>{props.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={onPress}
          underlayColor={colors.backgroundGroupButton}>
          {renderIcon()}
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 25,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.backgroundGroupButton,
    width: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    marginRight: 20,
  },
  minHeightText: {
    height: null,
  },
  maxHeightText: {
    height: 80,
  },
  text: {
    color: colors.blackTextWithOpacity,
  },
});
export default Description;
