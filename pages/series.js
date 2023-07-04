import axios from 'axios'
import React ,{ useState, useEffect } from 'react'
import { SafeAreaView, TouchableOpacity, Button, Text, FlatList, Image, StyleSheet } from 'react-native'
import Cards from '../components/card/card'

const URL = "https://api.themoviedb.org/3/tv/popular?api_key=11a100e568ee3b2467f04ee72c058315"

function App(){

    const [seriesList, setSeriesList] = useState([])

    async function fetchData(){
        const response = await axios.get(URL);
        const seriesdata = response.data
        setSeriesList(seriesdata.results)
      //  console.log(seriesdata)
        
    }

//    console.log(seriesList, "asjlks")

    useEffect(()=>{fetchData()},[])
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"#292929"}}>
            <FlatList
                numColumns={2}
                data={seriesList}
                renderItem={renderData}
                keyExtractor={(item) => item.id.toString()}>
            </FlatList>
        </SafeAreaView>
 )

}

const renderData = ({item}) => 
(<Cards 
    title={item.original_name} 
    image={item.backdrop_path} 
    releaseDate={item.first_air_date}
    vote={item.vote_average} />)


export default App;