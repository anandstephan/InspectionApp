import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';

const HorizontalScroll = ({tab, onPress, alreadyFilledSection}) => {
  const [activeTab, setActiveTab] = useState(null);

  const handlePress = name => {
    setActiveTab(name); // Update the active tab
    onPress(name); // Call the parent onPress function

    console.log(alreadyFilledSection[name], 'kkk');
  };

  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
      {tab.map((item, idx) => (
        <Pressable
          onPress={() => handlePress(item.name)}
          key={item.name}
          style={[
            styles.container,
            alreadyFilledSection[item.name] && styles.activeContainer, // Apply active styles if the button is pressed
          ]}>
          <Text
            style={[
              styles.tabTxt,
              activeTab === item.name && styles.activeTabTxt, // Apply active text styles if the button is pressed
            ]}>
            {item.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default HorizontalScroll;

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
  },
  container: {
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  activeContainer: {
    backgroundColor: 'gray', // Change background color to gray for the active tab
  },
  tabTxt: {
    color: '#FFF',
  },
  activeTabTxt: {
    color: 'white', // Change text color to black for the active tab
  },
});
