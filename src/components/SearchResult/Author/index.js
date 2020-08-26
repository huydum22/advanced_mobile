import React from 'react';
import {View, Button, FlatList} from 'react-native';
import separator from '../../Separator';
import * as screenName from '../../../Constants/ScreenName';
import {useContext} from 'react';
import {SearchContext} from '../../../Provider/Search';
import {ThemeContext} from '../../../Provider/Theme';
import {Styles, Size, BoxModel} from '../../../styles';
import {AuthorVerticalItem} from '../../Author';
import {LocalizeContext} from '../../../Provider/Localize';
import EmptyCourse from '../../EmptyCourse';
import PaginationDot from 'react-native-animated-pagination-dot';

const AuthorResultTopTab = (props) => {
  const {navigation} = props;
  const {searchResultData, page, setPage} = useContext(SearchContext);
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
          ListFooterComponent={() => {
            return (
              <View style={[Styles.fillRowBetween, BoxModel.marginVertical]}>
                <Button
                  title="Prev"
                  onPress={() => {
                    setPage(page - 1);
                  }}
                />

                <PaginationDot
                  activeDotColor={theme.primaryColor}
                  containerWidth={90}
                  curPage={page}
                  maxPage={20}
                />

                <Button
                  title="Next"
                  onPress={() => {
                    setPage(page + 1);
                  }}
                />
              </View>
            );
          }}
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
