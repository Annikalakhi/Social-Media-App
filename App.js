import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FacebookScreen from './screens/facebookScreen'
import InstagramScreen from './screens/instagramScreen'


 export default class App extends React.Component {
   render(){
     return(
    <AppContainer></AppContainer>
     )
   }
 
}
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FacebookScreen },
  Instagram:{screen:InstagramScreen}
})
const AppContainer = createAppContainer(TabNavigator)
