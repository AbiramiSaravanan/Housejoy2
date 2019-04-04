import React, { Component } from 'react'
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from 'react-native';
import { SearchBar,TouchableHighlight,Badge } from 'react-native-elements';


import { Carousel } from '@ant-design/react-native';

import { Container, Item, Input, Picker, Form ,Icon, Header,Button,Content,Thumbnail,List,Radio,ListItem,CheckBox,Left, Right, Body,Separator,Tab, Tabs,Card,CardItem, Title} from 'native-base';
import { HeaderStyleInterpolator, HeaderBackButton } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
export class Subscription extends Component {

  static navigationOptions = {
    title:'Subscription',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor:'#3c3b5c',
      
    },
   headerRight:
     <Ionicons name="ios-funnel" size={22} color="white" paddingLeft={20} />,
     marginRight:20,
     
  
    
  };


  

  render() {
    return (
      <ScrollView>
      <View>

      {/* <Header style={{backgroundColor:'#3c3b5c',height:150}}>
     <View style={{flex:1,flexDirection:'row'}}>
     <Left>
        <Icon name="leftarrow" style={{color:'white'}}/> 
       <Text style={{color:'white'}}>Subscriptions</Text>
       </Left>
       <Right>
         <Icon name="filter" style={{color:'white'}}/> 
        </Right>
     </View>
     </Header> */}
     <Content>
       <View style={{flex:1,flexDirection:'row',borderBottomColor: 'grey',borderBottomWidth:0.5}}>
       <View style={{padding:10}}>
         <Image source={{uri:'https://www.terminix.com/static-srvm/images/pest-control/cockroaches/BrownCockroach.jpg'}} style={{height: 80, width: 100}}/>
         </View>
         <View style={{flex:1,flexDirection:'column',padding:10}}>
              
              <Text style={{color:'black',fontWeight:'bold'}}>Cockroach Control</Text>
              <Text style={{color:'black',fontSize:12}}>Avail 3 services and get 20% off</Text>
               <View style={{flex:1,flexDirection:'row'}}> 
              <Text style={{color:'grey',textDecorationLine:'line-through',fontSize:13}}>2,2247</Text>
              <Text  style={{color:'black',fontSize:13,fontWeight:'bold'}}>   1,797   </Text>
              <Text style={{color:'green',fontSize:13}}>20% off</Text>
              </View>
              </View>
              
       </View>
       <View>
              <CheckBox checked={true} type="rounded"  />
              </View>

              <ListItem selected={false} >
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
            </Right>
          </ListItem>

              
     </Content>
    
        </View>
        </ScrollView>
        
      
    )
  }
}

export default Subscription
