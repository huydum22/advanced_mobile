import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {Size} from '../../styles';
import {CourseVerticalItem} from '../../components/Course';
import {Header} from '../../components/AuthorDetail';
import {instructorDetailAPI} from '../../services/Instructor';
import {
  CourseDetailScreenName,
  CourseDetailScreenStack,
} from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
const AuthorDetail = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const [data, setData] = useState({});
  const [authorID, setAuthorID] = useState(route.params.id);
  console.log(route);
  useEffect(() => {
    const fetchInstructorDetail = async () => {
      try {
        let response = await instructorDetailAPI(authorID);
        setData(response.data.payload);
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchInstructorDetail();
  }, [authorID]);
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenStack, {
      screen: CourseDetailScreenName,
      params: {id: item.id},
    });
  };
  const flatListSeparator = () => {
    return (
      <View
        style={[styles.separator, {backgroundColor: theme.backgroundColor}]}
      />
    );
  };
  return (
    <SafeAreaView
      style={{backgroundColor: theme.backgroundColor, height: '100%'}}>
      <FlatList
        data={data.courses}
        ItemSeparatorComponent={flatListSeparator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CourseVerticalItem onPressItem={onPressItem} item={item} />
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => {
          return <Header data={data} />;
        }}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(100),
          offset: Size.scaleSize(100) * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});
export default AuthorDetail;
