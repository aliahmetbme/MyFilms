import { Text, View ,TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, {useState} from 'react'
import style from "./famous.Style"
import { useNavigation } from '@react-navigation/native'

function famous({ name , known_for_department, profile_path , known_for, popularity}){

    const source = "https://image.tmdb.org/t/p/original" + profile_path

    const navigation = useNavigation()
    const popilarityRate = popularity

    return(
        <TouchableOpacity style={style.container} onPress={() => {navigation.navigate("FamousInformation",{
            peopleName : name,
            peopleImage: source,
            known_for: known_for,
            job:known_for_department,
            popi:popularity
        })}}>
            <Image source={{uri : source}} style={style.Image}></Image>
            <Text style={style.name}>{name}</Text>
            <Text style={style.job}>{known_for_department}</Text>
        </TouchableOpacity>
    )
}

export default famous

