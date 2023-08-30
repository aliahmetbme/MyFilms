import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';

import Button from './buttons';
import style from './style';
import { useFetch } from '../../Hooks/useFetch';

function SearchButtonsForMovie(props) {
  const [genres, setGenres] = useState([]);

  async function fetchData() {
    props.setIsLoading(true)
    const response = await axios.get(props.genreURL);
    const genresData = response.data;
    props.setIsLoading(false)
    setGenres(genresData.genres);
  }

  async function fetchFilteredData(item) {
    props.setIsLoading(true)
    const response = await axios.get(props.discoverUrl, {params: {with_genres: item.id}});
    props.setMovieList(response.data.results);
    props.setIsLoading(false)
    console.log(response.data.results, 'response');
  }

  const renderData = ({item}) => (
    <Button onPress={() => fetchFilteredData(item)} name={item.name}></Button>
  );

  useEffect(() => {fetchData() }, []);


  return (
    <View style={style.container}>
      <FlatList
        horizontal={true}
        data={genres}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}></FlatList>
    </View>
  );
  
}

export default SearchButtonsForMovie;
