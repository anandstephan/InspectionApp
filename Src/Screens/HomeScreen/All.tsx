import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './Home';

const All = () => {
  return (
    <View style={{padding: '2%'}}>
      <HomeScreen nav={'all'} />
    </View>
  );
};

export default All;
