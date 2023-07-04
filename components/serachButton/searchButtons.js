import React from "react"
import { TouchableOpacity, Text, View} from 'react-native'
import styles from "./style"

function SearchButtons(props) {
    return (
      <View style={{flexDirection:'row', justifyContent:"space-around"}}>
          <TouchableOpacity style={styles.button} onPress={props.AvaliableSearch}  >
            <Text style={styles.buttonText}> various 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={props.InAvaliableSearch} >
            <Text style={styles.buttonText}> various 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={props.showAllSong}>
            <Text style={styles.buttonText}> various 3 </Text>
          </TouchableOpacity>
        </View>
    )
}

export default SearchButtons;
  