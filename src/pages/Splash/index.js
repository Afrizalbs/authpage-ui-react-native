import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ViewPagerAndroid} from 'react-native';
import {colors} from '../../utils/colors';
import {SplashAnimation} from '../../assets';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('WelcomeAuth');
  //   }, 3000);
  // });
  return (
    <View style={styles.wrapper}>
      <SplashAnimation height={300} width={300} />
      <Text style={styles.text}>Fake Taxi</Text>
      <Text style={styles.caption}>The best Online Transportation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fffffe',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 50,
    fontFamily: 'arial',
    color: '#232946',
  },
  caption: {
    fontSize: 20,
    color: '#232946',
  },
});

export default Splash;
