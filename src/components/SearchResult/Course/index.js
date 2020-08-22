import React, {useContext} from 'react';
import {FlatList, View, Text} from 'react-native';
import {CourseVerticalItem} from '../../Course';
import {Styles, Size} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {SearchContext} from '../../../Provider/Search';
import * as screenName from '../../../Constants/ScreenName';
import {LocalizeContext} from '../../../Provider/Localize';
import EmptyCourse from '../../EmptyCourse';
import separator from '../../Separator';
const CourseResultTopTab = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  const {searchResultData} = useContext(SearchContext);
  const {localize} = useContext(LocalizeContext);

  const onPressItem = (item) => {
    navigation.navigate(screenName.CourseDetailScreenName, {id: item.id});
  };
  const renderItem = () => {
    if (searchResultData.listCourse.length === 0) {
      return <EmptyCourse />;
    } else {
      return (
        <FlatList
          data={searchResultData.listCourse}
          ItemSeparatorComponent={separator}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CourseVerticalItem
              onPressItem={() => onPressItem(item)}
              item={item}
            />
          )}
          keyExtractor={(item, index) => item + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(100),
            offset: Size.scaleSize(100) * index,
            index,
          })}
        />
      );
    }
  };
  return (
    <View style={[Styles.maxHeight, {backgroundColor: theme.backgroundColor}]}>
      {searchResultData.listCourse ? renderItem() : undefined}
    </View>
  );
};
export default CourseResultTopTab;
