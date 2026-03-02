import React from "react";
import {View,StyleSheet,Image}  from 'react-native';

const Splash = () => {
    return(
        <View style={styles.container}>
          <Image source={require('../foodlogo.jpg')} style={styles.foodlogo}/>
        </View>
    )

}
const styles=StyleSheet.create({
       container:{
            flex:1,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center'
       } ,

       foodlogo:{
                width:200,
                height:200
       },
    }
)



export default Splash;