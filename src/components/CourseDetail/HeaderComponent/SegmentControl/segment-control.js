import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import colors from '../../../../config/color';
const SegmentControl = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <View style={styles.container}>
      <SegmentedControlTab
        tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
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
    borderColor: colors.whiteColor,
    borderWidth: 1,
    backgroundColor: colors.whiteColor,
  },
  activeTabStyle: {
    backgroundColor: colors.whiteColor,
    borderBottomColor: colors.mainColor,
    borderBottomWidth: 2,
  },
  tabTextStyle: {
    color: colors.blackWithOpacity,
    fontWeight: 'bold',
  },
  activeTabTextStyle: {
    color: colors.blackTitleColor,
  },
});

export default SegmentControl;
