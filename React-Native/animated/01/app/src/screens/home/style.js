import {StyleSheet , Dimensions} from 'react-native'

const {width}  = Dimensions.get('window')
export const Style = StyleSheet.create({

    viewTop:{

        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        marginHorizontal:30,
   
        
        
    },
    title:{

        fontFamily:'FredokaOne-Regular', 
        fontSize:40,
        color: '#A29BFE'

    },
    ContainerPatri:{
        
        width: '88%',
        padding: 15,
        flexDirection:'row',
        borderRadius:5,
        marginTop:20,
        
        backgroundColor:'#fff',
        alignSelf:'center',
        justifyContent:'center'
    },
    fontMoney:{
        fontWeight:'800',
        fontSize:15
    },
    containerChart:{

        width: '88%',
        padding: 15,
        borderRadius:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        marginTop:20,

    }

})