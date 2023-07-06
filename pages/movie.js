import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList,} from 'react-native';
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cards from '../components/card/card';
import Loading from '../components/Loading/Loading';
import SearchButtons from '../components/serachButton/searchButtons';
import Explanations from './Explanations';
import { TabBar } from 'react-native-tab-view';

const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=11a100e568ee3b2467f04ee72c058315';
const genreURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=11a100e568ee3b2467f04ee72c058315';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);


  async function fetchData() {
    setIsLoading(true);
    const response = await axios.get(discoverUrl);
    const movieData = response.data;
    setIsLoading(false);
    console.log(movieData);
    setMovieList(movieData.results);
  }

  useEffect(() => {fetchData() }, []);

  if (isLoading) {
    return  (   
    <SafeAreaView style={{flex: 1, backgroundColor: '#292929'}}>
    <SearchButtons
      discoverUrl={discoverUrl}
      genreURL={genreURL}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      movieList={movieList}
      setMovieList={setMovieList}></SearchButtons>
      <Loading></Loading>    
  </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#292929'}}>
        <SearchButtons
          genreURL={genreURL}
          discoverUrl={discoverUrl}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          movieList={movieList}
          setMovieList={setMovieList}></SearchButtons>
        <FlatList
          numColumns={2}
          data={movieList}
          renderItem={renderData}
          keyExtractor={item => item.id.toString()}></FlatList>
      </SafeAreaView>
    );
  }
}

const MovieStack = () => {

  const Stack = createNativeStackNavigator();

  return(
 
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Explanation" component={Explanations} />
      </Stack.Navigator>

  )
}

const renderData = ({item}) => (
  <Cards
    title={item.title}
    adult={item.adult}
    image={item.backdrop_path}
    releaseDate={item.release_date}
    vote={item.vote_average}
    
  />
);

export default MovieStack;
