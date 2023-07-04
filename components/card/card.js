import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import style from './cardstyle';

export default function cards({title, image, adult}) {
    const source =  "https://image.tmdb.org/t/p/original" + image
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Image source={{uri : source}} style={style.Image}></Image>
      {adult ? (
        <Text style={style.adult}> it is not ok dssd for child </Text>
      ) : (
        <Text style={style.adult}> 🧒 👧 </Text>
      )}
    </TouchableOpacity>
  );
}
