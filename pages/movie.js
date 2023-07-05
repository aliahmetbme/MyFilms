import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList,} from 'react-native';
import axios from 'axios';

import Cards from '../components/card/card';
import Loading from '../components/Loading/Loading';
import SearchButtons from '../components/serachButton/searchButtons';

const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=11a100e568ee3b2467f04ee72c058315';
const genreURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=11a100e568ee3b2467f04ee72c058315';

function App() {
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

const renderData = ({item}) => (
  <Cards
    title={item.title}
    adult={item.adult}
    image={item.backdrop_path}
    releaseDate={item.release_date}
    vote={item.vote_average}
  />
);

export default App;
