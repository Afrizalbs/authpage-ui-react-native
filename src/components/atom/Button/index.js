import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    btn: {
      borderRadius: 25,
      backgroundColor: colors.default,
      paddingVertical: 13,
    },
  },
  text: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
};

export default Button;
