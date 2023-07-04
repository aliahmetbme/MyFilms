import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image, View} from 'react-native';
import style from './cardstyle';


export default function cards({title, image, adult, releaseDate, vote}) {

  const source =  "https://image.tmdb.org/t/p/original" + image

  return (
    <TouchableOpacity style={style.container}>
        <Image source={{uri : source}} style={style.Image}></Image>
        <Text style={style.title}>{title}</Text>
        <View style={style.bottom_container}>
            <Text style={style.date}>Relase Date: {releaseDate}</Text>
            <View>
                {adult ? (
                    <Text style={style.adult}> it is not ok dssd for child </Text>
                ) : (
                    <Text style={style.adult}> 🧒 👧 </Text>
                )}
            </View>
        </View>
        <View  style={style.vote}>
                <View style={{flex: vote / 10, backgroundColor: 'red'}} />
                <View style={{flex: 1 - vote / 10, backgroundColor: 'gray'}} />
        </View>
    </TouchableOpacity>
  );
}
