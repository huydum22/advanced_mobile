import React, {useEffect, useContext} from 'react';
import {View, FlatList} from 'react-native';
import {AuthenticationContext} from '../../Provider/Authentication';
import {Styles, Size} from '../../styles';
import {ThemeContext} from '../../Provider/Theme';
import * as screenName from '../../Constants/ScreenName';
import {CourseVerticalItem} from '../../components/Course';
import EmptyCourse from '../../components/EmptyCourse';
import {FavoriteContext} from '../../Provider/Favorite';
import Spinner from 'react-native-loading-spinner-overlay';

const FavoriteList = (props) => {
  const {navigation} = props;
  const {state} = useContext(AuthenticationContext);
  const {theme} = useContext(ThemeContext);
  const {favorite, favoriteProvider} = useContext(FavoriteContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      favoriteProvider(state.token);
    });

    return unsubscribe;
  }, [navigation, state.token, favoriteProvider]);
  const flatListSeparator = () => {
    return (
      <View style={[Styles.separator, {backgroundColor: theme.DialogColor}]} />
    );
  };
  const onPressItem = (item) => {
    navigation.navigate(screenName.CourseDetailScreenName, {id: item.id});
  };

  return (
    <View style={[Styles.maxHeight, {backgroundColor: theme.backgroundColor}]}>
      <Spinner
        visible={favorite.isLoading}
        textContent={'Loading...'}
        color={theme.whiteColor}
        textStyle={{color: theme.whiteColor}}
        overlayColor={theme.blackWith05OpacityColor}
      />
      {favorite.listFavorite.length === 0 ? (
        <EmptyCourse />
      ) : (
        <FlatList
          data={favorite.listFavorite}
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
      )}
    </View>
  );
};
export default FavoriteList;
