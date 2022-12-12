import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const FirstPage = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Main', {headerTitle: 'FirstPage'});
      }}>
      <ImageBackground
        source={require('./img/f5e5f3a982276b51b4b605ce9e43a5d3.jpg')}
        style={styles.backgroundImage}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'white',
            paddingVertical: '80%',
            paddingLeft: '30%',
          }}>
          Get Start!
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    height: '100%',
    weight: '100%',
  },
});
