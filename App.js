import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/navigators/Routes'
import 'react-native-gesture-handler'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SafeAreaView>
  )
}