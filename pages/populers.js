import React, {useState, useEffect} from 'react'
import { SafeAreaView, FlatList,  } from 'react-native'
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Famous from '../components/FamausFile/famous';
import Loading from '../components/LoadingFile/Loading';
import InfoFamous from './InfoFamous';


const URL = "https://api.themoviedb.org/3/person/popular?api_key=11a100e568ee3b2467f04ee72c058315"


function App(){

    const [isLoading, setIsLoading] = useState(false);
    const [famousList, setFamousList] = useState([])

    async function fetchData(){
        setIsLoading(true)
        const response = await axios.get(URL)
        const famousdata = response.data;
        setFamousList(famousdata.results)
        setIsLoading(false)

    }

    console.log(famousList, "famousList")


    useEffect(() => {fetchData()},[])

    const renderData = ({item}) => (
        <Famous
            name={item.name}
            known_for_department={item.known_for_department}
            profile_path={item.profile_path}
            known_for={item.known_for}
            popularity={item.popularity}
        ></Famous>
    )

    if(isLoading){
        return (
            <SafeAreaView style={{backgroundColor:"#292929",flex:1}}>
                <Loading />
            </SafeAreaView>
            )
    } else {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:"#292929"}}>
                <SafeAreaView style={{backgroundColor:"#292929",marginBottom:40}}>
                <FlatList
                    numColumns={2}
                    data={famousList}
                    renderItem={renderData}
                    keyExtractor={(item) => item.id.toString()}
                />
                </SafeAreaView>
            </SafeAreaView>

        )
    }
}

const PopulerStack = () => {

    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Famous" component={App} />
            <Stack.Screen name="FamousInformation" component={InfoFamous} />
        </Stack.Navigator>
    )
}


export default PopulerStack;