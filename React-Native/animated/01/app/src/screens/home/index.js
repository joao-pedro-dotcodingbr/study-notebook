import React from 'react'
import {ScrollView} from 'react-native-gesture-handler'
import { View, Text , SafeAreaView , Image , Dimensions, FlatList} from 'react-native'
import {Colors} from '../../styles'
import {Style} from './style'
import EyeSgv from '../../assets/eye.svg'
import ComponentContainer from '../../components/Container-Actives/index'
import JsonActives from '../../constant/data_user.json'
import JsonPatrimony from '../../constant/data_FullPatrimony.json'
import {
    LineChart,
  } from "react-native-chart-kit";

const data = JsonActives

export default function index() {
    return (
        <View style={{flex:1, backgroundColor: Colors.background , paddingHorizontal:30}} showsVerticalScrollIndicator={false}>

         <ScrollView showsVerticalScrollIndicator={false}>

                <View style={Style.viewTop}>

                    <Text style={Style.title}>
                        Home
                    </Text>

                    <Image source={require('../../assets/logo.png')} />

                </View>

                <View style={Style.ContainerPatri}>

                     <Text style={Style.fontMoney}>2.000</Text>

                </View>

                <View style={Style.containerChart}>

                    <LineChart
                        data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                        width={300} // from react-native
                        height={200}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        
                        backgroundColor: Colors.color,
                        backgroundGradientFrom: Colors.color,
                        backgroundGradientTo: Colors.color,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 5,

                        }}
                    />

                </View>

                <View style={{marginVertical:20}}>

                    <FlatList
                            
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            style={{flexDirection:'row'}}
                            data={data}
                            renderItem={ props => <ComponentContainer {...props} />}
                            
                    />

                </View>   

            </ScrollView>
           
        </View>
    )
}
