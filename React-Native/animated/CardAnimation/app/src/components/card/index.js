import React, { Component } from 'react';
import { View ,  Image , Text , TouchableOpacity , Animated} from 'react-native';
import { styles } from './styles';

export default class Card extends Component {

    animation = new Animated.Value(0)

    

    FunctionAnimation = () =>{
        const toValue = this.open ? 0 : 1
       Animated.timing(this.animation, {
           toValue,
           useNativeDriver:false,
           duration:400

       }).start()

       this.open = !this.open

    }
       
    
 render(){
   

   const pointStyle ={
    transform:[

        {translateX: this.props.data.left},
        {translateY: 50},
        {
            
            translateX: this.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-100]
            })
        }
    ]
}

   

  return (

    <Animated.View style={[styles.container , pointStyle]}>

        <TouchableOpacity onPress={this.FunctionAnimation} style={{flex:1}}>

                <Image source={this.props.data.path } resizeMode='cover' style={{width:'100%' , height:'40%'}}/>

        </TouchableOpacity>

    </Animated.View>
   );
 }
}