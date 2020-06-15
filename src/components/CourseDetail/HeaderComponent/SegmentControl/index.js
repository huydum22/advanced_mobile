import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Typography} from '../../../../styles';
import {ThemeContext} from '../../../../Provider/Theme';
const SegmentControl = (props) => {
  const {theme} = useContext(ThemeContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <View style={styles.container}>
      <SegmentedControlTab
        tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={[
          styles.tabStyle,
          {
            borderColor: theme.themeColor,
            backgroundColor: theme.themeColor,
          },
        ]}
        activeTabStyle={[
          styles.activeTabStyle,
          {
            backgroundColor: theme.themeColor,
            borderBottomColor: theme.primaryColor,
          },
        ]}
        tabTextStyle={{
          color: theme.blackSubTextColor,
          ...Typography.fontBold,
        }}
        activeTabTextStyle={{color: theme.primaryTextColor}}
        borderRadius={0}
        values={['Contents', 'Transcript']}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  tabsContainerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
  },
  tabStyle: {
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  activeTabStyle: {
    borderBottomWidth: 2,
  },
});

export default SegmentControl;
