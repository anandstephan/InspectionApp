import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './Home';
import Input from './components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {allInspection} from '../../Api/Api';
import {useDispatch} from 'react-redux';
import {setAllCount} from '../../Redux/features/GlobalSlice';

const All = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState('');
  let [preserveLead, setPreserveLead] = useState([]);
  const disptach = useDispatch();

  useEffect(() => {
    async function getData() {
      const res = await AsyncStorage.getItem('user');
      const user = JSON.parse(res);

      const res1 = await allInspection(user.id, 'all');
      // console.log('===>res1', res1);
      setLeads(res1?.data?.data);
      setPreserveLead(res1?.data?.data);
      disptach(setAllCount(res1?.data?.data?.length));
    }
    getData();
  }, []);
  useEffect(() => {
    if (leads?.length !== 0) {
      console.log(search.length);

      const filter = leads.filter(lead =>
        lead.unc
          .toString()
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()),
      );

      setLeads(filter);
      if (search.length === 0) {
        setLeads(preserveLead);
      }
    }
  }, [search]);
  return (
    <View style={{padding: '2%'}}>
      <Input setSearch={setSearch} />
      <HomeScreen leads={leads} />
    </View>
  );
};

export default All;
