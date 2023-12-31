import { SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import style from './searchStyle'
const searchBar = (props) => {
    return (
        <SafeAreaView>
            <TextInput
                style={style.searchbar}
                onChangeText={props.onSearch}
                placeholder="Search ..."
            ></TextInput>
        </SafeAreaView>
    )
}

export default searchBar

