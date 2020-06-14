import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors, Typography} from '../../../../styles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Feature = (props) => {
  const {onPressFavorite, checkFavorite, id} = props;
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Feather name="bookmark" size={22} />
        </TouchableOpacity>
        <Text style={styles.textContainer}>Bookmark</Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Feather name="radio" size={22} />
        </TouchableOpacity>
        <Text style={styles.textContainer}>Add to channel</Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onPressFavorite(id, checkFavorite)}>
          <MaterialIcons
            name={checkFavorite === -1 ? 'favorite-border' : 'favorite'}
            size={22}
          />
        </TouchableOpacity>
        <Text style={styles.textContainer}>
          {checkFavorite === -1 ? 'Like' : 'Liked'}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    flexDirection: 'row',
    height: 100,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    height: 50,
    width: 50,
    backgroundColor: Colors.backgroundSeeAllButton,
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
  },
  textContainer: {
    color: Colors.blackColor,
    marginTop: 10,
    ...Typography.fontRegular,
  },
});
export default Feature;
