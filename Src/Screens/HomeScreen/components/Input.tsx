import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Input = ({setSearch}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={'search'} size={20} color={'blue'} />
      <TextInput
        placeholder="Search..."
        style={styles.input}
        placeholderTextColor={'blue'}
        onChangeText={txt => setSearch(txt)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    padding: 2,
    margin: 5,
    color: 'blue',
  },
});
