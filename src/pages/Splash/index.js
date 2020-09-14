import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {SplashAnimation} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 3000);
  });
  return (
    <View style={styles.wrapper}>
      <SplashAnimation height={80} width={90} />
      <Text style={styles.text}>Ojol App</Text>
      <Text style={styles.caption}>Siap mengantarmu kemana saja</Text>
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
