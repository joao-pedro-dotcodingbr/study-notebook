import React, { Component , useState} from 'react';
import { View , Text , Image , FlatList} from 'react-native';
import { styles } from './styles';
import Card from '../../components/card/index'
import JsonData from '../../constants/list.json'
import data from '../../constants/data'



export default class home extends Component {
 render(){

  return (
    <View style={styles.container}>

        <View style={styles.containerTop}>

            <Text style={styles.title}>Lugares</Text>

                

        </View>

        <View style={styles.containerTop}>

           {data.data.map(( item , index) => <Card data={item} index={index}/>)}
        </View>


    </View>
   );
 }
}