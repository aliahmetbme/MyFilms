import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create(
    {
        container:{
            marginTop:10
          },
          seperator:{
            width:Dimensions.get("screen").width,
            backgroundColor:'gray'
          },
          button:{
            borderRadius:10,
            backgroundColor:'black',
            margin:10,
            borderColor:'red',
            borderWidth:1,
            padding:5,
            width:Dimensions.get("screen").width / 4
          },
          buttonText:{
            color:'white',
            fontSize:12,
            textAlign:'center',
            justifyContent :  "center"
          }
    }
)

