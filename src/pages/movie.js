import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Vibration, View, Platform,} from 'react-native';
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cards from '../components/Cardss/card';
import Loading from '../components/LoadingFile/Loading';
import SearchButtons from '../components/serachButton/genresButton';
import Explanations from './Details';
import Config from 'react-native-config';

const discoverUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=tr&page=2&sort_by=popularity.desc&api_key=11a100e568ee3b2467f04ee72c058315"
const URL = `${Config.API_HEAD}${Config.API_MOVIE}${Config.API_KEY}`
const genreURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=11a100e568ee3b2467f04ee72c058315';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);


  async function fetchData() {
    console.log(URL,"c")
    const response = await axios.get(URL);
    const movieData = response.data;
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
        <SafeAreaView style={{backgroundColor:"#292929",flex:1}}>
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
        <Stack.Screen name="Details" component={Explanations} 
        options={{headerShown:Platform.OS === "ios",headerTransparent:true, headerTitle:" ", headerBackTitleVisible:false}}/>
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
    overview={item.overview}
    url={item}
    genress={genreURL}   
  />
);

export default MovieStack;
