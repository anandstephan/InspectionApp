import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {documentsForm, submitForm} from '../../Api/Api';
import HorizontalScroll from '../../CommonComponents/HorizontalScroll';
import VerticalScroll from '../../CommonComponents/VerticalScroll';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCurrentTab,
  setEngineSection,
  setSubmitTabStatus,
  setValidation,
} from '../../Redux/features/GlobalSlice';

const Engine = () => {
  const route = useRoute();
  const {leadId} = route.params;
  const dispatch = useDispatch();
  const currentTabName = useSelector(s => s.global.currentTab);

  const [engineTab, setEngineTab] = useState([]);
  const [particularObj, setParticularObj] = useState(null);
  const engineSection = useSelector(s => s.global.engineSection);

  const onHorizontalHandler = name => {
    const result = engineTab.filter(item => item.name === name);

    setParticularObj(result[0]);
    dispatch(setCurrentTab(name));
  };

  useEffect(() => {
    async function getData() {
      const res = await documentsForm({
        leadId: leadId,
        type: 'engine',
      });
      if (res.code === 200) {
        setEngineTab(res.data);
        setParticularObj(res.data[0]);
        dispatch(setCurrentTab(res.data[0].name));
        for (let i = 0; i < res.data.length; i++) {
          let flag = true;
          for (let j = 0; j < res.data[i].subfeilds.length; j++) {
            if (res.data[i].subfeilds[j].value.length === 0) {
              flag = false;
              break;
            }
          }

          dispatch(setEngineSection({key: res.data[i].name, value: flag}));
        }
      }
    }
    getData();
  }, []);

  const onPressHandler = async () => {
    if (engineSection[currentTabName]) {
      // check this section upload twice or not
      Alert.alert('Unificars Alert', "You can't upload this section twice");
      return;
    }

    dispatch(
      setSubmitTabStatus({tabName: currentTabName, loadingStatus: true}),
    );
    let userDetails = await AsyncStorage.getItem('user');
    const parsedUserId = JSON.parse(userDetails).id;
    // return;
    let flag = true;
    for (let i = 0; i < particularObj.subfeilds.length; i++) {
      if (particularObj?.subfeilds[i]?.value?.length === 0) {
        dispatch(setValidation({name: particularObj.subfeilds[i].name}));
        flag = false;
        console.log(particularObj.subfeilds[i].name);
        break;
      }
    }
    console.log('falg', flag);
    // console.log('llll', particularObj);

    if (flag) {
      let requiredObj = {};
      console.log(particularObj.subfeilds);
      particularObj.subfeilds.forEach(item => {
        requiredObj[item.name] = item.value;
      });
      requiredObj['lead_id'] = leadId;
      requiredObj['user_id'] = parsedUserId;
      requiredObj['form_type'] = currentTabName;
      // requiredObj['ownership'] = '1';
      console.log('MyRequired', requiredObj);

      const res = await submitForm({data: requiredObj});
      console.log('other', res);
      if (res.data.code === 200) {
        Alert.alert('Unificars Alert', res.data.message);
        dispatch(setEngineSection({key: res.data.name, value: true}));
        dispatch(
          setSubmitTabStatus({tabName: currentTabName, loadingStatus: false}),
        );
      }
    }

    dispatch(
      setSubmitTabStatus({tabName: currentTabName, loadingStatus: false}),
    );
  };

  return particularObj !== null ? (
    <View>
      <View style={styles.horizontalTabContainer}>
        <HorizontalScroll
          tab={engineTab}
          onPress={onHorizontalHandler}
          alreadyFilledSection={engineSection}
        />
      </View>

      <ScrollView style={{height: Dimensions.get('screen').height / 1.6}}>
        <VerticalScroll
          data={particularObj}
          setParticularObj={setParticularObj}
        />
      </ScrollView>
      <Pressable style={styles.btn} onPress={onPressHandler}>
        <Text style={{color: '#FFF'}}>Submit</Text>
      </Pressable>
    </View>
  ) : (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Engine;

const styles = StyleSheet.create({
  horizontalTabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    margin: 10,
    marginHorizontal: 20,

    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
