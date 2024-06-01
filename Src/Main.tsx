import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import Login from './Screens/Login/Login';
import MainStack from './Navigation/MainStack';
import {RootState} from '@reduxjs/toolkit/query';
import {isLoggedIn} from '../Src/Redux/features/GlobalSlice';

const Main = () => {
  const [loginTrue, setLoginTrue] = useState(true);
  const dispatch = useDispatch();
  const isLoggedInUser = useSelector(state => state.global.isLoggedIn);

  // console.log('🚀 ~ Main ~ isLoggedIn:', isLoggedIn);

  useEffect(() => {
    async function doesUserExist() {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue !== null) {
          const user = JSON.parse(jsonValue);
          if (user && user.name) {
            setLoginTrue(true);
            dispatch(isLoggedIn(true));
          } else {
            setLoginTrue(false);
            dispatch(isLoggedIn(false));
          }
        } else {
          setLoginTrue(false);
        }
      } catch (error) {
        console.log('🚀 ~ doesUserExist ~ error:', error);
        setLoginTrue(false);
        dispatch(isLoggedIn(false));
      }
    }

    doesUserExist();
  }, []);
  return <>{isLoggedInUser ? <MainStack /> : <Login />}</>;
};

export default Main;
