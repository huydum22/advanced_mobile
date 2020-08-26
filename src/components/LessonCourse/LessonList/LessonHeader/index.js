import React, {useContext} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../../Provider/Theme';
import {Styles, Typography} from '../../../../styles';
const LessonHeader = ({section, collapsibleItems, onPressHeader}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableHighlight
      style={[
        styles.headerTouchable,
        {backgroundColor: theme.backgroundSeeAllButton},
      ]}
      onPress={() => onPressHeader(section)}
      underlayColor={theme.backgroundSeeAllButton}>
      <View
        style={[
          styles.headerContainer,
          {backgroundColor: theme.backgroundSeeAllButton},
        ]}>
        <Text style={[styles.textHeader, {color: theme.primaryTextColor}]}>
          {section.title}
        </Text>
        {collapsibleItems.includes(section.data[0].sectionId) ? (
          <MaterialIcons
            name="expand-less"
            size={15}
            color={theme.primaryTextColor}
          />
        ) : (
          <MaterialIcons
            name="expand-more"
            size={15}
            color={theme.primaryTextColor}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  headerTouchable: {
    height: 50,
  },

  headerContainer: {
    height: 50,
    ...Styles.rowBetween,
    marginHorizontal: 20,
  },
  textHeader: {
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
});
export default LessonHeader;
