import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors, Typography} from '../../../../styles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../../Provider/Theme';
const Feature = (props) => {
  const {onPressFavorite, checkFavorite, id} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.themeColor}]}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}>
          <Feather name="bookmark" size={22} color={theme.primaryTextColor} />
        </TouchableOpacity>
        <Text style={[styles.textContainer, {color: theme.primaryTextColor}]}>
          Bookmark
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}>
          <Feather name="radio" size={22} color={theme.primaryTextColor} />
        </TouchableOpacity>
        <Text style={[styles.textContainer, {color: theme.primaryTextColor}]}>
          Add to channel
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}
          onPress={() => onPressFavorite(id, checkFavorite)}>
          <MaterialIcons
            name={checkFavorite === -1 ? 'favorite-border' : 'favorite'}
            size={22}
            color={theme.primaryTextColor}
          />
        </TouchableOpacity>
        <Text style={[styles.textContainer, {color: theme.primaryTextColor}]}>
          {checkFavorite === -1 ? 'Like' : 'Liked'}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 10,
    ...Typography.fontRegular,
  },
});
export default Feature;
