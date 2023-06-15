import React from 'react'
import { View  , ActivityIndicator} from 'react-native'
import { Overlay , Text } from '@rneui/base';
import { styles } from './LoadingModal.styles';


const LoadingModal=(props)=>{
  const {show = false, text} = props;
  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680" />
        {text && <Text style={styles.text}>{Text}</Text>}
      </View>
    </Overlay>
  )
}

export default LoadingModal;