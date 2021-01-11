import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {SplashAnimation} from '../../assets';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 3500);
  });
  return (
    <View style={styles.wrapper}>
      <LottieView
        source={require('../../assets/17895-wear-mask.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.default,
  },
  caption: {
    fontSize: 14,
    color: colors.default,
  },
});

export default Splash;
