import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Styles, Size} from '../../../../styles';
import image from '../../../../assets/image/path.png';
import {ThemeContext} from '../../../../Provider/Theme';
const Item = (props) => {
  const {item, onPress} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[
        Styles.horizontalCourse,
        {
          ...Size.boxShadow(theme.primaryTextColor),
          backgroundColor: theme.DialogColor,
        },
      ]}
      onPress={() => {
        onPress(item);
      }}>
      <View style={[styles.container, {backgroundColor: theme.whiteColor}]}>
        <Image
          source={image}
          style={[Styles.imageInHorizontalCourse, styles.image]}
        />
      </View>
      <View style={Styles.containerInHorizontalCourse}>
        <Text
          style={[
            Styles.titleInHorizontalList,
            {color: theme.primaryTextColor},
          ]}>
          {item.name}
        </Text>
        <Text
          style={[
            Styles.subTitleInHorizontalList,
            {color: theme.primaryTextColor},
          ]}>
          {item.numberOfCourse}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
  },
});
export default Item;
