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
  const fetchInstructorDetail = async () => {
    try {
      let response = await instructorDetailAPI(route.params.id);
      setData(response.data.payload);
    } catch ({response}) {
      console.log(response);
    }
  };
  useEffect(() => {
    fetchInstructorDetail();
  }, []);
  console.log(data);
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
    <SafeAreaView>
      <View style={{backgroundColor: theme.primaryBackgroundColor}}>
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
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});
export default AuthorDetail;
