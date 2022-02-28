import React from 'react';
import Header from './src/component/Header';
import Carlist from './src/component/Carlist';
import { View } from 'react-native';


const App = ()=>{
  return(
    <View>
      <Header titile={"cars"}/>
      <Carlist/>
    </View>
  )
}

export default App;
