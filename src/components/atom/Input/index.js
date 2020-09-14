import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const input = ({placeholder, ...rest}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="silver"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.default,
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 14,
    color: colors.default,
  },
});
export default input;
