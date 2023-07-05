import React from 'react';
import LottieView from 'lottie-react-native';
import {View, ActivityIndicator} from 'react-native';

function Loading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default Loading;
