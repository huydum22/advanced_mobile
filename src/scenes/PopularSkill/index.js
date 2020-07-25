/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  Text,
  FlatList,
} from 'react-native';
import {CourseHorizontalItem} from '../../components/Course';
import {Distance, Styles, Typography, Size, BoxModel} from '../../styles';
import {SearchCourseByPrice} from '../../services/Search';
import SeeAllBtn from '../../components/common/see-all-button';
// import dataCourse from '../../ExampleData/course';
// import dataPath from '../../ExampleData/path';
import p from 'pretty-format';
import {
  CourseDetailScreenName,
  CourseDetailScreenStack,
  ShowListCourseScreenName,
  ShowListPathScreenName,
} from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
import {useState} from 'react';

const PopularSkill = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  const [data, setData] = useState([]);
  const showListCourse = (index, title) => {
    if (index === 0) {
      navigation.navigate(ShowListPathScreenName);
    } else {
      navigation.navigate(ShowListCourseScreenName, {
        title: title,
      });
    }
  };

  const fetchData = async () => {
    try {
      let response = await SearchCourseByPrice(route.params.item.price);
      setData(response.data.payload.rows);
    } catch ({response}) {
      console.log(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onPressCourseItem = (item) => {
    navigation.navigate(CourseDetailScreenStack, {
      screen: CourseDetailScreenName,
      params: {id: item.id},
    });
  };
  const renderHeader = (title, indexItem) => {
    return (
      <View style={styles.titleContainer}>
        <Text
          style={[
            Styles.titleRow,
            Typography.fontBold,
            {color: theme.primaryTextColor},
          ]}>
          {title}
        </Text>
        {indexItem[0] === 3 ? (
          <View />
        ) : (
          <SeeAllBtn onPress={() => showListCourse(indexItem[0], title)} />
        )}
      </View>
    );
  };
  const renderListItem = (dataCourse) => {
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data.slice(0, 7)}
        renderItem={({item}) => (
          <CourseHorizontalItem item={item} onPress={onPressCourseItem} />
        )}
        keyExtractor={(item, index) => item + index}
        getItemLayout={(dataCourse, index) => ({
          length: Size.scaleSize(200),
          offset: Size.scaleSize(200) * index,
          index,
        })}
      />
    );
  };
  return (
    <SafeAreaView>
      <SectionList
        style={{backgroundColor: theme.backgroundColor}}
        sections={[
          {title: 'New', data: [1]},
          {title: 'Trending', data: [2]},
        ]}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title, data}}) =>
          renderHeader(title, data)
        }
        ListFooterComponent={() => {
          return <View style={styles.footer} />;
        }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderListItem(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {height: Distance.spacing_20},
  titleContainer: {
    ...BoxModel.marginHorizontal,
    ...BoxModel.smallMarginVertical,
    ...Styles.rowBetween,
    height: Distance.medium,
  },
});

export default PopularSkill;
