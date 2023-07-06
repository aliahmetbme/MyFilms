import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native'
import React from 'react'

const InfoFamous = ({route}) => {

    const name = route.params.peopleName
    const peopleImage = route.params.peopleImage
    const known_for = route.params.known_for
    const known_for_department = route.params.job
    const popularity = route.params.popi

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: peopleImage}}></Image>
      <Text style={styles.namestyle}>{name}</Text>
      <Text style={[styles.namestyle, {fontSize:20}]}> {known_for_department}</Text>
      <Text style={{color:"red", textAlign:"center",fontWeight:"800", fontStyle:"italic",padding:10}}> Popularity = {popularity}</Text>
      <View style={{height:8,flexDirection:"row",marginRight:40,marginLeft:40,margin:20,borderRadius:20}}>
        <View style={{flex:popularity/1000,backgroundColor:"red",borderRadius:10}}></View>
        <View style={{flex:1 - popularity/1000,backgroundColor:"white",borderRadius:10}}></View>
      </View>
     
      <FlatList
        horizontal={true}
        data={known_for}
        renderItem={renderData}></FlatList>
    </ScrollView>
  )
}

function renderData({item}) {

    const source = "https://image.tmdb.org/t/p/original" + item.backdrop_path
    return(
        <View style={{backgroundColor:"#292929", margin: 10, borderRadius:10, padding:10}}>
            <Text style={{color:"white",textAlign:"center"}}>{item.original_title}</Text>
            <Image source={{uri: source}} style={{width:90,height:90,borderRadius:10,margin:10, alignSelf:"center"}}></Image>
            <Text style={{color:"red",fontSize:10,textAlign:"center"}}> Vote: {item.vote_average}</Text>
        </View>
    )
} 

export default InfoFamous

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black"
    },
    imageStyle:{
        width:200,
        height:300,
        alignSelf:"center",
        justifyContent:"flex-start",
        margin:10,
        borderRadius:10
    },
    namestyle:{
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold",
        fontStyle:"italic",
        color:"#FFFFFF",
        textShadowColor: 'red',
        textShadowOffset: { width: 4, height: 4 },
        textShadowRadius: 5,
    }
})