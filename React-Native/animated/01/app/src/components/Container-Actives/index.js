import React,{useState} from 'react';
import { View , Text , Image , TouchableOpacity , Animated} from 'react-native';
import {Style} from './styles'
import {Colors} from '../../styles'

import {
    LineChart,
  } from "react-native-chart-kit";

const data ={
   
    datasets: [
        {
        data: [
            2,
           5,
            10,
           
        ]
        }
    ]
    }
export default function Container(props , number) {

    const [heightAnimation , Setheight] = useState(new Animated.Value(260))
    const [open , setOpen] = useState(true)
    const toValue = open ? 260 : 400
    const AnimationButton = () =>{
        Animated.timing(heightAnimation , {
        
            toValue,
            duration:200
        }).start()

        setOpen((value) => !value)
    }

 return (

        <Animated.View style={[Style.container, {height:heightAnimation}]}>

            <View style={[Style.cicle, {backgroundColor: Colors.typeActives[props.item.type]}]}></View>

            <View style={Style.containerInfor}>

                <Text style={{fontSize:18, fontWeight:'500'}}>{props.item.name}</Text>
                <Text>30%</Text>

                <LineChart
                        data={data}
                        width={280} // from react-native
                        height={100}
                        yAxisLabel="contas "
                        yAxisInterval={1} // optional, defaults to 1
                        
                        chartConfig={{

                        propsForHorizontalLabels:{
                            fontSize:0

                        },
                        backgroundColor: Colors.color,
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                         // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(155, 255, 255, ${opacity})`,
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            
                        }
                        }}
                        
                        
                        style={{
                        marginVertical: 8,
                        borderRadius: 5,

                        }}
                    />

                    <Text>p/vp</Text>

                    <TouchableOpacity onPress={() =>AnimationButton()}>
                        <Image source={require('../../assets/down-arrow.png')} resizeMode='contain' style={{width:30}}/>
                    </TouchableOpacity>
                   

            </View>

        </Animated.View>

  );
}