import React from 'react';
import {View, Text} from 'react-native';
import ActionButton from './ActionButton';
import {colors} from '../../utils/colors';
import {WelcomeAnimation} from '../../assets';

const WelcomeAuth = ({navigation}) => {
  const aksiPindahHalaman = (halaman) => {
    navigation.navigate(halaman);
  };
  return (
    <View style={styles.wrapper.container}>
      <View style={styles.wrapper.containerLogo}>
        <WelcomeAnimation width={319} height={217} />
        <View style={styles.space(15)} />
        <View style={styles.wrapper.logo} />
        <Text style={styles.text.brand}>Welcome to Fake Taxi</Text>
      </View>
      <View style={styles.space(80)} />
      <ActionButton
        desc="Silahkan Register jika Anda belum memiliki Akun"
        title="Register"
        onPress={() => aksiPindahHalaman('Register')}
      />
      <ActionButton
        desc="Silahkan Melakukan Login jika Anda sudah memiliki Akun"
        title="Login"
        onPress={() => aksiPindahHalaman('Login')}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerLogo: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  text: {
    brand: {fontSize: 35, fontWeight: 'bold', color: colors.default},
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};

export default WelcomeAuth;
