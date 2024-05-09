import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {isLoggedIn} from '../Src/Redux/features/GlobalSlice';
import {useDispatch, useSelector} from 'react-redux';
import Login from './Screens/Login/Login';
import MainStack from './Navigation/MainStack';
import {RootState} from '@reduxjs/toolkit/query';

const Main = () => {
  const [loginTrue, setLoginTrue] = useState(true);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.global.isLoggedIn);
  console.log('🚀 ~ Main ~ isLoggedIn:', isLoggedIn);

  useEffect(() => {
    async function doesUserExist() {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue !== null) {
          const user = JSON.parse(jsonValue);
          if (user) {
            setLoginTrue(true); // User exists and has a name
            dispatch(isLoggedIn(true));
          } else {
            setLoginTrue(false); // User exists but doesn't have a name
            dispatch(isLoggedIn(false));
          }
        } else {
          setLoginTrue(false); // User doesn't exist
        }
      } catch (error) {
        console.error('Error checking user existence:', error);
        setLoginTrue(false); // Return false in case of an error
        dispatch(isLoggedIn(false));
      }
    }

    doesUserExist();
  }, []);
  return <>{isLoggedIn ? <MainStack /> : <Login />}</>;
};

export default Main;
