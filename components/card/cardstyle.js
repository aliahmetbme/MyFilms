import { Dimensions, StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{
        backgroundColor:'#010101',
        margin:10,
        borderRadius:10,
        padding:10,
        paddingTop:0,
        width:(5 * Dimensions.get("screen").width / 11),
        height:(Dimensions.get("screen").height/3),
        alignSelf:"center",
        
    },
    Image:{
        width:(5 * Dimensions.get("screen").width / 11),
        height: 120,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        alignSelf:"center",
        marginBottom: 10,    
        justifyContent:"flex-start",
    
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:"white",
        textAlign:"left",
    },

    bottom_container:{
        flexDirection:"row",
        paddingTop:3,
        paddingBottom:5,
    },

    adult:{
        color:"white",
        fontSize:15,
        textAlign:"right",
        textAlignVertical:"center"

    },
    date:{
        color:"white",
        fontSize:8,
        textAlignVertical:"center",
        
    },
    vote:{
        marginBottom:"auto",
        justifyContent:"flex-end",
        alignSelf:"flex-end",
        flexDirection: 'row',
        height:5,
   
    }

})