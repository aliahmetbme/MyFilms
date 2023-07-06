import axios from 'axios'
import React ,{ useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Explanations from './Explanations';
import Cards from '../components/card/card'
import Loading from '../components/Loading/Loading';
import SearchButtons from '../components/serachButton/searchButtons';

const discoverURL = "https://api.themoviedb.org/3/discover/tv?api_key=11a100e568ee3b2467f04ee72c058315"
const genreURL = "https://api.themoviedb.org/3/genre/tv/list?api_key=11a100e568ee3b2467f04ee72c058315"

function App(){
    
    const [isLoading, setIsLoading] = useState(false);
    const [seriesList, setSeriesList] = useState([])

    async function fetchData(){
        setIsLoading(true)
        const response = await axios.get(discoverURL);
        const seriesdata = response.data
        setIsLoading(false)
        setSeriesList(seriesdata.results)      
    }

    useEffect(()=>{fetchData()},[])
    if (isLoading) {
    return  (   
    <SafeAreaView style={{flex: 1, backgroundColor: '#292929'}}>
        <SearchButtons
            discoverUrl={discoverURL}
            genreURL={genreURL}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            movieList={seriesList}
            setMovieList={setSeriesList}>
        </SearchButtons>
        <Loading />    
    </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#292929'}}>
        <SearchButtons
          genreURL={genreURL}
          discoverUrl={discoverURL}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          movieList={seriesList}
          setMovieList={setSeriesList}></SearchButtons>
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
  return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Series" component={App} />
          <Stack.Screen name="Explanations" component={Explanations} />
      </Stack.Navigator>
  )
}

const renderData = ({item}) => 
(<Cards 
    title={item.original_name} 
    image={item.backdrop_path} 
    releaseDate={item.first_air_date}
    vote={item.vote_average} />)


export default SeriesStack;