import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {Colors, Size} from '../../../../styles';
import Item from '../CourseItem';
import separator from '../../../Separator';
import {
  CourseDetailScreenName,
  LessonCourseScreenStack,
} from '../../../../Constants/ScreenName';
import {ThemeContext} from '../../../../Provider/Theme';
const ListCourse = (props) => {
  const {navigation, route, data} = props;
  const {theme} = useContext(ThemeContext);
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenName, {id: item.id});
  };
  return (
    <View style={{backgroundColor: theme.backgroundColor}}>
      <FlatList
        data={data}
        image
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Item onPressItem={onPressItem} item={item} />}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(100),
          offset: Size.scaleSize(100) * index,
          index,
        })}
      />
    </View>
  );
};
export default ListCourse;
