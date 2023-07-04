import React from 'react'
import LottieView from 'lottie-react-native'

function Loading({autoPlay}){
    return(
        <LottieView source={require("../../assert/94379-loading-animation.json")} >
       </LottieView>
    )
}

export default Loading;