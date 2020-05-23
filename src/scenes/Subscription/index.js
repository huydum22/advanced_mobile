import React from 'react';
import {SafeAreaView} from 'react-native';
import SubView from '../../components/Subscription';
const Subscription = (props) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <SubView navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
export default Subscription;
