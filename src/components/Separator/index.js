import React, {useContext} from 'react';
import {View} from 'react-native';
import {Styles} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
const flatListSeparator = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={[
        Styles.separator,
        {backgroundColor: theme.backgroundSeeAllButton},
      ]}
    />
  );
};
export default flatListSeparator;
