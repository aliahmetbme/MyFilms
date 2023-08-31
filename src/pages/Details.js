import { Text, View, ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const genreURL = 'https://api.themoviedb.org/3/genre/tv/list?api_key=11a100e568ee3b2467f04ee72c058315';


const Explanations = ({route}) => {

  const overview = route.params.overview
  const Images = route.params.image
  const title = route.params.title
  const [genres, setGenres] = useState([])
  const [x, setX] = useState([])
  const vote = route.params.vote
  

  async function fetchData() {
    const response = await axios.get(genreURL)
    setX(response.data.genres)
    console.log(response.data.genres,"vsdf")
   setGenres(route.params.url.genre_ids)
  }

  function renderData({ item }) {
    const genreName = x.find(genre => genre.id === item)?.name;
    return (
      genreName ? (
        <Text style={{
          overflow: "hidden",
          justifyContent: "center",
          textAlign: "center",
          color: "white",            
          borderRadius: 20,
          backgroundColor: '#292929',
          margin: 10,
          borderColor: 'red',
          borderWidth: 1,
          padding: 10
        }}>{genreName}</Text>
      ) : null
    );
  }

  useEffect(() => {fetchData() }, []);

  return (
    <View style={{backgroundColor:"black",flex:1}}>
      <ScrollView style={styles.container}>
      <Image source={{uri : Images}} style={styles.imageStyle} ></Image>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={genres}
        renderItem={renderData}
     ></FlatList>
      <View style={{height:8,flexDirection:"row",marginRight:40,marginLeft:40,margin:20,borderRadius:40}}>
        <View style={{flex:vote/10, backgroundColor:"red",borderRadius:20}}></View>
        <View style={{flex:1-vote/10,backgroundColor:"white",borderRadius:20}}></View>
      </View>
      { overview ?  <Text style={[styles.overview, {fontSize:18, fontWeight:"900", paddingBottom:2}]}>OVERVIEW : </Text> : null}
      <Text style={styles.overview}>{overview}</Text>
    </ScrollView>
    </View>

  )
}


 

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black",
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
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
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

