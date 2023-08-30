import { Dimensions, StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{
        backgroundColor:'#010101',
        margin:10,
        borderRadius:10,
        padding:15,
        paddingTop:0,
        alignSelf:"center",
        flex:1
        
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
        textAlignVertical:"center",
    },

    bottom_container:{
        flexDirection:"row",
        marginVertical:10,
        borderRadius:10,
        flexWrap:"wrap",
        justifyContent:"space-between",
        alignItems:"center",
        flex:1
    },

    adult:{
        color:"white",
        fontSize:15,
        paddingEnd:10,
        textAlign:"right",
        textAlignVertical:"center"

    },
    date:{
        color:"white",
        fontSize:12,
        textAlignVertical:"center",
        
    },
    vote:{
        flexDirection: 'row',
        height:5,
        borderRadius:20,   
    }

})