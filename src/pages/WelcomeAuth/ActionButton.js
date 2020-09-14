import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../utils/colors';
import {Button} from '../../components';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {marginBottom: 10},
  text: {
    desc: {
      fontSize: 12,
      color: colors.text.default,
      marginBottom: 10,
      paddingHorizontal: 10,
      textAlign: 'center',
    },
  },
};

export default ActionButton;
