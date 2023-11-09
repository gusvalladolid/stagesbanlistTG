import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

const StageButton = ({ imagePath }) => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
  const imageSize = 100; // Adjust the size as needed

  return (
    <View>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Image
            source={imagePath} 
            style={[styles.image, { width: imageSize, height: imageSize }, pressed && styles.imagePressed]}
          />
        )}
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  image: {
    borderRadius: 8,
  },
  imagePressed: {
    opacity: 0.7, // Adjust the opacity when pressed
  },
});

export default StageButton;
