import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard, // Import Keyboard module
} from 'react-native';
import {submitCarNumber} from '../Api/Api';
import {setCarFetchData} from '../Redux/features/GlobalSlice';
import {useDispatch} from 'react-redux';

const SubmitHandler = () => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onBtnHandler = async num => {
    if (num.length === 0) {
      Alert.alert('Unificars Alert', 'Please Enter Some Number');
      return;
    }

    Keyboard.dismiss(); // Close the keyboard

    const res = await submitCarNumber(num);
    console.log('==', res);
    if (res.code == 200) {
      let keyMappings = {
        manufacturing_date: 'vehicleManufacturingMonthYear',
        registration_date: 'regDate',
        rto: 'regAuthority',
        ownership: 'ownerCount',
        registration_number: 'regNo',
        fitness_upto: 'rcExpiryDate',
        varient: 'model',
        insurance_availibility: 'vehicleInsuranceUpto',
      };
      const originalObject = res.result.data;
      const mappedObject = {};

      for (const [newKey, originalKey] of Object.entries(keyMappings)) {
        mappedObject[newKey] = originalObject[originalKey];
      }
      dispatch(setCarFetchData(mappedObject));
    } else {
      Alert.alert('Unificars Alert', res.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the Car Number..."
        placeholderTextColor={'blue'}
        value={number.toUpperCase()} // Ensure the input value is always in uppercase
        onChangeText={val => setNumber(val.toUpperCase())}
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
