import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

export default function Button(props) {
  return (
    <TouchableOpacity {...props} style={style.button}>
      <Text style={style.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
}
