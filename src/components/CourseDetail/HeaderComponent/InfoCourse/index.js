import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Size, Typography} from '../../../../styles';
import {AirbnbRating} from 'react-native-ratings';
import {ThemeContext} from '../../../../Provider/Theme';

const InfoCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: theme.grayColor}]}>{props.level}</Text>
      <Text style={[styles.text, {color: theme.grayColor}]}>.</Text>
      <Text style={[styles.text, {color: theme.grayColor}]}>
        {props.timeToStart}
      </Text>
      <Text style={[styles.text, {color: theme.grayColor}]}>.</Text>
      <Text style={[styles.text, {color: theme.grayColor}]}>
        {props.totalHour}
      </Text>
      <AirbnbRating
        reviews={false}
        size={12}
        defaultRating={props.rate}
        count={5}
        starContainerStyle={{marginTop: -Size.scaleSize(23)}}
      />
      <Text style={[styles.text, {color: theme.grayColor}]}>
        ({props.totalRate})
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  text: {
    marginLeft: 5,
    fontSize: 13,
    ...Typography.fontRegular,
  },
  rating: {
    marginLeft: 10,
  },
});
export default InfoCourse;
