import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors, Typography, Styles, BoxModel, Size} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
import {PrimaryButton} from '../../../Authentication';
import {LocalizeContext} from '../../../../Provider/Localize';

const Feature = (props) => {
  const {onPressLike, onPressJoin, isOwnCourse, isLike} = props;
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  const titlePrimary = () => {
    if (isOwnCourse.isUserOwnCourse) {
      return localize.detailContinue;
    } else {
      return localize.detailJohn;
    }
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.themeColor}]}>
      <View style={styles.mainContainer}>
        <PrimaryButton
          title={titlePrimary()}
          onPress={onPressJoin}
          active={true}
          icon="book"
          style={[
            styles.buttonContainer,
            {
              backgroundColor: isOwnCourse.isUserOwnCourse
                ? theme.subPrimaryColor
                : theme.primaryColor,
            },
          ]}
        />
      </View>
      <View style={styles.mainContainer}>
        <PrimaryButton
          title={isLike ? localize.detailLiked : localize.detailLike}
          onPress={onPressLike}
          active={true}
          icon="heart-o"
          style={[styles.buttonContainer, {backgroundColor: theme.alertColor}]}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    ...BoxModel.marginHorizontal,
    ...BoxModel.smallMarginVertical,
    height: Size.scaleSize(45),
    width: Size.scaleSize(150),
    borderRadius: Size.scaleSize(15),
  },
});
export default Feature;
