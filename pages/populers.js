import React, {useState, useEffect} from 'react'
import { SafeAreaView, TouchableOpacity, Button, Text, FlatList, Image,View, StyleSheet } from 'react-native'
import axios from 'axios';
import Famous from '../components/Famaus/famous';

const URL = "https://api.themoviedb.org/3/person/popular?api_key=11a100e568ee3b2467f04ee72c058315"


function App(){

    const [famousList, setFamousList] = useState()

    async function fetchData(){
        const response = await axios.get(URL)
        const famousdata = response.data;
        setFamousList(famousdata.results)
    }

    console.log(famousList, "famousList")


    useEffect(() => {fetchData()},[])
//         <Button title='fetch data' onPress={fetchData}></Button>

    return (
    <SafeAreaView style={{backgroundColor:"#292929",flex:1}}>
        <FlatList
            numColumns={2}
            data={famousList}
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