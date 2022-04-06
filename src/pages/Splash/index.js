import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils/colors';

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
        style={styles.splashLogo}
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
  splashLogo: {
    height: 200,
    width: 200,
  },
});

export default Splash;
