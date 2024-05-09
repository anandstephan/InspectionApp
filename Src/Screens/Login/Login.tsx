import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, Image, Text, View} from 'react-native';
import {
  DarkTextLarge,
  MainContainer,
  ProfileContainer,
  StyledButton,
  StyledTextInput,
} from '../../StyledComponent';
import {login} from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {isLoggedIn} from '../../Redux/features/GlobalSlice';

const Login = ({}) => {
  const dispatch = useDispatch();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  // console.log("user  =>",isuserLoggedIn)
  const [focusInEmail, setFocusInEmail] = useState(false);
  const [focusInPass, setFocusInPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
    error: '',
  });

  const handleClickEmail = event => {
    // event.persist();
    const emailValue = event.nativeEvent.text;
    setEmail(emailValue);
    setError(prev => ({...prev, email: ''}));
    setError(prev => ({...prev, error: ''}));
  };

  const handleClickPass = event => {
    // event.persist();
    const passwordValue = event.nativeEvent.text;
    setPassword(passwordValue);
    setError(prev => ({...prev, password: ''}));
    setError(prev => ({...prev, error: ''}));
  };
  useEffect(() => {}, []);

  const onSubmit = async () => {
    setToggle(true);
    if (email == '') {
      setError(prev => ({...prev, email: 'Please enter your email'}));
      setToggle(false);
      return;
    }
    if (password == '') {
      setError(prev => ({...prev, password: 'Please enter your Password'}));
      setToggle(false);
      return;
    }

    const res = await login({email: email, password: password});

    if (res != null && res.data?.data?.code == 200) {
      const jsonValue = JSON.stringify(res?.data?.data?.data);
      try {
        await AsyncStorage.setItem('user', JSON.stringify(jsonValue));
        dispatch(isLoggedIn(true));
        console.log('hi');
      } catch (error) {
        console.log('error - ', error);
        setError(prev => ({
          ...prev,
          error: '**Something went wrong to save user data',
        }));
      }
    } else if (res.error != '') {
      setError(prev => ({...prev, error: '**' + res.error}));
    } else {
      setError(prev => ({...prev, error: '**' + res.data.data.message}));
    }
    setToggle(false);
  };
  return (
    <MainContainer>
      <View
        style={{
          height: 370,
          backgroundColor: '#1f51fc',
          width: width + 100,
          borderBottomLeftRadius: (width + 270) / 2,
          borderBottomRightRadius: (width + 270) / 2,
        }}></View>
      <View style={{width: '50%', position: 'absolute', marginTop: '35%'}}>
        <Image
          source={require('../../Assets/Images/unifi_white_logo_copy-removebg-preview.png')}
          style={{width: '100%', height: 150}}
        />
      </View>
      <ProfileContainer
        style={[
          {
            marginTop: '-25%',
            width: '85%',
            justifyContent: 'center',
            alignItems: 'center',
            height: height / 3,
          },
        ]}>
        <DarkTextLarge
          style={{
            marginVertical: 20,
            fontSize: 22,
            fontWeight: '600',
          }}>
          Sign In Your Account
        </DarkTextLarge>
        <StyledTextInput
          style={[{borderBottomColor: focusInEmail ? '#1f51fc' : 'grey'}]}
          placeholder="Email"
          placeholderTextColor={focusInEmail ? '#1f51fc' : 'grey'}
          onFocus={() => setFocusInEmail(true)}
          onBlur={() => setFocusInEmail(false)}
          onChange={handleClickEmail}
        />
        {error.email != '' && (
          <Text style={{fontSize: 13, color: 'red'}}>{error.email}</Text>
        )}
        <StyledTextInput
          style={[{borderBottomColor: focusInPass ? '#1f51fc' : 'grey'}]}
          placeholder="Password"
          placeholderTextColor={focusInPass ? '#1f51fc' : 'grey'}
          onFocus={() => setFocusInPass(true)}
          onBlur={() => setFocusInPass(false)}
          onChange={handleClickPass}
          secureTextEntry={true}
          autoCorrect={false}
        />
        {error.password != '' && (
          <Text style={{fontSize: 13, color: 'red'}}>{error.password}</Text>
        )}
        <StyledButton
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onSubmit}>
          {toggle ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>
              Sign In
            </Text>
          )}
        </StyledButton>
        {error.error != '' && (
          <Text style={{fontSize: 13, color: 'red'}}>{error.error}</Text>
        )}
      </ProfileContainer>
    </MainContainer>
  );
};

export default Login;
