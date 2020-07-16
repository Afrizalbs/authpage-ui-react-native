import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 3000);
  });
  return (
    <View>
      <Text>Ini Halaman Splashscreen</Text>
    </View>
  );
};

export default Splash;
