import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../../utils/colors';
import {Input} from '../../components';
import ActionButton from './ActionButton';
import {RegisAnimation} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Register = ({navigation}) => {
  // management state pakai redux
  const {form} = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  const register = () => {
    console.log('data yang dikirim : ', form);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.space(15)} />
          <RegisAnimation width={219} height={117} />
          <View style={styles.space(15)} />
          <Text style={styles.text}>
            Silahkan isi Form untuk Registrasi Akun Anda
          </Text>
          <View style={styles.space(70)} />
          <Input
            placeholder="Nama Lengkap"
            value={form.fullName}
            onChangeText={(value) => onInputChange(value, 'fullName')}
          />
          <View style={styles.space(20)} />
          <Input
            placeholder="Email"
            value={form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
          <View style={styles.space(20)} />
          <Input
            placeholder="Password"
            value={form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.space(55)} />
        <ActionButton title="Daftar" onPress={register} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.default,
    maxWidth: 250,
  },
  space: (value) => {
    return {
      height: value,
    };
  },
});

export default Register;
