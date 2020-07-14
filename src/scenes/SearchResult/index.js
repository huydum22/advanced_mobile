import React, {useContext, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
// import data from '../../ExampleData/course';
import {} from '../../services/Category';
import {Typography, Size} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import p from 'pretty-format';
import {CourseVerticalItem} from '../../components/Course';
import separator from '../../components/Separator';
import {SearchByKeywordAPI} from '../../services/Search';
const SearchNavigator = (props) => {
  const {navigation, route} = props;
  const [data, setData] = useState([]);
  const {theme} = useContext(ThemeContext);
  const fetchDataByKeyword = async () => {
    try {
      let response = await SearchByKeywordAPI(route.params.keyword);
      setData(response.data.payload.rows);
    } catch ({response}) {
      console.log(response);
    }
  };
  useEffect(() => {
    fetchDataByKeyword();
  }, []);
  console.log(data);
  const onPressItem = () => {};
  return (
    <FlatList
      data={data}
      image
      ItemSeparatorComponent={separator}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <CourseVerticalItem onPressItem={onPressItem} item={item} />
      )}
      keyExtractor={(item, index) => item + index}
      getItemLayout={(data, index) => ({
        length: Size.scaleSize(100),
        offset: Size.scaleSize(100) * index,
        index,
      })}
    /> // <Tab.Navigator
    //   initialRouteName={SearchAllScreenName}
    //   tabBarOptions={{
    //     activeTintColor: theme.primaryTextColor,
    //     inactiveTintColor: theme.grayDarkColor,
    //     labelStyle: {...Typography.fontBold, fontSize: Typography.fontSize14},
    //     indicatorStyle: {
    //       backgroundColor: theme.primaryColor,
    //       height: 2,
    //     },
    //     style: {
    //       backgroundColor: theme.themeColor,
    //     },
    //     pressOpacity: 1,
    //   }}
    //   animationEnabled={true}>
    //   <Tab.Screen
    //     name={SearchAllScreenName}
    //     component={SearchAll}
    //     options={{tabBarLabel: 'All'}}
    //   />
    //   <Tab.Screen
    //     name={SearchCourseScreenName}
    //     component={ListCourseVertical}
    //     options={{tabBarLabel: 'Course'}}
    //   />
    //   <Tab.Screen
    //     name={SearchPathScreenName}
    //     component={ListPathVertical}
    //     options={{tabBarLabel: 'Paths'}}
    //   />
    //   <Tab.Screen
    //     name={SearchAuthorScreenName}
    //     component={ListAuthorVertical}
    //     options={{tabBarLabel: 'Author'}}
    //   />
    // </Tab.Navigator>
  );
};
export default SearchNavigator;
