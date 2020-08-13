import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ListCourseVertical} from '../../components/Course';
import {TOP_FAVORITE_COURSE} from '../../Constants/API';
import {API} from '../../services';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Styles, Typography, Size, BoxModel} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as screenName from '../../Constants/ScreenName';
import {CourseVerticalItem} from '../../components/Course';
const FavoriteList = (props) => {
  const {navigation} = props;
  const [data, setData] = useState([]);
  const {state} = useContext(AuthenticationContext);
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await API.get(TOP_FAVORITE_COURSE, state.token);
        if (response.isSuccess) {
          console.log(response.data.payload);
          setData(response.data.payload);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [state]);
  const flatListSeparator = () => {
    return (
      <View style={[Styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };
  const onPressItem = (item) => {
    navigation.navigate(screenName.CourseDetailScreenName, {id: item.id});
  };
  const renderItem = () => {
    if (data.length === 0) {
      return (
        <View style={[Styles.columnCenter, Styles.maxHeight]}>
          <FontAwesome5 name="link" size={70} color={theme.primaryColor} />
          <Text
            style={[
              Typography.fontBold,
              BoxModel.marginVertical,
              {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
            ]}>
            No Matching Courses{' '}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize18, color: theme.grayColor},
            ]}>
            Try another one
          </Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={data}
          ItemSeparatorComponent={flatListSeparator}
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
      {data ? renderItem() : undefined}
    </View>
  );
};
export default FavoriteList;
