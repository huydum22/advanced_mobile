import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Colors, Typography} from '../../../../styles';
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
    borderColor: Colors.whiteColor,
    borderWidth: 1,
    backgroundColor: Colors.whiteColor,
  },
  activeTabStyle: {
    backgroundColor: Colors.whiteColor,
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 2,
  },
  tabTextStyle: {
    color: Colors.blackWith05OpacityColor,
    ...Typography.fontBold,
  },
  activeTabTextStyle: {
    color: Colors.blackColor,
  },
});

export default SegmentControl;
