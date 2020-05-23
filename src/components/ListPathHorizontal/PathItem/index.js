import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Styles} from '../../../styles';
import image from '../../../assets/image/path.jpg';
import {PathDetailScreenName} from '../../../config/ScreenName';
const Item = (props) => {
  const {navigation, route, name, numberOfCourse, totalHour} = props;
  const onPress = () => {
    navigation.push(PathDetailScreenName, {
      name: name,
      numberOfCourse: numberOfCourse,
      totalHour: totalHour,
    });
  };
  return (
    <TouchableOpacity style={Styles.horizontalCourse} onPress={onPress}>
      <Image
        source={image}
        style={[Styles.imageInHorizontalCourse, styles.image]}
      />
      <View style={Styles.containerInHorizontalCourse}>
        <Text style={Styles.titleInHorizontalList}>{props.name}</Text>
        <Text style={Styles.subTitleInHorizontalList}>
          {props.numberOfCourse}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});
export default Item;
