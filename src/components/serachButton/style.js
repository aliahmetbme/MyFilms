import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create(
    {
        container:{
            overflow:"hidden",
            marginTop:10,
            justifyContent:"center",
          },
          seperator:{
            width:Dimensions.get("screen").width,
            backgroundColor:'pink',
            justifyContent:"center"
          },
          button:{
            borderRadius:40,
            backgroundColor:'black',
            margin:10,
            borderColor:'red',
            borderWidth:1,
            padding:15,
          },
          buttonText:{
            color:'white',
            fontSize:15,
            textAlign:'center',
            justifyContent :  "center"
          }
    }
)

