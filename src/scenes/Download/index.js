import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {CourseVerticalItem} from '../../components/ListCourseVertical';
import {
  Styles,
  Distance,
  BoxModel,
  Typography,
  Colors,
  Size,
} from '../../styles';
import data from '../../ExampleData/course';
import separator from '../../components/Separator';
import {CourseDetailScreenName} from '../../config/ScreenName';

const ListCourse = (props) => {
  const {navigation, route} = props;
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenName);
  };
  const Header = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textDownload}>Downloads</Text>
        <TouchableOpacity>
          <Text style={styles.textRemove}>Remove all</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        image
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CourseVerticalItem onPressItem={onPressItem} item={item} />
        )}
        keyExtractor={(item, index) => item.id + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(100),
          offset: Size.scaleSize(100) * index,
          index,
        })}
        ListHeaderComponent={() => {
          return <Header />;
        }}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.rowBetween,
    ...BoxModel.smallPaddingHorizontal,
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
