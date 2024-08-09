import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

const HorizontalScroll = ({tab, onPress}) => {
  return (
    <ScrollView horizontal={true}>
      {tab.map((name, idx) => (
        <Pressable
          onPress={() => onPress(name.name)}
          key={name.name}
          style={styles.container}>
          <Text style={styles.tabTxt}>{name.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default HorizontalScroll;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  tabTxt: {
    color: '#FFF',
  },
});
