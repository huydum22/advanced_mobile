import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Colors, Typography} from '../../../../styles';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../../../Provider/Theme';
const LearningCheck = (props) => {
  const {theme} = useContext(ThemeContext);
  const onPress = () => {};
  return (
    <TouchableHighlight
      underlayColor={theme.primaryBackgroundColor}
      onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}>
        <Feather name="target" size={20} color={theme.primaryTextColor} />
        <View style={styles.textContainer}>
          <Text style={[styles.text, {color: theme.primaryTextColor}]}>
            Ratings
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
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
