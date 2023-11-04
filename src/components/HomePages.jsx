//rnfe --snippets

import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListPages from './ListPages'
import UpdatePages from './UpdatePages'

const HomePages = () => {
  const Stack=createNativeStackNavigator();
  return (
  <Stack.Navigator initialRouteName='ListPages' screenOptions={{headerShown:false}}>
    < Stack.Screen name='ListPages' component={ListPages}/>
    < Stack.Screen name='UpdatePages' component={UpdatePages}/>
  </Stack.Navigator>
  )
}

export default HomePages