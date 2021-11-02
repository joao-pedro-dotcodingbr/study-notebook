import React, { Component } from 'react'
import {View , Text , TouchableOpacity , Animated , Image, StyleSheet} from 'react-native'
import FabButton from '../../components/FabButton'


export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>teste</Text>

                <FabButton style={{bottom:80 , right:60}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#dfe6e9'
    },
    title:{
        alignSelf:'center',
        fontSize:20,
        marginTop: 10,
        
    }
})