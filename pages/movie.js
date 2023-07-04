import React, { useEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity, Button, Text, FlatList, Image, StyleSheet } from 'react-native'
import axios from 'axios';
import Cards from '../components/card/card';
import Loading from '../components/Loading/Loading';

import SearchBar from '../components/SearchBar/searchBar';
import SearchButtons from '../components/serachButton/searchButtons';

const URL = "https://api.themoviedb.org/3/movie/popular?api_key=11a100e568ee3b2467f04ee72c058315"

function App(){
    const [isLoading, setIsLoading] = useState(false)
    const [movieList, setMovieList] = useState([])
    const [filteredMovieList, setFilteredMovieList] = useState(movieList);

    async function fetchData (){
        setIsLoading(true)
        const response = await axios.get(URL)
        const movieData = response.data
        setIsLoading(false)
        console.log(movieData)
        setMovieList(movieData.results)
        setFilteredMovieList(movieData.results); // arama yapıldıkça güncelleme yapacak

    }

    function handleSearch(text) {
        const filteredList = movieList.filter(movie => {
            const searchedText = text.toLowerCase();
            const currentTitle = movie.title.toLowerCase();
    
            return currentTitle.indexOf(searchedText) > -1;
        });
    
        setFilteredMovieList(filteredList);
    }

    console.log(movieList,'ss')

   useEffect(()=>{fetchData()} ,[])
   if (isLoading){
      return(
        <SafeAreaView>
            <Loading/>
        </SafeAreaView>

      )
   } else{
    return(       
    <SafeAreaView style={{flex:1, backgroundColor:"#292929"}} >
        <SearchBar
            onSearch={handleSearch}>
        </SearchBar>
        <SearchButtons>

        </SearchButtons>
        <FlatList 
             numColumns={2}
             data={filteredMovieList}
             renderItem={renderData}
             keyExtractor={(item) => item.id.toString()}>
        </FlatList>
    </SafeAreaView>
    )
    }
}

const renderData = ({item}) => 
(<Cards 
    title={item.title} 
    adult={item.adult} 
    image={item.backdrop_path} 
    releaseDate={item.release_date}
    vote={item.vote_average} />)

export default App;