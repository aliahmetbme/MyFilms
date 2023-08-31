import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';

import { fetchData } from "../../API_helpers/Fetch";
import { useFetch } from '../../Hooks/useFetch';
import Button from './buttons';
import style from './style';

function SearchButtonsForMovie(props) {
  const {data} = useFetch(props.genreURL,{})
  console.log(data,"asddsaddasda")

  async function fetchFilteredData(item) {
    const results = await fetchData(props.discoverUrl,  {with_genres: item.id})
    props.setMovieList(results);
  }

  const renderData = ({item}) => (
    <Button onPress={() => fetchFilteredData(item)} name={item.name}></Button>
  );


  // Film Türleri
  return (
    <View style={style.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data.genres}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}></FlatList>
    </View>
  );
  
}

export default SearchButtonsForMovie;
