import React, { useEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity, Button, Text, FlatList, Image, StyleSheet } from 'react-native'
import axios from 'axios';
import Cards from '../components/card/card';

let URL = "https://api.themoviedb.org/3/movie/popular?api_key=11a100e568ee3b2467f04ee72c058315"



function App(){

    const [movieList, setMovieList] = useState([])

    async function fetchData (){
        const response = await axios.get(URL)
        const movieData = response.data
        console.log(movieData)
        setMovieList(movieData.results)

    }

  
    console.log(movieList,'ss')

    useEffect(()=>{fetchData()}
    ,[])

    return(
        <SafeAreaView style={{flex:1, column:2}} >
            <Text>
                movies
            </Text>
            <Button title="fetch data " onPress={fetchData}></Button>
            <FlatList 
             data={movieList}
             renderItem={renderData}
             keyExtractor={(item) => item.id.toString()}></FlatList>
        
        </SafeAreaView>
    )
}

const renderData = ({item}) => (<Cards title={item.title} adult={item.adult} image={item.backdrop_path}></Cards>)

export default App;