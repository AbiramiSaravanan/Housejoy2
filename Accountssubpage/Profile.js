import React, { Component } from 'react'
import {Text,View,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import {Button,Form,Item,Input} from 'native-base';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export class Profile extends Component {

    static navigationOptions = { 
        title:'My Profile',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor:'#3c3b5c',
          fontSize:7,
          fontWeight:'normal'
        },
      };
    

  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#f2efef'}}>
     <View style={{alignItems:'center',height:170,paddingVertical:25}}>
     <Image source={require('../assets/images/user.png')} style={{height:100,width:100}}/>
     </View>
     <View style={{backgroundColor:'white'}}>
     <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <Input placeholder="Mobile Number" />
            </Item>     
    
</Form>
    <View style={{backgroundColor:'white',height:80,alignContent:'center',alignItems:'center',paddingVertical:18,padding:'5%'}}>
            <Button rounded block danger style={{width:widthPercentageToDP('90%')}}>
            <Text style={{color:'white'}}>UPDATE</Text>
          </Button>  
          </View>   
     </View>
    
     </View>
    )
  }
}

export default Profile
