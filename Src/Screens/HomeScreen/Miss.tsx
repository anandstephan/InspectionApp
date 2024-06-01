import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './Home';

const Miss = () => {
  return (
    <View style={{padding: '2%'}}>
      <HomeScreen nav={'miss'} />
    </View>
  );
};

export default Miss;
