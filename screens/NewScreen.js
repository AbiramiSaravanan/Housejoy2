import React from 'react';
import {View,TouchableOpacity,StyleSheet} from "react-native";
import {Button} from "native-base";
import {ListItem, Divider,Text,CheckBox,Image } from "react-native-elements"; 
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import Reuse from './Reuse'
const sample = require('./sample.json')

 export default class WorkersScreen extends React.Component {
   
  static navigationOptions = {
    title:'Workers',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor:'#3c3b5c'
    },
  }


  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    active1: false, itemSelected:''
  }
  
  changecolor =() => {
    // this.setState({active: !this.state.active1})
  }
  
  handleClick =(id)=>{
    //console.log(id)
    this.setState({itemSelected:id})
  }
    render() {
      
      return (      
        <View>
           {
             sample.map((item,i)=>{
               return (<Reuse item={item} id={i} key={i} setColor={this.state.itemSelected==i?true:false}   handleClick={this.handleClick}/>)
             })

           }
  <Button transparent primary>
            <Text style={{fontWeight:'bold',fontSize:15,color:'gray',textDecorationLine:'underline',TextAlign:'center'}}>skip>></Text>
  </Button>
  <Button onPress={()=>this.props.navigation.navigate('CartScreen')}
          rounded block danger style={{width:widthPercentageToDP('90%')}}>
    <Text style={{color:'white'}}>ADD TO CART</Text>
  </Button>
  </View>
      );
    }
  }

const styles = StyleSheet.create({
  btnActive: {
    backgroundColor: 'yellow',
  },
  btn: {
    backgroundColor: 'white',
  },
  
})
