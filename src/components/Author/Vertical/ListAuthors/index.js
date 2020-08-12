import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Size, Styles, Typography, BoxModel} from '../../../../styles';
import Item from '../AuthorItem';
import {ThemeContext} from '../../../../Provider/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Authors = (props) => {
  const {theme} = useContext(ThemeContext);
  const {onPress, data} = props;

  const flatListSeparator = () => {
    return (
      <View
        style={[styles.separator, {backgroundColor: theme.backgroundColor}]}
      />
    );
  };
  return (
    <View style={{backgroundColor: theme.backgroundColor}}>
      {data.length === 0 ? (
        <View style={[Styles.columnCenter, Styles.maxHeight]}>
          <FontAwesome5 name="link" size={70} color={theme.primaryColor} />
          <Text
            style={[
              Typography.fontBold,
              BoxModel.marginVertical,
              {fontSize: Typography.fontSize20, color: theme.primaryTextColor},
            ]}>
            No Matching Courses{' '}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize18, color: theme.grayColor},
            ]}>
            Try another one
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          ItemSeparatorComponent={flatListSeparator}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Item onPressItem={onPress} item={item} />}
          keyExtractor={(item, index) => item + index}
          getItemLayout={(data, index) => ({
            length: Size.scaleSize(90),
            offset: Size.scaleSize(90) * index,
            index,
          })}
          style={{backgroundColor: theme.themeColor}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});
export default Authors;
