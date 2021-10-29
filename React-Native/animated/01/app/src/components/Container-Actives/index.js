import React from 'react';
import { View , Text} from 'react-native';
import {Style} from './styles'

export default function Container(props , number) {

 return (

        <View style={Style.container}>

            <View style={[Style.cicle, {backgroundColor:'red'}]}></View>

            <View style={Style.containerInfor}>

                <Text>{props.item.name}</Text>

            </View>
            
            
        </View>

  );
}