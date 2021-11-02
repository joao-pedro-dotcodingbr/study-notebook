import React, { Component } from 'react';
import { View , Text , StyleSheet , TouchableWithoutFeedback, Animated , Image} from 'react-native';
const Icons = {
    Plus:require('../assets/plus.png'),
    Point:require('../assets/placeholder-filled-point.png'),
    User: require('../assets/user.png')
}

export default class FabButton extends Component {

    animation = new Animated.Value(0)

    ToggleMenu = () =>{
        const toValue = this.open ? 0 :1

        Animated.spring(this.animation , {
            toValue,
            useNativeDriver:false,
            friction:6
            
        }).start()

        this.open = !this.open
    }

   
 render(){

    const rotation = {

        transform:[
            {
                rotate:this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg']

                })
            }
        ]

    }

    const pointStyle ={
        transform:[
            {scale: this.animation},
            {
                translateY: this.animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,-50]
                })
            }
        ]
    }

    const userStyle ={
        transform:[
            {scale: this.animation},
            {
                translateY: this.animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,-100]
                })
            }
        ]
    }

  return (
   <View style={[styles.container , this.props.style]}>

       <TouchableWithoutFeedback>
           <Animated.View style={[styles.button, styles.submenu , userStyle]}>
               <Image source={Icons.User} resizeMode='contain'style={{width:15}}/>
           </Animated.View>
       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback>
           <Animated.View style={[styles.button, styles.submenu , pointStyle]}>
               <Image source={Icons.Point} resizeMode='contain'style={{width:15}}/>
           </Animated.View>
       </TouchableWithoutFeedback>


       <TouchableWithoutFeedback onPress={this.ToggleMenu}>
           <Animated.View style={[styles.button, styles.menu , rotation]}>
               <Image source={Icons.Plus} resizeMode='contain'style={{width:20}}/>
           </Animated.View>
       </TouchableWithoutFeedback>


   </View>
   );
 }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        position:'absolute',
        
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        shadowRadius:10,
        shadowColor:'#f7d794',
        shadowOpacity:0.8,
        shadowOffset:{
            height: 10,
            width: 10
        },
        elevation: 20

    },
    submenu:{

        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor:'#fff'

    },
    menu:{
        backgroundColor:'#fff'
    }
})