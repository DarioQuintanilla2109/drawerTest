import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NotificationScreen from './NotificationScreen'
const Stack = createStackNavigator()

export default function Stack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Notification' component={NotificationScreen} />
    </Stack.Navigator>
  )
}
