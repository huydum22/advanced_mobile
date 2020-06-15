import React, {useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  Typography,
  BoxModel,
  Styles,
  darkTheme,
  lightTheme,
  Size,
} from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../Provider/Theme';
const data = ['Default', 'Light', 'Dark'];
const Theme = (props) => {
  const {theme, setTheme} = useContext(ThemeContext);
  const flatListSeparator = () => {
    return (
      <View style={[styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };
  const onPressChangeTheme = (value) => {
    if (value === 'Dark') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };
  const getTheme = () => {
    if (theme === lightTheme) {
      return 'Default';
    } else {
      return 'Dark';
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={flatListSeparator}
        renderItem={({item}) => (
          <TouchableHighlight
            style={[
              styles.titleContainer,
              {backgroundColor: theme.backgroundColor},
            ]}
            onPress={() => onPressChangeTheme(item)}
            underlayColor={theme.backgroundColor}>
            <View
              style={[
                styles.titleContainer,
                {backgroundColor: theme.backgroundColor},
              ]}>
              <Text style={[styles.title, {color: theme.primaryTextColor}]}>
                {item}
              </Text>
              {item === getTheme() ? (
                <MaterialIcons
                  name="check"
                  size={20}
                  color={theme.primaryTextColor}
                />
              ) : (
                <View />
              )}
            </View>
          </TouchableHighlight>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    width: Size.WIDTH,
    height: Size.HEIGHT,
  },
  container: {
    ...BoxModel.paddingHorizontal,
    ...BoxModel.mediumPaddingVertical,
  },
  separator: {
    height: 1,
  },
  titleContainer: {
    flex: 1,
    ...Styles.rowCenter,
    height: 50,
  },
  title: {
    flex: 1,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize18,
  },
});

export default Theme;
