import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './Home';
import Input from './components/Input';
import {allInspection} from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setMissCount} from '../../Redux/features/GlobalSlice';

const Miss = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState('');
  let [preserveLead, setPreserveLead] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      const res = await AsyncStorage.getItem('user');
      const user = JSON.parse(res);

      const res1 = await allInspection(user.id, 'miss');

      setLeads(res1?.data?.data);
      dispatch(setMissCount(res1?.data?.data?.length));
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
<<<<<<< HEAD
      <Input setSearch={setSearch} />
      <HomeScreen leads={leads} />
=======
      <HomeScreen nav={'miss'} />
>>>>>>> refs/remotes/origin/main
    </View>
  );
};

export default Miss;
