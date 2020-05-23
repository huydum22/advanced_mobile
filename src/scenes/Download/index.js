import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ListCourseVertical} from '../../components/ListCourseVertical';
import {Styles, Distance, BoxModel, Typography, Colors} from '../../styles';
const ListCourse = (props) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textDownload}>Downloads</Text>
        <TouchableOpacity>
          <Text style={styles.textRemove}>Remove all</Text>
        </TouchableOpacity>
      </View>
      <ListCourseVertical navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.rowBetween,
    ...BoxModel.smallMarginHorizontal,
    height: Distance.spacing_40,
    backgroundColor: Colors.whiteColor,
  },
  textDownload: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  textRemove: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    color: Colors.primaryColor,
  },
});

export default ListCourse;
