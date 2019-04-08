import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View,TouchableHighlight,StyleSheet,Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Left,Right,Card,Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Button,Icon } from 'react-native-elements';
import Help from '../Accountssubpage/Help';
import Notification from '../Accountssubpage/Notification';
import Profile from '../Accountssubpage/Profile';
import Address from '../Accountssubpage/Address';
import LinksScreen from './LinksScreen';

import ExpoLinksScreen from '@expo/samples/ExpoLinksView';
class SettingsScreen extends React.Component {
  static navigationOptions = { 
    title:'My Account',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor:'#3c3b5c',
      fontSize:7,
      fontWeight:'normal'
    },
  };


  
  render() {
    return(
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    <View style={{ flex: 1,backgroundColor:'#f2efef' }}>
  
      <Card style={{flexDirection:'row',width:355,height:65}}> 
      <Left style={{paddingLeft:5,flexDirection:'row'}}>
        <Icon name='ios-contact' color='grey' size={50} type='ionicon'/>
        
        <View style={{flexDirection:'column',alignContent:'flex-start'}}>
        <Text style={{fontWeight:'bold',paddingTop:7,paddingLeft:5}}>abirami</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'grey',fontSize:12,paddingLeft:5}}>901234578 </Text>
        <Text style={{color:'grey',fontSize:12,paddingLeft:5}}>|</Text>
        <Text style={{color:'grey',fontSize:12,paddingLeft:5}}>abc@gmail.com</Text>
        </View>
      </View>
      </Left>
      <Right style={{paddingRight:5}}>
        <Icon name='ios-create' color='grey' size={25} type='ionicon' onPress={() => this.props.navigation.navigate('profile')} />
        </Right>
      </Card>
    
      <Card>
      <List>
            <ListItem onPress={() => this.props.navigation.navigate('notification')}>
              <Left>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={require('../assets/images/notification.png')} style={{height:23,width:23}}/>
                <Text style={{paddingLeft:10}}>Notification</Text>
                </View>
              </Left>
              <Right>
              <Ionicons name="ios-arrow-forward" size={20}/>
              </Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('links')}>
             <Left>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <Image source={require('../assets/images/truck.png')} style={{height:23,width:23}}/>
                <Text style={{paddingLeft:10}}>My orders</Text>
                </View>
              </Left>
              <Right>
              <Ionicons name="ios-arrow-forward" size={20}/>
              </Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('address')}>
              <Left>
              <Image source={require('../assets/images/location.png')} style={{height:23,width:23}}/>
                <Text style={{paddingLeft:10}}>Manage Address</Text>
              </Left>
              <Right>
              <Ionicons name="ios-arrow-forward" size={20}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
              <Image source={require('../assets/images/wallet.png')} style={{height:23,width:23}}/>
                <Text style={{paddingLeft:10}}>My Wallet</Text>
              </Left>
              <Right>
              <Ionicons name="ios-arrow-forward" size={20}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
              <Image source={require('../assets/images/star.png')} style={{height:23,width:23}}/>
                <Text style={{paddingLeft:10}}>Rate Us</Text>
              </Left>
              <Right>
              <Ionicons name="ios-arrow-forward" size={20}/>
              </Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('help')}>
              <Left>
              <Image source={require('../assets/images/info.png')} style={{height:23,width:23}}/>
                <Text style={{paddingLeft:10}}>Help</Text>
              </Left>
              <Right>
              <Ionicons name="ios-arrow-forward" size={20}/>
              </Right>
            </ListItem>
          </List>
      </Card>
      <Card style={{width:355,height:50}}>
        <Text style={{color:'red',fontWeight:'500',paddingLeft:140,paddingTop:15}}>SIGN OUT</Text>
       </Card>
  </View>
    ) 
  }
}

const stemstack = createStackNavigator({
  account: SettingsScreen,
  notification:Notification,
  help:Help,
  profile:Profile,
  address:Address,
  links:LinksScreen,
  
},
{
  initialRouteName: 'account',
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