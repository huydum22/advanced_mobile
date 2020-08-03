import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonContext} from '../../../Provider/LessonCourse';
import {Styles, BoxModel, Typography, Size} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from 'react-native-reanimated';
const MoreView = (props) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const renderRow = (title, iconName) => {
    return (
      <View>
        <View
          style={[
            Styles.fillRowCenter,
            BoxModel.marginHorizontal,
            BoxModel.smallMarginVertical,
          ]}>
          <MaterialIcons
            name={iconName}
            size={Size.scaleSize(25)}
            color={theme.primaryTextColor}
          />
          <Text
            style={[
              Typography.fontRegular,
              BoxModel.smallMarginHorizontal,
              {color: theme.primaryTextColor, fontSize: Typography.fontSize14},
            ]}>
            {title}
          </Text>
        </View>
        <View style={[Styles.divide, {backgroundColor: theme.DialogColor}]} />
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: theme.themeColor}}>
      {renderRow('Download course', 'cloud-download')}
      {renderRow('About this course', 'info-outline')}
      {renderRow('Share this course', 'share')}
      {renderRow('Notes', 'library-books')}
      {renderRow('Resources', 'dns')}
      {renderRow('Add course to favorites', 'star-border')}
    </ScrollView>
  );
};
export default MoreView;
