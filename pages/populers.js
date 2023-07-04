import React, {useState, useEffect} from 'react'
import { SafeAreaView, TouchableOpacity, Button, Text, FlatList, Image,View, StyleSheet } from 'react-native'
import axios from 'axios';
import Famous from '../components/Famaus/famous';

import SearchBar from '../components/SearchBar/searchBar';
import SearchButtons from '../components/serachButton/searchButtons';

const URL = "https://api.themoviedb.org/3/person/popular?api_key=11a100e568ee3b2467f04ee72c058315"


function App(){

    const [famousList, setFamousList] = useState()
    const [filteredFamousList, setFilteredFamousList] = useState(famousList);


    async function fetchData(){
        const response = await axios.get(URL)
        const famousdata = response.data;
        setFamousList(famousdata.results)
        setFilteredFamousList(famousdata.results);
    }

    console.log(famousList, "famousList")


    useEffect(() => {fetchData()},[])
//         <Button title='fetch data' onPress={fetchData}></Button>

    function handleSearch(text) {
        const filteredList = famousList.filter(movie => {
            const searchedText = text.toLowerCase();
            const currentTitle = movie.name.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });
        setFilteredFamousList(filteredList)
    }

    return (
    <SafeAreaView style={{backgroundColor:"#292929",flex:1}}>
        <SearchBar
            onSearch={handleSearch}>
        </SearchBar>
        <SearchButtons>
        </SearchButtons>
        <FlatList
            numColumns={2}
            data={filteredFamousList}
            renderItem={renderData}
            keyExtractor={(item) => item.id.toString()}
        />
    </SafeAreaView>
    )
 
}

const renderData = ({item}) => (
    <Famous
        name={item.name}
        known_for_department={item.known_for_department}
        profile_path={item.profile_path}
    ></Famous>
)

export default App;