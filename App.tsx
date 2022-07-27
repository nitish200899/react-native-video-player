import React,{FC} from 'react'
import {View,SafeAreaView,Text,StyleSheet} from 'react-native'
import VideoPlayerComponent from './components/VideoPlayer'
//abc

const App : FC = ()=>{
  return (
    <View style = {styles.main}>
      <VideoPlayerComponent/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  main : {
    flex:1,
    alignItems : 'center'
  },
  mainText :  {
    fontWeight  : '400',
    fontSize  : 20,
    color : '#357EC7'
  }
})