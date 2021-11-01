import {StyleSheet , Dimensions} from 'react-native'

const {width}  = Dimensions.get('window')
export const Style = StyleSheet.create({

    container:{

        backgroundColor:'#fff',
        width: width * 0.80,
        borderRadius:10,
        marginRight:10


    },
    cicle:{

        width: 20,
        height: 20,
        borderRadius:20,
        marginTop:10,
        marginLeft:10

    },

    containerInfor:{
        alignSelf:'center',
        alignItems:'center'
    }

})