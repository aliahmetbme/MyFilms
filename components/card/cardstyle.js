import { Dimensions, StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{
        backgroundColor:'black',
        margin:10,
        borderRadius:10,
        padding:10
    },
    Image:{
        width:100,
        height: 100,
        borderRadius:50,
        resizeMode:"contain"
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        color:"white",
        textAlign:"center"
    },
    adult:{
        color:"white",
        fontSize:15,
        textAlign:"right"

    }
})