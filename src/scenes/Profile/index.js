import React from 'react';
import {SafeAreaView} from 'react-native';
import {Profile} from '../../components/AccountManagement';
const Account = (props) => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <Profile navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default Account;
