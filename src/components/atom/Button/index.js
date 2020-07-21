import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
      borderRadius: 40,
      backgroundColor: colors.default,
      paddingVertical: 15,
    },
  },
  text: {
    color: 'white',
    fontSize: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
};

export default Button;
