import React, {useState} from 'react';

import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {submitCarNumber} from '../Api/Api';
import {setCarFetchData} from '../Redux/features/GlobalSlice';
import {useDispatch} from 'react-redux';

const SubmitHandler = () => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onBtnHandler = async num => {
    const res = await submitCarNumber(num);

    let keyMappings = {
      manufacturing_date: 'vehicleManufacturingMonthYear',
      registration_date: 'regDate',
      rto: 'regAuthority',
      ownership: 'ownerCount',
      registration_number: 'regNo',
      fitness_upto: 'rcExpiryDate',
      varient: 'model',
      insurance_availibility: 'vehicleInsuranceUpto',
      // chassis_number: "chassis",
    };
    const originalObject = res.result.data;
    const mappedObject: any = {};

    for (const [newKey, originalKey] of Object.entries(keyMappings)) {
      if (newKey === 'manufacturing_date') {
      }
      mappedObject[newKey] = originalObject[originalKey];
    }
    dispatch(setCarFetchData(mappedObject));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the Car Number..."
        placeholderTextColor={'blue'}
        onChangeText={val => setNumber(val)}
      />
      <Pressable style={styles.btn} onPress={() => onBtnHandler(number)}>
        <Text style={styles.btnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default SubmitHandler;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    marginHorizontal: 20,
    width: '70%',
    borderColor: 'blue',
    textTransform: 'uppercase',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'blue',
    padding: 7,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#FFF',
    padding: 2,
  },
});
