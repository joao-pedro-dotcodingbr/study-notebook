import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ScreenHome from '../screens/home/index'
const Stack = createNativeStackNavigator()

export default function index() {
    return (
       <NavigationContainer>

           <Stack.Navigator>
               <Stack.Screen name='home' options={{headerShown:false}}>

                   {props => <ScreenHome {...props}/>}
                   
               </Stack.Screen>
           </Stack.Navigator>

       </NavigationContainer>
    )
}
