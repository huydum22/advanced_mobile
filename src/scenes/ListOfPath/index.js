import React from 'react';
import {SafeAreaView} from 'react-native';
import {ListPathVertical} from '../../components/Path';
const ListOfPath = (props) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <ListPathVertical navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
export default ListOfPath;
