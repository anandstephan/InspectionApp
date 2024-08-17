import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
<<<<<<< HEAD
import {isLoggedIn as globalLogin} from './Redux/features/GlobalSlice';
=======

>>>>>>> refs/remotes/origin/main
import {useDispatch, useSelector} from 'react-redux';
import Login from './Screens/Login/Login';
import MainStack from './Navigation/MainStack';
import {RootState} from '@reduxjs/toolkit/query';
import {isLoggedIn} from '../Src/Redux/features/GlobalSlice';

const Main = () => {
  const [loginTrue, setLoginTrue] = useState(true);
  const dispatch = useDispatch();
<<<<<<< HEAD
  const isLoggedIn = useSelector(state => state.global.isLoggedIn);
=======
  const isLoggedInUser = useSelector(state => state.global.isLoggedIn);

  // console.log('🚀 ~ Main ~ isLoggedIn:', isLoggedIn);
>>>>>>> refs/remotes/origin/main

  useEffect(() => {
    async function doesUserExist() {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue !== null) {
          const user = JSON.parse(jsonValue);
<<<<<<< HEAD
          if (user) {
            setLoginTrue(true); // User exists and has a name
            dispatch(globalLogin(true));
          } else {
            setLoginTrue(false); // User exists but doesn't have a name
            dispatch(globalLogin(false));
=======
          if (user && user.name) {
            setLoginTrue(true);
            dispatch(isLoggedIn(true));
          } else {
            setLoginTrue(false);
            dispatch(isLoggedIn(false));
>>>>>>> refs/remotes/origin/main
          }
        } else {
          setLoginTrue(false);
        }
      } catch (error) {
<<<<<<< HEAD
        console.error('Error checking user existence:', error);
        setLoginTrue(false); // Return false in case of an error
        dispatch(globalLogin(false));
=======
        console.log('🚀 ~ doesUserExist ~ error:', error);
        setLoginTrue(false);
        dispatch(isLoggedIn(false));
>>>>>>> refs/remotes/origin/main
      }
    }

    doesUserExist();
  }, []);
  return <>{isLoggedInUser ? <MainStack /> : <Login />}</>;
};

export default Main;
