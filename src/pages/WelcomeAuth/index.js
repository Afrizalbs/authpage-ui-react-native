import React from 'react';
import {View, Text} from 'react-native';
import ActionButton from './ActionButton';
import {colors} from '../../utils/colors';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.container}>
      <View style={styles.wrapper.containerLogo}>
        <View style={styles.wrapper.logo} />
        <Text style={styles.text.brand}>Welcome to Fake Taxi</Text>
      </View>
      <ActionButton
        desc="Silahkan Register jika Anda belum memiliki Akun"
        title="Register"
      />
      <ActionButton
        desc="Silahkan Melakukan Login jika Anda sudah memiliki Akun"
        title="Login"
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
      marginBottom: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 319,
      height: 217,
      backgroundColor: colors.default,
      marginBottom: 15,
    },
  },
  text: {
    brand: {fontSize: 35, fontWeight: 'bold', color: colors.default},
  },
};

export default WelcomeAuth;
