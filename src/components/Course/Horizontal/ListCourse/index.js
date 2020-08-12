import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Item from '../CourseItem';
import SeeAllBtn from '../../../common/see-all-button';
import {Styles, Distance, Typography, BoxModel, Size} from '../../../../styles';
import {CourseDetailScreenName} from '../../../../Constants/ScreenName';
import {ThemeContext} from '../../../../Provider/Theme';
const SectionCourses = (props) => {
  const {navigation, data, route, onPress} = props;
  const {theme} = useContext(ThemeContext);
  const onPressItem = (item) => {
    navigation.push(CourseDetailScreenName, {id: item.id});
  };

  return (
    <View style={[Styles.fillColumn, styles.container]}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data ? data : []}
        renderItem={({item}) => (
          <Item item={item} onPress={() => onPressItem(item)} />
        )}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(200),
          offset: Size.scaleSize(200) * index,
          index,
        })}
        ListFooterComponent={() => {
          return (
            <TouchableHighlight
              style={[
                Styles.center,
                {
                  height: Size.scaleSize(200),
                  width: Size.scaleSize(150),
                },
              ]}
              onPress={onPress}
              underlayColor={theme.overlayColor}>
              <Text
                style={[
                  Typography.fontBold,
                  {
                    fontSize: Typography.fontSize25,
                    color: theme.primaryColor,
                  },
                ]}>
                See all
              </Text>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    ...BoxModel.marginHorizontal,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});
export default SectionCourses;
