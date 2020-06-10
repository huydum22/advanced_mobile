import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors, Typography} from '../../../../styles';
import image from '../../../../assets/image/person.png';
const Author = (props) => {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* {renderList(props.author)} */}
        <TouchableOpacity style={styles.skillContainer} onPress={onPress}>
          <Image style={styles.image} source={image} />
          <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
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
    backgroundColor: Colors.backgroundSeeAllButton,
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
