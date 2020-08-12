import React from 'react';
import {View} from 'react-native';
import {ListAuthorVertical} from '../../Author';
import * as screenName from '../../../Constants/ScreenName';
import {useContext} from 'react';
import {SearchContext} from '../../../Provider/Search';
import {ThemeContext} from '../../../Provider/Theme';
import {Styles} from '../../../styles';
const AuthorResultTopTab = (props) => {
  const {navigation} = props;
  const {searchData} = useContext(SearchContext);
  const {theme} = useContext(ThemeContext);
  const onPressAuthor = (item) => {
    navigation.navigate(screenName.AuthorDetailScreenName, {
      id: item.id,
    });
  };
  return (
    <View style={[Styles.maxHeight, {backgroundColor: theme.backgroundColor}]}>
      {searchData.instructors ? (
        <ListAuthorVertical
          data={searchData.instructors.data}
          onPress={onPressAuthor}
        />
      ) : undefined}
    </View>
  );
};
export default AuthorResultTopTab;
