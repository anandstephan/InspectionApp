import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  FadeTextMedium,
  DarkTextMedium,
  DarkTextLarge,
} from '../../StyledComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {isLoggedIn} from '../../Redux/features/GlobalSlice';

const url =
  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F08%2F21%2F16%2F03%2Fhenry-cavill-2665842_960_720.jpg&tbnid=eWt1wBjIyk_fLM&vet=10CAIQxiAoAGoXChMIiMPW1M7UggMVAAAAAB0AAAAAEA8..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fphotos%2Fhenry-cavill-superman-actor-star-2665842%2F&docid=1MmtpgIum4jhyM&w=960&h=636&itg=1&q=henry%20cavill&ved=0CAIQxiAoAGoXChMIiMPW1M7UggMVAAAAAB0AAAAAEA8';
export default function AccountSection({navigation}) {
  const car_details = [
    {
      key: 'Role',
      value: 'dataHai',
    },
    {
      key: 'Name',
      value: 'dataHai',
    },
    {
      key: 'E-Mail',
      value: 'dataHai',
    },
    {
      key: 'Address',
      value: 'dataHai',
    },
    {
      key: 'Location',
      value: 'dataHai',
    },
    {
      key: 'Department',
      value: 'dataHai',
    },
  ];

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const dispatch = useDispatch();

  useEffect(() => {
    // Change the header title to "Imformation" when navigating to the Profile screen
    navigation.setOptions({headerTitle: 'Imformation'});
  }, []);

  const logoutConfirmation = () => {
    Alert.alert(
      'Logout',
      'Do you really want to Logout?',
      [{text: 'Not Now'}, {text: 'Logout', onPress: () => logout()}],
      {cancelable: false},
    );
  };

  const logout = async () => {
    try {
      let res = await AsyncStorage.removeItem('user');
      dispatch(isLoggedIn(false));
    } catch (e) {
      console.log('error in logged out', e);
    }
  };
  return (
    <View style={{}}>
      <View
        style={{
          height: 170,
          backgroundColor: '#1f51fc',
          width: width,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}></View>

      <View
        style={[
          {
            width: '90%',
            padding: 10,
            marginTop: '-7%',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'lightgrey',
            borderRadius: 10,
            marginLeft: '5%',
            backgroundColor: 'white',
            paddingTop: '20%',
          },
        ]}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABQYHBAID/8QAMhAAAgIBAgMECQMFAAAAAAAAAAECAwQFEQYhURIxQYETIjJhcaGxwdEjUpEUQmJysv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A1IAGmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHWdQjpmn2ZDSc16tcX4yfd+fID4azrmLpS7Mv1b2t41Rez834FXyOLdTsnvU6qY9Iw3+bIS62y+2dt03Oyb7UpPvbPBYiyYXGGbXJLLqrvh4uK7EvwW3Ts/G1GhXYtnaXdKL5OL6NGXHdo+o2aXmxvhu4d1kP3x6BWmg81zhbCNlclKEknFrxR6IAAAAAAAAAAAFQ48ul28Ojf1UpTa9/cvuW8pvHkGsnDs25OEo7/Br8gVYAGkAATVxoXCV0rtCoUnu63KHkny+TJkhODoOGhVtr25yl89vsTZAAAAAAAAAAAAheLMCWdpblVFytofpIpLm14r+OfkTQAyQF21nhWvJslfgTjTZJ7yrkvUb6rbu+hX7eGtXrlt/S9tdYWRa+paREn0x6bMi+FNMO3ZOXZjHqyWx+F9VtklOqFK/dZNfRbstWiaDj6UvSdr0uQ1s7Gtuz7kvACQwcaOHh040HvGqCjv1959wCAAAAAAAAAAAA+xwatquNpdHpL5bzl7Fcfak/x7yi6prebqUmrLPR0+FMHy8+vmBdsvX9MxG4zyozmv7al238uRHS4ywU9oY2TJdWor7lI5dAUq9VcY6fJpTqya/e4pr5MlcLVMHO5YuTXOX7N9pfw+ZmAXJprk13PoIla2Ch6NxPk4co1ZrlkUd279uK+Pj5l3xsinKojfj2KyuS3UkRX1AAAAAAAAOTU8+rTcOeTdzUeUY+Mn4I6yh8Y57ytS/poP9LG5fGfi/t5MCIzsy7Pyp5GRLtTl/CXRe45wCmgAKgAABK8P6xPSsr123i2PayHT/Je9EUCK1mE42QjODUoyW6a7mj0VrgrUHdiWYVj3lRzh/o/Dyf1RZSAAAAAA8XWKmmy2Xswi5P4LmZTOcrZysse85tyk+rZpWuy7Gi5sl3+hl9DMygACoAAAAAAAAleF8h4+uY735WN1y+DXL57GjGWadJw1DFkvC6H/AEjU2RQAEH//2Q==',
          }}
          style={{
            width: 130,
            height: 130,
            borderRadius: 130,
            position: 'absolute',
            top: '-15%',
          }}
        />
        <DarkTextLarge style={{padding: 5}}>{'Vikas Tyagi'}</DarkTextLarge>
        <FadeTextMedium style={{fontWeight: '500'}}>
          {'Vikas Tyagi@unificars.com'}
        </FadeTextMedium>
        <View
          style={{
            width: '100%',
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            marginTop: 10,
          }}></View>
        <View
          style={[
            {
              width: '100%',
              // padding: '5%',
            },
          ]}>
          <View style={[{width: '98%'}]}>
            {car_details.map((val, i) => (
              <View
                style={[
                  {
                    width: '100%',
                    padding: 5,
                    marginLeft: '15%',
                  },
                ]}
                key={i}>
                <View style={[{width: '100%', flexDirection: 'row'}]}>
                  <FadeTextMedium style={{width: '50%', padding: 5}}>
                    {val.key}
                  </FadeTextMedium>
                  <DarkTextMedium style={{width: '50%', padding: 5}}>
                    {val.value}
                  </DarkTextMedium>
                </View>
              </View>
            ))}
          </View>
          <View
            style={{
              width: '100%',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}></View>

          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              {
                backgroundColor: '#add8e6',
                marginVertical: 5,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              },
            ]}
            onPress={() => logoutConfirmation()}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons
                name="logout"
                size={25}
                style={{color: 'blue', marginHorizontal: 10}}
              />
              {/* <Text style={[globalStyles.profileHeadingText]}>Logout</Text> */}
              <DarkTextLarge style={{color: 'blue'}}>Logout</DarkTextLarge>
            </View>
            {/* <Text style={globalStyles.profileHeadingText}><MaterialIcons name='logout' size={20} />Logout</Text> */}
            <MaterialIcons name="navigate-next" color={'blue'} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
