import React, { Component } from 'react'
import {View,Text} from 'react-native';
import {Card, Left,Right,Icon} from 'native-base';
import Maps from './Maps';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Address extends Component {

    static navigationOptions = { 
        title:'Manage Address',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor:'#3c3b5c',
          fontSize:7,
          fontWeight:'normal'
        },
      };
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#f2efef'}}>
<View style={{height:50,backgroundColor:'white'}} >
<Text style={{color:'red',paddingTop:10,paddingLeft:10,fontSize:17}} onPress={() => this.props.navigation.navigate('map')}>+ ADD ADDRESS</Text>
</View>
<Card>
  <View style={{flexDirection:'row'}}>
<Left>
  <Icon name="home" />
  <Text>HOME</Text>
</Left>
<Right></Right>
  </View>
  <View style={{flexDirection:'column'}}>
    <Text style={{color:'grey',fontWeight:'bold'}}>abirami | 123456788 </Text>
    <Text style={{color:'grey',fontSize:12}}>----------------</Text>
    <Text style={{color:'grey',fontSize:12}}>House no/Street no</Text>
    <Text style={{color:'grey',fontSize:12}}>2nd Street, bharathi colony,Peelamedu,cbe,TN,64001,India</Text>
  </View>
  
</Card>
      </View>
    )
  }
}


const stemstack = createStackNavigator({
address:Address,
map:Maps,
  
},
{
  initialRouteName: 'address',
}

);


const AppContainer = createAppContainer(stemstack);

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <AppContainer />;
  }
}
