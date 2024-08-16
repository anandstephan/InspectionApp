import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput, Animated, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteValidationKey} from '../../Redux/features/GlobalSlice';

const Input = ({metaData, setParticularObj, editable}) => {
  const carFetchData = useSelector(s => s.global.carFetchData);
  const validationObj = useSelector(s => s.global.validation);
  const dispatch = useDispatch();
  const [text, setText] = useState(
    metaData.placeholder + ': ' + metaData.value,
  );
  const textInputRef = useRef(null);
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const [cursorPosition, setCursorPosition] = useState(0);

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
      const newValue =
        metaData.placeholder + ' : ' + carFetchData[metaData.name];
      setText(newValue);
    }
  }, [carFetchData]);

  const onSelectionChangeHandler = e => {
    const {selection} = e.nativeEvent;
    if (selection) {
      setCursorPosition(selection.start);
    }
  };

  const onInputChangeHandler = text => {
    if (text === metaData.placeholder + ':') {
      // Shift cursor forward by 4 characters
      const newCursorPosition = cursorPosition + 4;
      setText(text + ' '); // Add a space to the end of the text
      textInputRef.current.focus();
      textInputRef.current.setNativeProps({
        selection: {start: newCursorPosition, end: newCursorPosition},
      });
      Keyboard.dismiss();
      return;
    }
    setText(text);
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
        ref={textInputRef}
        placeholderTextColor={colorName}
        editable={editable}
        placeholder={metaData.placeholder}
        onChangeText={text => onInputChangeHandler(text)}
        onSelectionChange={onSelectionChangeHandler}
        style={[
          styles.container,
          {
            borderColor: colorName,
          },
        ]}
        value={text}
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
