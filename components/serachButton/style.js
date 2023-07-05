import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create(
    {
        container:{
            marginTop:10
          },
          seperator:{
            width:Dimensions.get("screen").width,
            height:1,
            backgroundColor:'gray'
          },
          button:{
            borderRadius:10,
            backgroundColor:'gray',
            padding:5,
            margin:10,
            borderColor:'black',
            borderWidth:1,
            width:Dimensions.get("screen").width / 4
          },
          buttonText:{
            color:'black',
            fontSize:12,
            textAlign:'center'
          }
    }
)

