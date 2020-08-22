import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Styles, BoxModel, Typography, Size} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import empty from '../../assets/image/empty.png';
import {LocalizeContext} from '../../Provider/Localize';
const EmptyCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  return (
    <View style={[Styles.columnCenter, Styles.maxHeight]}>
      <FastImage
        style={{height: Size.WIDTH / 2, width: Size.WIDTH / 2}}
        source={empty}
      />

      <Text
        style={[
          Typography.fontBold,
          BoxModel.marginVertical,
          {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
        ]}>
        {localize.searchErr}
      </Text>
      <Text
        style={[
          Typography.fontRegular,
          {fontSize: Typography.fontSize18, color: theme.grayColor},
        ]}>
        {localize.searchTry}
      </Text>
    </View>
  );
};

export default EmptyCourse;
