import { Text, View, ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=11a100e568ee3b2467f04ee72c058315';

const Explanations = ({route}) => {

  const overview = route.params.overview
  const Images = route.params.image
  const title = route.params.title
  const [genre, setGenre] = useState(route.params.genre)

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri : Images}} style={styles.imageStyle} ></Image>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={genre}
        renderItem={renderData}></FlatList>
      <View>
        <Text style={[styles.overview, {fontSize:18, fontWeight:"900", paddingBottom:2}]}>OVERVIEW : </Text>
        <Text style={styles.overview}>{overview}</Text>
      </View>
     
    </ScrollView>
  )
}


async function fetchFilteredData(item) {
  const response = await axios.get(props.URL, {params: {with_genres: item.id}});
  setGenre(response.data.results); 
  console.log(genre,"genre")
}

function renderData({item}) {
  fetchFilteredData(item)
  return(
    <Text>{item.name} asdjljs</Text>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black"
  },
  overview:{
    color:"white",
    fontSize:15,
    fontStyle:"italic",
    padding:15,
    paddingTop:2
  },
  imageStyle:{
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  titleStyle:{
    fontSize:40,
    textAlign:"center",
    fontWeight:"bold",
    fontStyle:"italic",
    color:"#FFFFFF",
    textShadowColor: 'red',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
    padding:15
}
})

export default Explanations

