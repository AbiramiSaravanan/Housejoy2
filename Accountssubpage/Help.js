import React, { Component } from 'react'
import {Text,View} from 'react-native';
import { List,ListItem, Left } from 'native-base';

export class Help extends Component {

    static navigationOptions = { 
        title:'Help',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor:'#3c3b5c',
          fontSize:7,
          fontWeight:'normal'
        },
      };
    

  render() {
    return (
    <View>
        <List>
            <ListItem>
                <Left>
                    <Text style={{color:'#333333',fontSize:19,fontWeight:'400'}}>Contact Us</Text>
                </Left>
            </ListItem>
            <ListItem>
                <Left>
                    <Text style={{color:'#333333',fontSize:19,fontWeight:'400'}}>FAQ & Terms</Text>
                </Left>
            </ListItem>
            <ListItem>
                <Left>
                    <Text style={{color:'#333333',fontSize:19,fontWeight:'400'}}>Privacy Policy</Text>
                </Left>
            </ListItem>
            <ListItem>
                <Left>
                    <Text style={{color:'#333333',fontSize:19,fontWeight:'400'}}>About Us</Text>
                </Left>
            </ListItem>
        </List>
    </View>
    )
  }
}

export default Help
