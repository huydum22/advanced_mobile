import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors, Typography} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
import FastImage from 'react-native-fast-image';
const Author = (props) => {
  const {onPress} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.instructor ? (
          <TouchableOpacity
            style={[
              styles.skillContainer,
              {backgroundColor: theme.backgroundSeeAllButton},
            ]}
            onPress={() => onPress(props.instructor)}>
            <FastImage
              style={styles.image}
              source={{
                uri: props.instructor.avatar,
              }}
            />
            <Text style={[styles.text, {color: theme.primaryTextColor}]}>
              {props.instructor.name || props.instructor.email}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={[styles.text, {color: theme.primaryTextColor}]}>
            Author
          </Text>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  skillContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    marginLeft: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  text: {
    marginLeft: 10,
    ...Typography.fontRegular,
  },
});

export default Author;
