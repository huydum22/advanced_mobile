import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {CourseVerticalItem} from '../../components/Course';
import {
  Styles,
  Distance,
  BoxModel,
  Typography,
  Colors,
  Size,
} from '../../styles';
// import data from '../../ExampleData/course';
import separator from '../../components/Separator';
import {
  CourseDetailScreenName,
  CourseDetailScreenStack,
} from '../../Constants/ScreenName';
import {FavoriteContext} from '../../Provider/Favorite';
import {ThemeContext} from '../../Provider/Theme';
const ListCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {favorite} = useContext(FavoriteContext);

  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenStack, {
      screen: CourseDetailScreenName,
      params: {id: item.id},
    });
  };
  const Header = () => {
    return (
      <View
        style={[
          styles.container,
          {backgroundColor: theme.primaryBackgroundColor},
        ]}>
        <Text style={[styles.textDownload, {color: theme.primaryTextColor}]}>
          Downloads
        </Text>
        <TouchableOpacity>
          <Text style={[styles.textRemove, {color: theme.primaryColor}]}>
            Remove all
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={[styles.safeAreaView, {backgroundColor: theme.backgroundColor}]}>
      <FlatList
        data={favorite}
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
  safeAreaView: {
    flex: 1,
  },
  container: {
    ...Styles.rowBetween,
    ...BoxModel.smallPaddingHorizontal,
    height: Distance.spacing_40,
  },
  textDownload: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize18,
  },
  textRemove: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
  },
});

export default ListCourse;
