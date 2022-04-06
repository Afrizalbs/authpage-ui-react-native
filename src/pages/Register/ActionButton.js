import React from 'react';
import {View} from 'react-native';
import {Button} from '../../components';

const ActionButton = ({title, onPress}) => {
  return (
    <View>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default ActionButton;
