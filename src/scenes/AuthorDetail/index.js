import React from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {Colors} from '../../styles';
import data from '../../ExampleData/course';
import {CourseVerticalItem} from '../../components/ListCourseVertical';
import {Header} from '../../components/AuthorDetail';
const AuthorDetail = (props) => {
  const {navigation, route} = props;
  const flatListSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={data}
          ItemSeparatorComponent={flatListSeparator}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CourseVerticalItem
              navigation={navigation}
              route={route}
              name={item.name}
              author={item.author}
              level={item.level}
              timeToStart={item.timeToStart}
              totalHour={item.totalHour}
              totalRate={item.totalRate}
              rate={item.rate}
              image={item.image}
            />
          )}
          keyExtractor={(item, index) => item + index}
          ListHeaderComponent={() => {
            return <Header name={route.params.name} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.backgroundColor,
  },
});
export default AuthorDetail;
