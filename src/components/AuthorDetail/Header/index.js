import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import avatar from '../../../assets/image/person.jpg';
import {
  Styles,
  Size,
  Distance,
  Typography,
  BoxModel,
  Colors,
} from '../../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = (props) => {
  const {name} = props;
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.image} />
      <View>
        <Text style={styles.textName}>{name}</Text>
      </View>
      <View>
        <Text style={styles.textJob}>Software Engineer</Text>
      </View>
      <TouchableOpacity style={styles.buttonFollow}>
        <Text style={styles.textFollow}>Follow</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.textJob}>
          Follow to be notified when new courses are published.
        </Text>
      </View>
      <View>
        <Text style={styles.descriptionText}>
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
        <MaterialCommunityIcons name="link" size={20} />
        <Text style={styles.linkText}>https://reactnative.dev</Text>
      </View>
      <View style={styles.link}>
        <MaterialCommunityIcons
          name="github-circle"
          size={20}
          style={styles.linkGit}
        />
        <MaterialCommunityIcons name="facebook-box" size={20} />
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
    color: Colors.grayDarkColor,
  },
  buttonFollow: {
    ...BoxModel.largePaddingHorizontal,
    ...BoxModel.tinyPaddingVertical,
    ...BoxModel.tinyBorderRadius,
    marginTop: Distance.spacing_12,
    backgroundColor: Colors.primaryColor,
  },
  textFollow: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    color: Colors.whiteColor,
  },
  descriptionText: {
    ...BoxModel.smallPaddingHorizontal,
    ...BoxModel.marginVertical,
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
    color: Colors.blackColor,
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
