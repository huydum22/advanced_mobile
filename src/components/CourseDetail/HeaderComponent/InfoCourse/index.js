import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Size, Typography, Styles, BoxModel} from '../../../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';

import {ThemeContext} from '../../../../Provider/Theme';
import Moment from 'moment';

const InfoCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View>
      <View style={styles.container}>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme.grayColor},
          ]}>
          <FontAwesome
            name="file-video-o"
            size={Size.scaleSize(16)}
            color={theme.grayColor}
          />
          <Text style={[styles.text, {color: theme.grayColor}]}>
            {props.videoNumber} Videos
          </Text>
        </View>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme.grayColor},
          ]}>
          <MaterialIcons
            name="play-arrow"
            size={Size.scaleSize(16)}
            color={theme.grayColor}
          />
          <Text style={[styles.text, {color: theme.grayColor}]}>
            {props.totalHour} hours
          </Text>
        </View>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme.grayColor},
          ]}>
          <StarRating
            disabled={false}
            maxStars={5}
            starSize={13}
            rating={props.rate}
            fullStarColor={'#f1c40f'}
            containerStyle={styles.rating}
          />
          <Text style={[styles.text, {color: theme.grayColor}]}>
            ({props.totalRate})
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme.grayColor},
          ]}>
          <MaterialIcons
            name="person-pin"
            size={Size.scaleSize(16)}
            color={theme.grayColor}
          />
          <Text style={[styles.text, {color: theme.grayColor}]}>
            {props.soldNumber} Enrolled
          </Text>
        </View>
        <View
          style={[
            Styles.rowCross,
            styles.infoContainer,
            {borderColor: theme.grayColor},
          ]}>
          <MaterialIcons
            name="update"
            size={Size.scaleSize(16)}
            color={theme.grayColor}
          />
          <Text style={[styles.text, {color: theme.grayColor}]}>
            Updated {Moment(props.updatedAt).format('MMM DD, yyyy')}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  text: {
    marginLeft: 5,
    fontSize: Typography.fontSize16,
    ...Typography.fontRegular,
  },
  infoContainer: {
    borderWidth: 1,
    ...BoxModel.tinyPadding,
    ...BoxModel.tinyMarginHorizontal,
    borderRadius: Size.scaleSize(12),
  },
  rating: {
    marginLeft: 5,
  },
});
export default InfoCourse;
