import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FadeTextSmall,
  DarkTextMedium,
  DarkTextSmall,
  FadeTextMedium,
} from '../../StyledComponent';

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {allInspection} from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [1, 2, 3];
const loading = false;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function HomeScreen({nav}: any) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState([]);
  const [callLoading, setCallLoading] = useState(false);

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('user');
    const user_data = jsonValue != null ? JSON.parse(jsonValue) : null;
    try {
      // setLoading(true);
      const response = await allInspection({
        id: user_data.id,
        status: nav === undefined ? 'today' : nav,
      });
      // console.log(response)
      if (response.data.data.code != undefined && response.data.data.code) {
        setData(response.data.data.data);
      } else {
        // Handle error case
      }
    } catch (error) {
      console.log('error ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {!data.length > 0 ? (
        <></>
      ) : (
        <ScrollView style={{}}>
          {data.map((item, id) => {
            console.log('🚀 ~ {data.map ~ item:', item);
            return (
              <Pressable
                onPress={item => {
                  navigation.navigate('ImformationTabNavigator');
                }}
                style={{
                  width: '100%',
                  padding: '2%',
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 10,
                  marginTop: 10,
                }}>
                <View style={[globalStyles.rowContainer]}>
                  <View
                    style={[{width: '45%', backgroundColor: 'transparent'}]}>
                    <FadeTextSmall style={[{padding: 5}]}>
                      {'2024-05-04'}
                    </FadeTextSmall>
                    <View
                      style={[
                        // style={[globalStyles.rowContainer]}
                        {width: '100%', backgroundColor: 'transparent'},
                        globalStyles.rowContainer,
                        globalStyles.flexBox,
                      ]}>
                      <Image
                        source={{
                          uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABQYHBAID/8QAMhAAAgIBAgMECQMFAAAAAAAAAAECAwQFEQYhURIxQYETIjJhcaGxwdEjUpEUQmJysv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A1IAGmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHWdQjpmn2ZDSc16tcX4yfd+fID4azrmLpS7Mv1b2t41Rez834FXyOLdTsnvU6qY9Iw3+bIS62y+2dt03Oyb7UpPvbPBYiyYXGGbXJLLqrvh4uK7EvwW3Ts/G1GhXYtnaXdKL5OL6NGXHdo+o2aXmxvhu4d1kP3x6BWmg81zhbCNlclKEknFrxR6IAAAAAAAAAAAFQ48ul28Ojf1UpTa9/cvuW8pvHkGsnDs25OEo7/Br8gVYAGkAATVxoXCV0rtCoUnu63KHkny+TJkhODoOGhVtr25yl89vsTZAAAAAAAAAAAAheLMCWdpblVFytofpIpLm14r+OfkTQAyQF21nhWvJslfgTjTZJ7yrkvUb6rbu+hX7eGtXrlt/S9tdYWRa+paREn0x6bMi+FNMO3ZOXZjHqyWx+F9VtklOqFK/dZNfRbstWiaDj6UvSdr0uQ1s7Gtuz7kvACQwcaOHh040HvGqCjv1959wCAAAAAAAAAAAA+xwatquNpdHpL5bzl7Fcfak/x7yi6prebqUmrLPR0+FMHy8+vmBdsvX9MxG4zyozmv7al238uRHS4ywU9oY2TJdWor7lI5dAUq9VcY6fJpTqya/e4pr5MlcLVMHO5YuTXOX7N9pfw+ZmAXJprk13PoIla2Ch6NxPk4co1ZrlkUd279uK+Pj5l3xsinKojfj2KyuS3UkRX1AAAAAAAAOTU8+rTcOeTdzUeUY+Mn4I6yh8Y57ytS/poP9LG5fGfi/t5MCIzsy7Pyp5GRLtTl/CXRe45wCmgAKgAABK8P6xPSsr123i2PayHT/Je9EUCK1mE42QjODUoyW6a7mj0VrgrUHdiWYVj3lRzh/o/Dyf1RZSAAAAAA8XWKmmy2Xswi5P4LmZTOcrZysse85tyk+rZpWuy7Gi5sl3+hl9DMygACoAAAAAAAAleF8h4+uY735WN1y+DXL57GjGWadJw1DFkvC6H/AEjU2RQAEH//2Q==',
                        }}
                        style={{
                          width: (width - 10) / 2 / 5,
                          height: height / 25,
                          borderRadius:
                            ((width - 10) / 2 / 5 + height / 25) / 2,
                        }}
                      />
                      <View style={[{width: '70%', padding: 10}]}>
                        <DarkTextMedium>{'test'}</DarkTextMedium>
                        <FadeTextMedium>Customer</FadeTextMedium>
                      </View>
                    </View>
                    <View
                      style={[
                        {
                          width: '100%',
                          backgroundColor: 'transparent',
                          flex: 1,
                        },
                        globalStyles.flexBox,
                      ]}>
                      <View
                        style={[
                          {
                            width: '100%',
                            backgroundColor: 'transparent',
                            padding: 5,
                          },
                          globalStyles.rowContainer,
                          globalStyles.flexBoxAlign,
                        ]}>
                        <DarkTextSmall style={{padding: 5, width: '50%'}}>
                          Status ?
                        </DarkTextSmall>
                        <View
                          style={[
                            {
                              width: '50%',
                              backgroundColor: 'transparent',
                              justifyContent: 'space-around',
                              borderWidth: 1,
                              borderColor:
                                item.status == 1 ? 'green' : '#d9a107',
                              padding: 2,
                              borderRadius: 10,
                            },
                            globalStyles.rowContainer,
                            globalStyles.flexBoxAlign,
                          ]}>
                          <MaterialCommunityIcons
                            name={
                              item.status == 1 ? 'check-circle' : 'alert-circle'
                            }
                            size={10}
                            color={item.status == 1 ? 'green' : '#d9a107'}
                          />
                          <DarkTextSmall
                            style={{
                              color: item.status == 1 ? 'green' : '#d9a107',
                            }}>
                            {item.status == 1 ? 'Completed' : 'Pending'}
                          </DarkTextSmall>
                        </View>
                      </View>
                      <View
                        style={[
                          {
                            width: '100%',
                            backgroundColor: 'transparent',
                            padding: 5,
                          },
                          globalStyles.rowContainer,
                          globalStyles.flexBoxAlign,
                        ]}>
                        <DarkTextSmall style={{padding: 5, width: '50%'}}>
                          Report Status ?
                        </DarkTextSmall>
                        <View
                          style={[
                            {
                              width: '50%',
                              backgroundColor: 'transparent',
                              justifyContent: 'space-around',
                              borderWidth: 1,
                              borderColor:
                                item.approvstatus == 1 ? 'green' : '#d9a107',
                              padding: 2,
                              borderRadius: 10,
                            },
                            globalStyles.rowContainer,
                            globalStyles.flexBoxAlign,
                          ]}>
                          <MaterialCommunityIcons
                            name={
                              item.approvstatus == 1
                                ? 'check-circle'
                                : 'alert-circle'
                            }
                            size={10}
                            color={item.approvstatus == 1 ? 'green' : '#d9a107'}
                          />
                          <DarkTextSmall
                            style={{
                              color:
                                item.approvstatus == 1 ? 'green' : '#d9a107',
                            }}>
                            {item.approvstatus == 1 ? 'Approved' : 'No Action'}
                          </DarkTextSmall>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View
                    style={[{width: '45%', backgroundColor: 'transparent'}]}>
                    <DarkTextSmall style={[{padding: 5}]}>
                      Inspection Report
                    </DarkTextSmall>
                    <View
                      style={[
                        {width: '100%', backgroundColor: 'transparent'},
                        globalStyles.rowContainer,
                        globalStyles.flexBox,
                      ]}>
                      <View
                        style={[
                          {width: '100%', backgroundColor: 'transparent'},
                          globalStyles.rowContainer,
                        ]}>
                        <FadeTextMedium style={{width: '50%', padding: 5}}>
                          color
                        </FadeTextMedium>
                        <DarkTextMedium style={{width: '50%', padding: 5}}>
                          {' '}
                          {item.color}
                        </DarkTextMedium>
                      </View>
                    </View>
                    <View
                      style={[
                        {width: '100%', backgroundColor: 'transparent'},
                        globalStyles.rowContainer,
                        globalStyles.flexBox,
                      ]}>
                      <View
                        style={[
                          {width: '100%', backgroundColor: 'transparent'},
                          globalStyles.rowContainer,
                        ]}>
                        <FadeTextMedium style={{width: '50%', padding: 5}}>
                          Address
                        </FadeTextMedium>
                        <DarkTextMedium style={{width: '50%', padding: 5}}>
                          {item?.address}
                        </DarkTextMedium>
                      </View>
                    </View>
                    <View
                      style={[
                        {width: '100%', backgroundColor: 'transparent'},
                        globalStyles.rowContainer,
                        globalStyles.flexBox,
                      ]}>
                      <View
                        style={[
                          {width: '100%', backgroundColor: 'transparent'},
                          globalStyles.rowContainer,
                        ]}>
                        <FadeTextMedium style={{width: '50%', padding: 5}}>
                          UNC
                        </FadeTextMedium>
                        <DarkTextMedium style={{width: '50%', padding: 5}}>
                          {item?.unc}
                        </DarkTextMedium>
                      </View>
                    </View>
                    <View
                      style={[
                        {width: '100%', backgroundColor: 'transparent'},
                        globalStyles.rowContainer,
                        globalStyles.flexBox,
                      ]}>
                      <View
                        style={[
                          {width: '100%', backgroundColor: 'transparent'},
                          globalStyles.rowContainer,
                        ]}>
                        <FadeTextMedium style={{width: '50%', padding: 5}}>
                          brand
                        </FadeTextMedium>
                        <DarkTextMedium style={{width: '50%', padding: 5}}>
                          {item?.brand}
                        </DarkTextMedium>
                      </View>
                    </View>
                    <View
                      style={[
                        {width: '100%', backgroundColor: 'transparent'},
                        globalStyles.rowContainer,
                        globalStyles.flexBox,
                      ]}>
                      <View
                        style={[
                          {width: '100%', backgroundColor: 'transparent'},
                          globalStyles.rowContainer,
                        ]}>
                        <FadeTextMedium style={{width: '50%', padding: 5}}>
                          model
                        </FadeTextMedium>
                        <DarkTextMedium style={{width: '50%', padding: 5}}>
                          {item?.model}
                        </DarkTextMedium>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[{paddingTop: 10}]}>
                  <TouchableOpacity
                    style={[
                      {
                        width: '100%',
                        height: 30,
                        backgroundColor: 'blue',
                        borderRadius: 10,
                      },
                      globalStyles.flexBox,
                    ]}
                    // onPress={() =>
                    //   openPhoneDialer(
                    //     item.item.custmer_mobile,
                    //     item.item.id,
                    //   )
                    // } // Pass the index here
                  >
                    {loading ? ( // Check loading state for the specific item
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <ActivityIndicator size="large" color={'white'} />
                      </View>
                    ) : (
                      <MaterialIcons name={'call'} size={20} color={'white'} />
                    )}
                  </TouchableOpacity>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  NoReasultFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListEmptyStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  FlatListStyle: {
    width: width / 1.05,
  },

  ListEmptyComponentStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  FadeTextSmallStyle: {
    padding: 5,
  },
  CustomerContainer: {
    padding: 10,
    width: '70%',
  },
  StatusContainer: {
    flex: 1,
    width: '100%',
  },
});

export const globalStyles = StyleSheet.create({
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  flexBoxAlign: {
    // flex:1,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'cyan'
  },
  flexBoxJustify: {
    // flex:1,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  childDetailContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    borderRadius: 10,
  },
  container: {
    width: '100%',
    borderColor: '#ccc',
    // margin: 10,
    // marginTop: -5,
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
  },

  mainContainer: {
    // flex:1,
    display: 'flex',
    // elevation:19,
    // padding:10,
    width: '100%',

    // height: '100%',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  block: {
    width: 'auto',
    backgroundColor: 'green',
  },
  scrollViewContainer: {
    width: '100%',
    padding: 10,
    paddingBottom: 100,
    // backgroundColor:'green'
  },
  contentContainer: {
    backgroundColor: '#FFF',
    width: '100%',
    //  height:300,
    marginVertical: 10,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: 'lightgrey',

    shadowColor: '#000', // Shadow color
    shadshowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity (0 to 1)
    shadowRadius: 4, //
  },
  shadow: {
    shadowColor: '#000', // Shadow color
    shadshowOffset: {width: 0, height: -20}, // Shadow offset
    shadowOpacity: 0.4, // Shadow opacity (0 to 1)
    shadowRadius: 8, //
  },

  profileHeadings: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width:width-50,
    width: '100%',
    paddingHorizontal: 10,
    padding: 10,
    // borderBottomWidth: 0.5,
    // backgroundColor:'blue',
  },
  profileHeadingText: {
    textAlignVertical: 'center',
    marginLeft: 0,
    color: '#6D6D6D',
    // width:DeviceInfo.isTablet()?Dimensions.get('screen').width/2.4: Dimensions.get('screen').width/2.8,
    fontFamily: 'Baskervville-Regular',
    fontSize: 16,
    // backgroundColor:'red'
  },
  profileIcon: {
    color: 'grey',
  },
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,

    // backgroundColor:'yellow'
  },
});
