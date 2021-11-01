import React, {useEffect, useState} from 'react'
import { View, Text , Image , Animated} from 'react-native'

export default function index() {

    const [animationWidth , setAnimationWidth] = useState(new Animated.Value(100))
    const [animationHeigth , setAnimationHeigth] = useState(new Animated.Value(50))
    const [animationOpacity , setAnimationOpacity] = useState(new Animated.Value(0))

    Animated.sequence([
        Animated.timing(animationWidth ,{
            toValue:500,
            duration:2000,
            useNativeDriver:false
            
        }),

        Animated.timing(animationHeigth ,{
            toValue:700,
            duration:1000,
            useNativeDriver:false
            
        }),
        Animated.timing(animationOpacity , {
            toValue:1,
            duration:1000,
            useNativeDriver:false

        })
    ]).start()

    return (
        <View style={{flex:1 , alignItems:'center' , justifyContent:'center'}}>
            <Animated.View style={{backgroundColor:'#74b9ff', alignItems:'center', justifyContent:'center', width:animationWidth, height:animationHeigth}}>
                <Animated.Text style={{color:'#fff', opacity: animationOpacity, fontSize:20}}>Splach</Animated.Text>
            </Animated.View>
        </View>
    )
}
