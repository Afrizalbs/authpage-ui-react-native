import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils/colors';

const Button = ({title}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 40,
        backgroundColor: colors.default,
        paddingVertical: 15,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 25,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
