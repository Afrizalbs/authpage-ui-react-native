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
        <WelcomeAnimation width={219} height={117} />
        <View style={styles.space(10)} />
        <View style={styles.wrapper.logo} />
        <Text style={styles.text.brand}>Welcome to Fake Taxi</Text>
      </View>
      <View>
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
    </View>
  );
};

const styles = {
  wrapper: {
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    containerLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
  },
  text: {
    brand: {fontSize: 20, fontWeight: 'bold', color: colors.default},
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};

export default WelcomeAuth;
