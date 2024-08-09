import React, {useEffect, useRef} from 'react';
import {StyleSheet, TextInput, View, Animated} from 'react-native';
import {useSelector} from 'react-redux';

const TextArea = ({metaData, setParticularObj}) => {
  const validationObj = useSelector(s => s.global.validation);

  const onInputChangeHandler = text => {
    setParticularObj(prevState => {
      const updatedSubfields = prevState.subfeilds.map(subfield => {
        if (subfield.name === metaData.name) {
          return {...subfield, value: text};
        }
        return subfield;
      });
      return {...prevState, subfeilds: updatedSubfields};
    });
  };

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
    validationObj?.name !== undefined
      ? validationObj.name === metaData.name
        ? handleShakeAnimation()
        : null
      : null;
  }, [validationObj]);
  return (
    <Animated.View style={{transform: [{translateX: shakeAnimation}]}}>
      <TextInput
        placeholderTextColor={'blue'}
        editable={true}
        placeholder={metaData.placeholder}
        onChangeText={text => onInputChangeHandler(text)}
        style={styles.container}
        multiline={true}
      />
    </Animated.View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    marginHorizontal: 20,
    borderColor: 'blue',
    height: 100,
  },
});
