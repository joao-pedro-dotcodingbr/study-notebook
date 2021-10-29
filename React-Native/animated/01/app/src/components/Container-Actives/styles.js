import {StyleSheet , Dimensions} from 'react-native'

const {width}  = Dimensions.get('window')
export const Style = StyleSheet.create({

    container:{

        backgroundColor:'#fff',
        width: width * 0.60,
        height: 260,
        borderRadius:10,
        marginRight:10,
        marginLeft:30


    },
    cicle:{

        width: 10,
        height: 10,
        borderRadius:10,
        marginTop:10,
        marginLeft:10

    },

    containerInfor:{
        alignSelf:'center'
    }

})