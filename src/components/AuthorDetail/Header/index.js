import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Styles,
  Size,
  Distance,
  Typography,
  BoxModel,
  Colors,
} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../Provider/Theme';
import FastImage from 'react-native-fast-image';
import StarRating from 'react-native-star-rating';
import {LocalizeContext} from '../../../Provider/Localize';
const Header = (props) => {
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  const {data} = props;
  const skillComponent = () => {
    if (data.skills) {
      return data.skills.map((item) => (
        <View style={styles.link} key={item.toString()}>
          <MaterialIcons name="check" size={22} color={theme.primaryColor} />
          <Text style={[styles.linkText, {color: theme.primaryTextColor}]}>
            {item}
          </Text>
        </View>
      ));
    }
  };
  const averagePointRating = () => {
    if (data.averagePoint) {
      return data.averagePoint.toFixed(1);
    }
    return 0;
  };
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: data.avatar,
        }}
      />
      <View>
        <Text style={[styles.textName, {color: theme.primaryTextColor}]}>
          {data.name ? data.name : data.email}
        </Text>
      </View>
      <View>
        <Text style={[styles.textJob, {color: theme.primaryTextColor}]}>
          {data.major ? data.major : 'Nothing'}
        </Text>
      </View>
      <StarRating
        disabled={false}
        maxStars={5}
        starSize={Size.ratingSize}
        rating={data.averagePoint}
        fullStarColor={'#f1c40f'}
      />
      <View style={[Styles.fillRowCenter, BoxModel.smallMarginVertical]}>
        <View
          style={[
            Styles.fillColumn,
            styles.separator,
            {borderRightColor: theme.grayColor},
          ]}>
          <Text style={[Styles.textCenter, {color: theme.primaryTextColor}]}>
            {data.soldNumber}
          </Text>
          <Text style={[Styles.textCenter, {color: theme.primaryTextColor}]}>
            {localize.student}
          </Text>
        </View>

        <View
          style={[
            Styles.fillColumn,
            styles.separator,
            {borderRightColor: theme.grayColor},
          ]}>
          <Text style={[Styles.textCenter, {color: theme.primaryTextColor}]}>
            {data.totalCourse}
          </Text>
          <Text style={[Styles.textCenter, {color: theme.primaryTextColor}]}>
            {localize.searchCourse}
          </Text>
        </View>
        <View style={Styles.fillColumn}>
          <Text style={[Styles.textCenter, {color: theme.primaryTextColor}]}>
            {averagePointRating()}/5
          </Text>
          <Text style={[Styles.textCenter, {color: theme.primaryTextColor}]}>
            {localize.rating}
          </Text>
        </View>
      </View>
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        {localize.intro}
      </Text>
      <View>
        <Text style={[styles.descriptionText, {color: theme.primaryTextColor}]}>
          {data.intro ? data.intro : 'Nothing to update'}
        </Text>
      </View>
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        {localize.skill}
      </Text>
      {skillComponent()}
      <Text style={[styles.title, {color: theme.primaryTextColor}]}>
        {localize.taughtBy} {data.name || data.email}
      </Text>
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
    fontSize: Typography.fontSize16,
    marginLeft: Distance.spacing_8,
  },
  linkGit: {
    marginRight: Distance.spacing_10,
  },
  separator: {
    borderRightWidth: 1,
  },
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
    alignSelf: 'flex-start',
  },
});
export default Header;
