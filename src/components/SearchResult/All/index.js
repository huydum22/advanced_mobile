import React, {useContext, useState} from 'react';
import {SectionList, View, Text, SafeAreaView, Button} from 'react-native';
import {Styles, Size, Typography, BoxModel} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {SearchContext} from '../../../Provider/Search';
import SeeAllBtn from '../../common/see-all-button';
import {
  SearchCourseScreenName,
  SearchAuthorScreenName,
  AuthorDetailScreenName,
  CourseDetailScreenName,
} from '../../../Constants/ScreenName';
import {CourseVerticalItem} from '../../Course';
import {AuthorVerticalItem} from '../../Author';
import separator from '../../Separator';
import {LocalizeContext} from '../../../Provider/Localize';
import EmptyCourse from '../../EmptyCourse';
import PaginationDot from 'react-native-animated-pagination-dot';

const AllResultTopTab = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation} = props;
  const {searchResultData, page, setPage} = useContext(SearchContext);
  const {localize} = useContext(LocalizeContext);

  const {
    searchTry,
    searchErr,
    searchCourse,
    searchAuthor,
    searchResult,
  } = localize;

  const onPressAuthor = (item) => {
    navigation.navigate(AuthorDetailScreenName, {
      id: item.id,
    });
  };
  const onPressItem = (item) => {
    navigation.navigate(CourseDetailScreenName, {id: item.id});
  };
  const showAll = (e) => {
    if (e === searchCourse) {
      navigation.jumpTo(SearchCourseScreenName);
    }
    if (e === searchAuthor) {
      navigation.jumpTo(SearchAuthorScreenName);
    }
  };
  const renderResultNumber = (title) => {
    if (title === searchCourse) {
      return `${searchResultData.totalCourse} ${searchResult}`;
    } else {
      return `${searchResultData.totalAuthor} ${searchResult}`;
    }
  };
  const renderHeader = (title) => {
    return (
      <View
        style={[
          Styles.rowBetween,
          {
            height: Size.scaleSize(40),
            backgroundColor: theme.backgroundSeeAllButton,
          },
        ]}>
        <Text
          style={[
            Styles.titleRow,
            Typography.fontBold,
            {color: theme.primaryTextColor},
          ]}>
          {title}
        </Text>
        <SeeAllBtn
          title={renderResultNumber(title)}
          onPress={() => showAll(title)}
        />
      </View>
    );
  };
  const renderListItem = (item) => {
    if (searchResultData.listCourse) {
      if (searchResultData.listCourse.includes(item)) {
        return <CourseVerticalItem onPressItem={onPressItem} item={item} />;
      }
    }
    if (searchResultData.listAuthor) {
      if (searchResultData.listAuthor.includes(item)) {
        return <AuthorVerticalItem onPressItem={onPressAuthor} item={item} />;
      }
    }
  };
  const renderResult = () => {
    if (
      searchResultData.listAuthor.length === 0 &&
      searchResultData.listCourse.length === 0
    ) {
      return <EmptyCourse />;
    } else {
      return (
        <SafeAreaView>
          <SectionList
            ItemSeparatorComponent={separator}
            sections={[
              {title: searchCourse, data: searchResultData.listCourse},
              {
                title: searchAuthor,
                data: searchResultData.listAuthor,
              },
            ]}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => renderListItem(item)}
            renderSectionHeader={({section: {title}}) => renderHeader(title)}
            stickySectionHeadersEnabled
            showsVerticalScrollIndicator={false}
            style={[Styles.maxHeight, {backgroundColor: theme.backgroundColor}]}
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
        </SafeAreaView>
      );
    }
  };
  return (
    <View style={{backgroundColor: theme.backgroundColor}}>
      {renderResult()}
    </View>
  );
};
export default AllResultTopTab;
