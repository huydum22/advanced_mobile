import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import avatar from '../../../assets/image/person.png';
import {
  Styles,
  Size,
  Distance,
  Typography,
  BoxModel,
  Colors,
} from '../../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../../Provider/Theme';
const Header = (props) => {
  const {theme} = useContext(ThemeContext);
  const {name} = props;
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.image} />
      <View>
        <Text style={[styles.textName, {color: theme.primaryTextColor}]}>
          {name}
        </Text>
      </View>
      <View>
        <Text style={[styles.textJob, {color: theme.grayColor}]}>
          Software Engineer
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.buttonFollow, {backgroundColor: theme.primaryColor}]}>
        <Text style={[styles.textFollow, {color: theme.primaryTextColor}]}>
          Follow
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={[styles.textJob, {color: theme.grayColor}]}>
          Follow to be notified when new courses are published.
        </Text>
      </View>
      <View>
        <Text style={[styles.descriptionText, {color: theme.primaryTextColor}]}>
          Joe began his love of programming on an Apple III in BASIC. Although
          his preferred language is JavaScript, he has worked professionally
          with just about every major Microsoft language. He is currently a
          consultant and full time author for Pluralsight. Joe has always had a
          strong interest in education, and has worked both full and part time
          as a technical teacher for over ten years. He is a frequent blogger
          and speaker, organizer of ng-conf, the AngularJS conference (www.ng-
          conf.org), and a panelist on the JavaScript Jabber podcast
          (http://javascriptjabber.com/)
        </Text>
      </View>
      <View style={styles.link}>
        <MaterialCommunityIcons
          name="link"
          size={20}
          color={theme.primaryTextColor}
        />
        <Text style={[styles.linkText, {color: theme.primaryTextColor}]}>
          https://reactnative.dev
        </Text>
      </View>
      <View style={styles.link}>
        <MaterialCommunityIcons
          name="github-circle"
          size={20}
          style={styles.linkGit}
          color={theme.primaryTextColor}
        />
        <MaterialCommunityIcons
          name="facebook-box"
          size={20}
          color={theme.primaryTextColor}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.columnCenter,
    marginTop: Distance.spacing_16,
  },
  image: {
    width: Size.scaleSize(80),
    height: Size.scaleSize(80),
    borderRadius: Size.scaleSize(40),
  },
  textName: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
    marginTop: Distance.spacing_10,
  },
  textJob: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
    marginTop: Distance.spacing_8,
  },
  buttonFollow: {
    ...BoxModel.largePaddingHorizontal,
    ...BoxModel.tinyPaddingVertical,
    ...BoxModel.tinyBorderRadius,
    marginTop: Distance.spacing_12,
  },
  textFollow: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
  },
  descriptionText: {
    ...BoxModel.smallPaddingHorizontal,
    ...BoxModel.marginVertical,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
  },
  link: {
    ...Styles.fillRowStart,
    ...BoxModel.bottomMargin,
    alignSelf: 'flex-start',
    marginLeft: Distance.spacing_16,
  },
  linkText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
    marginLeft: Distance.spacing_8,
  },
  linkGit: {
    marginRight: Distance.spacing_10,
  },
});
export default Header;
