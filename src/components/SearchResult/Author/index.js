import React from 'react';
import {View, Text, FlatList} from 'react-native';
import separator from '../../Separator';
import * as screenName from '../../../Constants/ScreenName';
import {useContext} from 'react';
import {SearchContext} from '../../../Provider/Search';
import {ThemeContext} from '../../../Provider/Theme';
import {Styles, Size} from '../../../styles';
import {AuthorVerticalItem} from '../../Author';
import {LocalizeContext} from '../../../Provider/Localize';
import EmptyCourse from '../../EmptyCourse';

const AuthorResultTopTab = (props) => {
  const {navigation} = props;
  const {searchResultData} = useContext(SearchContext);
  const {theme} = useContext(ThemeContext);
  const {localize} = useContext(LocalizeContext);
  const onPressAuthor = (item) => {
    navigation.navigate(screenName.AuthorDetailScreenName, {
      id: item.id,
    });
  };

  const renderItem = () => {
    if (searchResultData.listAuthor.length === 0) {
      return <EmptyCourse />;
    } else {
      return (
        <FlatList
          data={searchResultData.listAuthor}
          ItemSeparatorComponent={separator}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <AuthorVerticalItem
              onPressItem={() => onPressAuthor(item)}
              item={item}
            />
          )}
          keyExtractor={(item, index) => item + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(90),
            offset: Size.scaleSize(90) * index,
            index,
          })}
        />
      );
    }
  };

  return (
    <View style={[Styles.maxHeight, {backgroundColor: theme.backgroundColor}]}>
      {searchResultData.listAuthor ? renderItem() : undefined}
    </View>
  );
};
export default AuthorResultTopTab;
