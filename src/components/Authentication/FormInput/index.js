import React, {useContext} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Size, Styles, BoxModel, Typography} from '../../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from '../../../Provider/Theme';
const FormTextInput = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <FontAwesome name={props.icon} color={theme.primaryColor} size={20} />
      <TextInput
        selectionColor={theme.primaryColor}
        style={[
          styles.input,
          props.style,
          {borderColor: theme.grayMediumColor, color: theme.primaryColor},
        ]}
        placeholderTextColor={theme.grayMediumColor}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    ...Styles.width100,
    ...BoxModel.smallMarginHorizontal,
    ...Typography.fontRegular,
    height: Size.scaleSize(40),
    fontSize: Typography.fontSize16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    ...Styles.rowCenter,
    ...BoxModel.paddingHorizontal,
    ...BoxModel.smallMarginVertical,
  },
});
export default FormTextInput;
