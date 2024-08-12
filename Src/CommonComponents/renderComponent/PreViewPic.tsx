import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const PreViewPic = ({data, onDelete, onImagePress}) => {
  return (
    <View style={styles.container}>
      {data.map((item, idx) => {
        console.log('===', item);
        return (
          <View key={idx} style={styles.imageContainer}>
            <Pressable onPress={() => onImagePress(item)}>
              <Image
                source={{uri: item.source === undefined ? item : item.source}}
                style={styles.image}
              />
            </Pressable>
            <Pressable style={styles.deleteIcon} onPress={() => onDelete(item)}>
              <Entypo name="cross" size={24} color="red" />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default PreViewPic;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    padding: 2,
  },
});
