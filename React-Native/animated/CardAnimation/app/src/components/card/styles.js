import {StyleSheet, Dimensions} from 'react-native'

const {height, width}  = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        
        backgroundColor:'#fff',
        width: width * 0.40,
        borderRadius:  width * 0.05,
        height: height * 0.35,
        overflow: 'hidden',
        position: 'absolute',
        borderWidth:1,
        borderColor:'#000'

    }

})
