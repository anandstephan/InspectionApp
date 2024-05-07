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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {isLoggedIn} from '../../redux/features/GlobalSlice';
import {getUserProfileDetails} from '../services/Api';

const url =
  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F08%2F21%2F16%2F03%2Fhenry-cavill-2665842_960_720.jpg&tbnid=eWt1wBjIyk_fLM&vet=10CAIQxiAoAGoXChMIiMPW1M7UggMVAAAAAB0AAAAAEA8..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fphotos%2Fhenry-cavill-superman-actor-star-2665842%2F&docid=1MmtpgIum4jhyM&w=960&h=636&itg=1&q=henry%20cavill&ved=0CAIQxiAoAGoXChMIiMPW1M7UggMVAAAAAB0AAAAAEA8';
export default function AccountSection() {
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

  return (
    <View>
      <View
        style={{
          height: 170,
          backgroundColor: 'blue',
          width: width + 100,
          borderBottomLeftRadius: (width + 150) / 2,
          borderBottomRightRadius: (width + 150) / 2,
        }}></View>

      <View style={[{width: '80%', padding: 10, marginTop: -85}]}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABQYHBAID/8QAMhAAAgIBAgMECQMFAAAAAAAAAAECAwQFEQYhURIxQYETIjJhcaGxwdEjUpEUQmJysv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A1IAGmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHWdQjpmn2ZDSc16tcX4yfd+fID4azrmLpS7Mv1b2t41Rez834FXyOLdTsnvU6qY9Iw3+bIS62y+2dt03Oyb7UpPvbPBYiyYXGGbXJLLqrvh4uK7EvwW3Ts/G1GhXYtnaXdKL5OL6NGXHdo+o2aXmxvhu4d1kP3x6BWmg81zhbCNlclKEknFrxR6IAAAAAAAAAAAFQ48ul28Ojf1UpTa9/cvuW8pvHkGsnDs25OEo7/Br8gVYAGkAATVxoXCV0rtCoUnu63KHkny+TJkhODoOGhVtr25yl89vsTZAAAAAAAAAAAAheLMCWdpblVFytofpIpLm14r+OfkTQAyQF21nhWvJslfgTjTZJ7yrkvUb6rbu+hX7eGtXrlt/S9tdYWRa+paREn0x6bMi+FNMO3ZOXZjHqyWx+F9VtklOqFK/dZNfRbstWiaDj6UvSdr0uQ1s7Gtuz7kvACQwcaOHh040HvGqCjv1959wCAAAAAAAAAAAA+xwatquNpdHpL5bzl7Fcfak/x7yi6prebqUmrLPR0+FMHy8+vmBdsvX9MxG4zyozmv7al238uRHS4ywU9oY2TJdWor7lI5dAUq9VcY6fJpTqya/e4pr5MlcLVMHO5YuTXOX7N9pfw+ZmAXJprk13PoIla2Ch6NxPk4co1ZrlkUd279uK+Pj5l3xsinKojfj2KyuS3UkRX1AAAAAAAAOTU8+rTcOeTdzUeUY+Mn4I6yh8Y57ytS/poP9LG5fGfi/t5MCIzsy7Pyp5GRLtTl/CXRe45wCmgAKgAABK8P6xPSsr123i2PayHT/Je9EUCK1mE42QjODUoyW6a7mj0VrgrUHdiWYVj3lRzh/o/Dyf1RZSAAAAAA8XWKmmy2Xswi5P4LmZTOcrZysse85tyk+rZpWuy7Gi5sl3+hl9DMygACoAAAAAAAAleF8h4+uY735WN1y+DXL57GjGWadJw1DFkvC6H/AEjU2RQAEH//2Q==',
          }}
          style={{width: 130, height: 130, borderRadius: 130}}
        />
        <Text>Name</Text>
        <Text>Email</Text>
      </View>
      <View
        style={{
          width: '98%',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
        }}></View>
      <View style={[{width: '100%', padding: 2}]}>
        <View style={[{width: '98%'}]}>
          {car_details.map((val, i) => (
            <View style={[{width: '100%', padding: 5}]} key={i}>
              <View style={[{width: '100%'}]}>
                {/* <FadeTextMedium style={{width: '50%', padding: 5}}>
                  {val.key}
                </FadeTextMedium>
                <DarkTextMedium style={{width: '50%', padding: 5}}>
                  {val.value}
                </DarkTextMedium> */}
              </View>
            </View>
          ))}
        </View>
        <View
          style={{
            width: '98%',
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
          }}></View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            {
              backgroundColor: 'blue',
              marginVertical: 5,
              borderRadius: 10,
            },
          ]}
          onPress={() => logoutConfirmation()}>
          <View>
            <MaterialIcons
              name="logout"
              size={25}
              style={{color: 'blue', marginHorizontal: 10}}
            />
            {/* <Text style={[globalStyles.profileHeadingText]}>Logout</Text> */}
            {/* <DarkTextLarge style={{color: 'blue'}}>Logout</DarkTextLarge> */}
            <Text>Logout</Text>
          </View>
          {/* <Text style={globalStyles.profileHeadingText}><MaterialIcons name='logout' size={20} />Logout</Text> */}
          <MaterialIcons name="navigate-next" color={'blue'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
