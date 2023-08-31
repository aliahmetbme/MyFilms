import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Config from 'react-native-config';

import Explanations from './Details';
import Cards from '../components/Cardss/card'
import Loading from '../components/LoadingFile/Loading';
import GenresButton from '../components/serachButton/genresButton';
import { fetchData } from "../API_helpers/Fetch";

const discoverSeriesURL = Config.API_HEAD + Config.API_TV 
const genreTvURL = Config.API_HEAD + Config.GENRE_TV 

function App() {
  const [seriesList, setSeriesList] = useState([])
  // loading için çözüm bul
  useEffect(() => { getSeries() }, [])

  async function getSeries() {
    const data = await fetchData(discoverSeriesURL, {})
    setSeriesList(data)
  }

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#292929' }}>
        <GenresButton
          discoverUrl={discoverSeriesURL}
          genreURL={genreTvURL}
          isLoading={loading}
          movieList={seriesList}
          setMovieList={setSeriesList}>
        </GenresButton>
        <Loading />
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={{ backgroundColor: '#292929', flex: 1 }}>
        <FlatList
          ListHeaderComponent={<GenresButton
            genreURL={genreTvURL}
            discoverUrl={discoverSeriesURL}
            isLoading={loading}
            movieList={seriesList}
            setMovieList={setSeriesList}></GenresButton>}
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
  genres={genreTvURL}
  adult={item.adult}
  url={item}
  overview={item.overview} />)


export default SeriesStack;