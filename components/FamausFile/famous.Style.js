import { StyleSheet, Dimensions } from 'react-native'


export default StyleSheet.create({
    container:{
        backgroundColor:"black",
        borderRadius:10,
        margin:10,
    },
    name:{
        color:"white",
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:18
    },
    Image:{
        width:(5 * Dimensions.get("screen").width / 11),
        height: 200,
        alignSelf:"center",
        marginBottom: 8,  
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    job:{
        color:"white",
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:15,
        padding:5
    }
})