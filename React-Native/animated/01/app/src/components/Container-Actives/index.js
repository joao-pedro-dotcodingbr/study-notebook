import React from 'react';
import { View , Text} from 'react-native';
import {Style} from './styles'
import {Colors} from '../../styles'
export default function Container(props , number) {

 return (

        <View style={Style.container}>

            <View style={[Style.cicle, {backgroundColor: Colors.typeActives[props.item.type]}]}></View>

            <View style={Style.containerInfor}>

                <Text>{props.item.name}</Text>

            </View>
            
            
        </View>

  );
}