import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Styles, BoxModel, Distance, Typography} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
const WhatLearn = (props) => {
  const {theme} = useContext(ThemeContext);
  const skillComponent = () => {
    if (props.WhatLearnItem) {
      return props.WhatLearnItem.map((item) => (
        <View style={styles.link} key={item.toString()}>
          <MaterialIcons name="check" size={22} color={theme.primaryColor} />
          <Text style={[styles.linkText, {color: theme.primaryTextColor}]}>
            {item}
          </Text>
        </View>
      ));
    } else {
      <Text style={[styles.linkText, {color: theme.primaryTextColor}]}>
        (Not required)
      </Text>;
    }
  };
  const requirementComponent = () => {
    if (props.requireItem) {
      return props.requireItem.map((item) => (
        <View style={styles.link} key={item.toString()}>
          <MaterialIcons name="check" size={22} color={theme.primaryColor} />
          <Text style={[styles.linkText, {color: theme.primaryTextColor}]}>
            {item}
          </Text>
        </View>
      ));
    } else {
      <Text style={[styles.linkText, {color: theme.primaryTextColor}]}>
        (Not required)
      </Text>;
    }
  };
  return (
    <View>
      <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        What will you learn?
      </Text>
      {skillComponent()}
      <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        Requirements
      </Text>
      {requirementComponent()}
      <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        Description
      </Text>
      <Text style={[styles.description, {color: theme.primaryTextColor}]}>
        {props.description ? props.description : 'Not found'}
      </Text>
      <View style={[styles.divide, {backgroundColor: theme.DialogColor}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    ...Styles.fillRowStart,
    ...BoxModel.bottomMargin,
    alignSelf: 'flex-start',
    marginLeft: Distance.spacing_16,
  },
  linkText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    marginLeft: Distance.spacing_8,
  },
  description: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    ...BoxModel.marginHorizontal,
    ...BoxModel.bottomMargin,
  },
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  divide: {
    height: 1,
  },
});
export default WhatLearn;
