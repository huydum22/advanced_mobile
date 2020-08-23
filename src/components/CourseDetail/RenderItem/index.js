import React, {useContext} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {Styles, BoxModel, Typography, Size, Distance} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import Moment from 'moment';

const RenderItem = ({itemLesson, collapsibleItems, onPressPreviewLesson}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Collapsible collapsed={collapsibleItems.includes(itemLesson.sectionId)}>
      <TouchableHighlight
        onPress={() => onPressPreviewLesson(itemLesson)}
        underlayColor={theme.overlayColor}
        style={BoxModel.smallMarginVertical}>
        <View style={Styles.fillRowStart}>
          <View style={[Styles.center, {width: Size.scaleSize(30)}]}>
            <Text
              style={[Typography.fontRegular, {color: theme.primaryTextColor}]}>
              {itemLesson.numberOrder}
            </Text>
          </View>
          <View
            style={[
              Styles.fillColumnStart,
              BoxModel.smallMarginHorizontal,
              {backgroundColor: theme.themeColor},
            ]}>
            <View style={[Styles.rowBetween, {marginRight: Distance.medium}]}>
              <Text
                style={[
                  Typography.fontRegular,
                  {color: theme.primaryTextColor},
                ]}>
                {itemLesson.name}
              </Text>
              {itemLesson.isPreview ? (
                <View
                  style={[
                    BoxModel.marginHorizontal,
                    BoxModel.tinyPadding,
                    {
                      borderColor: theme.primaryColor,
                      borderWidth: Size.scaleSize(1),
                    },
                  ]}>
                  <Text
                    style={[
                      Typography.fontRegular,
                      {
                        color: theme.primaryColor,
                        fontSize: Typography.fontSize14,
                      },
                    ]}>
                    Preview
                  </Text>
                </View>
              ) : undefined}
            </View>
            <Text style={[Typography.fontRegular, {color: theme.grayColor}]}>
              {' '}
              Video -{' '}
              {Moment('1900-01-01 00:00:00')
                .add(itemLesson.hours * 3600, 'seconds')
                .format('mm:ss')}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Collapsible>
  );
};
export default RenderItem;
