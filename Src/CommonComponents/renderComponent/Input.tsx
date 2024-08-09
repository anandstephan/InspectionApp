import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteValidationKey} from '../../Redux/features/GlobalSlice';

const Input = ({metaData, setParticularObj, editable}) => {
  const carFetchData = useSelector(s => s.global.carFetchData);
  const validationObj = useSelector(s => s.global.validation);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(metaData.value);

  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handleShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (validationObj?.name === metaData.name) {
      handleShakeAnimation();
    }
  }, [validationObj]);

  useEffect(() => {
    if (carFetchData && carFetchData[metaData.name] !== undefined) {
      setInputValue(carFetchData[metaData.name]);
      onInputChangeHandler(carFetchData[metaData.name]);
    }
  }, [carFetchData]);

  const onInputChangeHandler = text => {
    setInputValue(text);
    setParticularObj(prevState => {
      const updatedSubfields = prevState.subfeilds.map(subfield => {
        if (subfield.name === metaData.name) {
          dispatch(deleteValidationKey());
          return {...subfield, value: text};
        }
        return subfield;
      });
      return {...prevState, subfeilds: updatedSubfields};
    });
  };

  let colorName = validationObj?.name === metaData.name ? 'red' : 'blue';

  return (
    <Animated.View style={{transform: [{translateX: shakeAnimation}]}}>
      <TextInput
        placeholderTextColor={colorName}
        editable={editable}
        placeholder={metaData.placeholder}
        onChangeText={text => onInputChangeHandler(text)}
        style={[
          styles.container,
          {
            borderColor: colorName,
          },
        ]}
        value={inputValue}
      />
    </Animated.View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    marginHorizontal: 20,
    borderColor: 'blue',
    color: 'blue',
    borderRadius: 10,
  },
});
