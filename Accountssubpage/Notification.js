import React, { Component } from 'react'
import {Text,View,Image} from 'react-native'
export class Notification extends Component {

    static navigationOptions = { 
        title:'Notifications',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor:'#3c3b5c',
          fontSize:7,
          fontWeight:'normal'
        },
      };
    

  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
                   <View style={{paddingTop:170}}>
                    <Image source={require('../assets/images/bell.png')} style={{height:100,width:100}}/>
                    </View>
                    <View>
                        <View>
                    <Text style={{color:'grey'}}>You have no notifications at the moment</Text>
                    </View>
                    </View>
     
     </View>
    )
  }
}

export default Notification
