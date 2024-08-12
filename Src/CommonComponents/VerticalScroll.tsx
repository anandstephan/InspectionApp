import React from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import Output from './renderComponent/Output';
import {useSelector} from 'react-redux';

const VerticalScroll = ({data, setParticularObj}) => {
  const currentTabName = useSelector(s => s.global.currentTab);
  const loadingStatusOfTab = useSelector(s => s.global.submitTabStatus);
  console.log(
    'TabName',
    currentTabName,
    loadingStatusOfTab,
    loadingStatusOfTab[currentTabName],
  );

  return data === null ? (
    <ActivityIndicator size={'large'} />
  ) : loadingStatusOfTab[currentTabName] ? (
    <ActivityIndicator size={'large'} />
  ) : (
    <View>
      {data.subfeilds.map((item, idx) => (
        <Output data={item} setParticularObj={setParticularObj} />
      ))}
    </View>
  );
};

export default VerticalScroll;
