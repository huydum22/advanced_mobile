import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../../config/color';
import image from '../../../../assets/person.jpg';
const Author = (props) => {
  //   const renderList = (listData) => {
  //     return listData.map((item) => (
  //       <TouchableOpacity key={item.id} style={styles.skillContainer}>
  //         <Text>{item.name}</Text>
  //       </TouchableOpacity>
  //     ));
  //   };
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* {renderList(props.author)} */}
        <TouchableOpacity style={styles.skillContainer}>
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
    backgroundColor: colors.backgroundColor,
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
  },
});

export default Author;
