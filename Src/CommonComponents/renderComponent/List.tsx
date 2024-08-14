import React, {useState, useMemo, useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteValidationKey,
  setValidation,
} from '../../Redux/features/GlobalSlice';

const List = ({metaData, setParticularObj}) => {
  const validationObj = useSelector(s => s.global.validation);
  // console.log('LIST', metaData.value);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(metaData.value);
  const [items, setItems] = useState(
    metaData.elements.map(item => {
      return {label: item, value: item};
    }),
  );

  // State to track the height of the dropdown
  const [dropdownHeight, setDropdownHeight] = useState(40);

  // Maximum height of the dropdown
  const maxHeight = 200;

  // Adjust the height based on the number of items
  const calculatedHeight = useMemo(() => {
    const itemCount = items.length;
    const totalHeight = itemCount * dropdownHeight;
    return totalHeight > maxHeight ? maxHeight : totalHeight;
  }, [items, dropdownHeight]);

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

  const onChangeHandler = val => {
    setParticularObj(prevState => {
      const updatedSubfields = prevState.subfeilds.map(subfield => {
        if (subfield.name === metaData?.name) {
          return {...subfield, value: val?.value};
        }
        return subfield;
      });
      dispatch(deleteValidationKey());
      return {...prevState, subfeilds: updatedSubfields};
    });
  };

  const carFetchData = useSelector(s => s.global.carFetchData);
  const [apiValue, setApiValue] = useState(null);

  const foundOrNot = Object.keys(carFetchData).findIndex(
    item => item === metaData.name,
  );

  useEffect(() => {
    if (metaData?.value?.length !== 0) {
      // console.log('changeName', metaData.name, metaData.value);
      onChangeHandler({value: metaData.value});
    }
  }, []);

  useEffect(() => {
    if (foundOrNot !== -1) {
      setApiValue(metaData.placeholder + ': ' + carFetchData[metaData.name]);
      onChangeHandler(carFetchData[metaData.name + '==']);
    }
  }, [carFetchData]);

  // Update the dropdown height when the dropdown is open
  useEffect(() => {
    if (open) {
      setDropdownHeight(calculatedHeight);
    } else {
      setDropdownHeight(40);
    }
  }, [open, calculatedHeight]);

  return (
    <Animated.View style={{transform: [{translateX: shakeAnimation}]}}>
      <View
        style={[
          styles.container,
          {
            marginBottom: open ? dropdownHeight : 10,
          },
        ]}
        pointerEvents={apiValue !== null ? 'none' : 'auto'}>
        <DropDownPicker
          style={[
            styles.dropdown,
            {
              borderColor:
                validationObj?.name !== undefined
                  ? validationObj.name === metaData.name
                    ? 'red'
                    : 'blue'
                  : 'blue',
            },
          ]}
          open={open}
          setValue={setValue}
          items={items}
          setOpen={setOpen}
          setItems={setItems}
          dropDownContainerStyle={{
            maxHeight: calculatedHeight,
          }}
          listMode="SCROLLVIEW"
          placeholder={
            apiValue !== null
              ? apiValue
              : value !== null
              ? metaData.placeholder + ': ' + value
              : metaData.placeholder
          }
          placeholderStyle={[
            styles.placeholder,
            {
              color:
                validationObj?.name !== undefined
                  ? validationObj.name === metaData.name
                    ? 'red'
                    : 'blue'
                  : 'blue',
            },
          ]}
          selectedItemLabelStyle={styles.selectedItem}
          onSelectItem={val => onChangeHandler(val)}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
  },
  dropdown: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 12,
  },
  placeholder: {
    color: 'blue',
  },
  selectedItem: {
    color: 'blue',
  },
});

export default List;
