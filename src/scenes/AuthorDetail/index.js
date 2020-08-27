import React, {useContext, useReducer, useEffect} from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {Size, Styles} from '../../styles';
import {CourseVerticalItem} from '../../components/Course';
import {Header} from '../../components/AuthorDetail';
import {getAuthorDetailAction} from '../../Actions/AuthorDetail';
import {authorDetailReducer} from '../../Reducers/AuthorDetail';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  CourseDetailScreenName,
  LessonCourseScreenStack,
} from '../../Constants/ScreenName';
import {ThemeContext} from '../../Provider/Theme';
const initialState = {
  isLoading: true,
  authorDetail: {},
  message: '',
};
const AuthorDetail = (props) => {
  console.disableYellowBox = true;

  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const [authorDetailData, dispatch] = useReducer(
    authorDetailReducer,
    initialState,
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      getAuthorDetailAction(dispatch)(route.params.id);
    });

    return unsubscribe;
  }, [route.params.id, navigation]);
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenName, {id: item.id});
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
      style={[Styles.maxHeight, {backgroundColor: theme.backgroundColor}]}>
      <FlatList
        data={authorDetailData.authorDetail.courses}
        ItemSeparatorComponent={flatListSeparator}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CourseVerticalItem onPressItem={onPressItem} item={item} />
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => {
          return <Header data={authorDetailData.authorDetail} />;
        }}
        getItemLayout={(data, index) => ({
          length: Size.scaleSize(100),
          offset: Size.scaleSize(100) * index,
          index,
        })}
      />
      <Spinner
        visible={authorDetailData.isLoading}
        textContent={'Loading...'}
        color={theme.whiteColor}
        textStyle={{color: theme.whiteColor}}
        overlayColor={theme.blackWith05OpacityColor}
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
