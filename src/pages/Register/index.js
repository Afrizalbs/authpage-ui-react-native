import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../../utils/colors';
import {Input} from '../../components';
import ActionButton from './ActionButton';
import {RegisAnimation} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Register = () => {
  // management state pakai redux
  const {form} = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  const sendData = () => {
    console.log('data yang dikirim : ', form);
  };

  // management state lokal

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.space(30)} />
          <RegisAnimation width={319} height={217} />
          <View style={styles.space(15)} />
          <Text style={styles.text}>
            Silahkan isi Form untuk Registrasi Akun Anda
          </Text>
          <View style={styles.space(90)} />
          <Input
            placeholder="Nama Lengkap"
            value={form.fullName}
            onChangeText={(value) => onInputChange(value, 'fullName')}
          />
          <View style={styles.space(33)} />
          <Input
            placeholder="Email"
            value={form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
          <View style={styles.space(33)} />
          <Input
            placeholder="Password"
            value={form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
            secureTextEntry={true}
          />
          <View style={styles.space(90)} />
          <ActionButton title="Daftar" onPress={sendData} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 22,
    paddingHorizontal: 50,
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.default,
    maxWidth: 320,
  },
  space: (value) => {
    return {
      height: value,
    };
  },
});

export default Register;
