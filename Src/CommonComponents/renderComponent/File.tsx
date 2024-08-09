import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  Image,
  Animated,
} from 'react-native';
import PreViewPic from './PreViewPic';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image as CompressedImage} from 'react-native-compressor';
import Entypo from 'react-native-vector-icons/Entypo';
import RNFS from 'react-native-fs';
import {useDispatch, useSelector} from 'react-redux';
import {deleteValidationKey} from '../../Redux/features/GlobalSlice';

const File = ({metaData, setParticularObj}) => {
  const [photo, setPhoto] = useState(null);
  const [allPhotos, setAllPhotos] = useState(metaData.value);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const dispatch = useDispatch();
  const validationObj = useSelector(s => s.global.validation);
  // console.log(allPhotos);

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

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
      includeBase64: true,
    };

    launchCamera(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets[0].uri};
        const finalImage = await CompressedImage.compress(source.uri);
        const base64 = await RNFS.readFile(finalImage, 'base64');
        console.log(base64, 'finalCamera');
        setPhoto(source);
        setAllPhotos(prev => [...prev, {source: source.uri, base64}]);
        setParticularObj(prevState => {
          const updatedSubfields = prevState.subfeilds.map(subfield => {
            if (subfield.name === metaData.name) {
              const lastValue = subfield.value;
              lastValue.push(base64);

              return {...subfield, value: lastValue};
            }
            return subfield;
          });
          console.log('updatetokoshi', updatedSubfields);
          dispatch(deleteValidationKey());
          return {...prevState, subfeilds: updatedSubfields};
        });
      }
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets[0].uri};
        const finalImage = await CompressedImage.compress(source.uri);
        const base64 = await RNFS.readFile(finalImage, 'base64');
        console.log(source, 'finalCamera');
        setPhoto(source);
        setAllPhotos(prev => [...prev, {source: source.uri, base64}]);
        setParticularObj(prevState => {
          const updatedSubfields = prevState.subfeilds.map(subfield => {
            if (subfield.name === metaData.name) {
              const lastValue = subfield.value;
              lastValue.push(base64);

              return {...subfield, value: lastValue};
            }
            return subfield;
          });
          dispatch(deleteValidationKey());
          return {...prevState, subfeilds: updatedSubfields};
        });
      }
    });
  };

  const deleteImage = uri => {
    const newAllPhotos = allPhotos.filter(item => item.source !== uri.source);
    console.log(Object.keys(newAllPhotos));
    setParticularObj(prevState => {
      const updatedSubfields = prevState.subfeilds.map(subfield => {
        if (subfield.name === metaData.name) {
          const lastValue = subfield.value;
          const newValue = lastValue.filter(item => item != uri.base64);

          return {...subfield, value: newValue};
        }
        return subfield;
      });
      dispatch(deleteValidationKey());
      return {...prevState, subfeilds: updatedSubfields};
    });
    setAllPhotos(newAllPhotos);
  };

  const handleImagePress = uri => {
    setSelectedPhoto(uri);
    setModalVisible(true);
  };

  return (
    <Animated.View style={{transform: [{translateX: shakeAnimation}]}}>
      <View style={styles.container}>
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor:
                validationObj?.name !== undefined
                  ? validationObj.name === metaData.name
                    ? 'red'
                    : 'blue'
                  : 'blue',
            },
          ]}>
          <Text style={styles.txtStyle}>{metaData.placeholder}</Text>
          <View style={styles.iconContainer}>
            <Pressable onPress={openCamera}>
              <Entypo name="camera" size={25} color="white" />
            </Pressable>
            <Pressable onPress={openGallery}>
              <Entypo name="image" size={25} color="white" />
            </Pressable>
          </View>
        </View>
        <PreViewPic
          data={allPhotos}
          onDelete={deleteImage}
          onImagePress={handleImagePress}
        />
        {/* Modal Start */}
        <Modal visible={isModalVisible} transparent={true} animationType="fade">
          <View style={styles.modalContainer}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
            <Image source={{uri: selectedPhoto}} style={styles.fullImage} />
          </View>
        </Modal>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  innerContainer: {
    backgroundColor: 'blue',
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtStyle: {
    color: '#FFF',
    fontSize: 16,
    padding: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  fullImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default File;
