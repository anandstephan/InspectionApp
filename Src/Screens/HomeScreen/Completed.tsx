import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './Home';

const Completed = () => {
  return (
    <View style={{padding: '2%'}}>
      <HomeScreen nav={'completed'} />
    </View>
  );
};

export default Completed;
