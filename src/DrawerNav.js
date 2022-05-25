import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Stack1 from './Stack1'
import Stack2 from './Stack2'
const Drawer = createDrawerNavigator()

export default function DrawerNav() {
  return (
    <Drawer.Navigator swipeEdgeWidth={250} drawerPosition='right'>
      <Drawer.Screen name='Home' component={Stack1} />
      <Drawer.Screen name='Notifications' component={Stack2} />
    </Drawer.Navigator>
  )
}
