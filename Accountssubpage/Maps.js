import React, { Component } from 'react'
import {View,Text,Image} from 'react-native'
import {Card,Left,Right,Button} from 'native-base'
import { Divider,Icon } from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


var options=[
  {label:"Home",value:0},
  {label:"work",value:1},
  {label:"others",value:2},
          ];

export class Maps extends Component{

    static navigationOptions = { 
        title:'Add Address',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor:'#3c3b5c',
          fontSize:7,
          fontWeight:'normal'
        },
      };



     

  render() {
    return (
      <View style={{flex:1}}>
      <Card style={{height:360,width:355}}>
      <Text>map</Text>
      </Card>
      <View style={{flexDirection:'row',height:35}}>
       <Left>
              <Image source={require('../assets/images/location.png')} style={{height:15,width:15}}/>
              </Left>
      <Text style={{paddingTop:5}}>address</Text>
      <Right style={{paddingRight:5}}>
        <Icon name='ios-create' color='grey' size={18} type='ionicon' />
        </Right>
       </View>
       <Divider/>
       <View style={{paddingTop:4}}>
      <RadioForm  style={{flexDirection:'row',justifyContent:'space-evenly'}}
      iconlabel={'home'}
      radio_props={options}
      onPress={(value)=>{}}
      buttonColor={'grey'}
      selectedButtonColor={'red'}
      buttonSize={12}
       />
       </View>
       <View style={{alignContent:'center',alignItems:'center',paddingVertical:18,padding:'5%'}}>
       <Button rounded block danger style={{width:widthPercentageToDP('90%')}}>
            <Text style={{color:'white',fontWeight:'bold'}}>Save and Proceed</Text>
          </Button> 
       </View>
       </View>

    )
  }
}

export default Maps
