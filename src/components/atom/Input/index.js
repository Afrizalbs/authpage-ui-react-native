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
    borderWidth: 2,
    borderRadius: 40,
    borderColor: colors.default,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 25,
    color: colors.default,
  },
});
export default input;
