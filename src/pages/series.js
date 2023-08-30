import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Config from 'react-native-config';

import Explanations from './Details';
import Cards from '../components/Cardss/card'
import Loading from '../components/LoadingFile/Loading';
import GenresButton from '../components/serachButton/genresButton';
import { useFetch } from '../Hooks/useFetch';

const discoverSeriesURL = Config.API_HEAD + Config.API_TV + Config.API_KEY
const genreTvURL = Config.API_HEAD + Config.GENRE_TV + Config.API_KEY
const discoverURL = "https://api.themoviedb.org/3/discover/tv?api_key=11a100e568ee3b2467f04ee72c058315"
const genreURL = "https://api.themoviedb.org/3/genre/tv/list?api_key=11a100e568ee3b2467f04ee72c058315"

function App() {
  const { data, loading, error } = useFetch(discoverURL)

  const [isLoading, setIsLoading] = useState(false);
  const [seriesList, setSeriesList] = useState([])
  useEffect(() => { fetchData() }, [])

  async function fetchData() {
    setIsLoading(true)
    const response = await axios.get(discoverURL);
    const seriesdata = response.data
    setIsLoading(false)
    setSeriesList(seriesdata.results)
  }

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#292929' }}>
        <GenresButton
          discoverUrl={discoverURL}
          genreURL={genreURL}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          movieList={seriesList}
          setMovieList={setSeriesList}>
        </GenresButton>
        <Loading />
      </SafeAreaView>
    )
  } else {
    return (

      <SafeAreaView style={{ backgroundColor: '#292929', flex: 1 }}>
        <GenresButton
          genreURL={genreURL}
          discoverUrl={discoverURL}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          movieList={seriesList}
          setMovieList={setSeriesList}></GenresButton>
        <FlatList
          numColumns={2}
          data={seriesList}
          renderItem={renderData}
          keyExtractor={item => item.id.toString()}></FlatList>
      </SafeAreaView>


    );
  }

}

const SeriesStack = () => {

  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Series" component={App} />
      <Stack.Screen name="Details" component={Explanations} />
    </Stack.Navigator>
  )
}

const renderData = ({ item }) =>
(<Cards
  title={item.original_name}
  image={item.backdrop_path}
  releaseDate={item.first_air_date}
  vote={item.vote_average}
  genres={genreURL}
  adult={item.adult}
  url={item}
  overview={item.overview} />)


export default SeriesStack;