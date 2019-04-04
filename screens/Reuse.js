import React from 'react';
import {View,TouchableOpacity,StyleSheet} from "react-native";
import {Button} from "native-base";
import {ListItem, Divider,Text,CheckBox,Image } from "react-native-elements"; 
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

// const sample = require('./sample.json')

 export default class Reuse extends React.Component {
   
  static navigationOptions = {
    title:'Workers',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor:'#3c3b5c'
    },
  }

  state= {
    changecolor:false
  }

  changecolor =(id) => {
    this.setState({changecolor: !this.state.changecolor})
    this.props.handleClick(id)
    // console.log(id)
  }
  
    render() {
      // color = this.state.changecolor
      return (      
        <TouchableOpacity style={{backgroundColor:this.props.setColor?'yellow':'#fff'} } 
        onPress={() => this.changecolor(this.props.id)}>
      
       <View style={{flexDirection:'row'}}>
          <ListItem
            leftAvatar={{ source: { uri:this.props.item.image }  }}/>
            <View style={{paddingTop:'4%',flexDirection:'column'}}>
            <Text style={{fontWeight:'800',fontSize:15}}>
              {this.props.item.name}
            </Text>
            <Text style={{color:'deepskyblue'}}>{'\u20B9'}{this.props.item.price}</Text>
            </View>
            <View style={{flexDirection:'row',paddingLeft:'40%',paddingTop:'5%'}}>
            <Ionicons name='md-star'
                      size={18}
                      color='gray'/>
            <Text style={{fontSize:14}}>
              {this.props.item.rating}
            </Text>
            </View>
            </View> 
        <Divider/>
        
   
       </TouchableOpacity>)
    }
  }

// const styles = StyleSheet.create({
//   btnActive: {
//     backgroundColor: 'yellow',
//   },
//   btn: {
//     backgroundColor: 'white',
//   },
  
// })
