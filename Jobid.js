import React from 'react';
import { Text, View, StyleSheet,TouchableHighlight} from 'react-native';
import {Card,Divider,Icon} from 'react-native-elements';
import {Left,Right,CardItem,Button} from 'native-base';
import { ListItem, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';
export default class Jobid extends React.Component {
  static navigationOptions = {
    title:'Job Id:963727',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor:'#333333',
      fontSize:12,
      fontWeight:'normal'
    },
    
    
    
  };

  
  

  render() {
    return (
      <View>
      <ScrollView>
      
  <Card style={{width:null,flex:1}}>
  <View style={{flexDirection:'column'}}>

<CardItem style={{flexDirection:'row'}}>
<Left>
  <View style={{flexDirection:'column'}}>
  <Text style={{fontWeight:'bold'}}>Order Status</Text>
  <Text style={{color:'#27d897',fontWeight:'500'}}>PROGRESS</Text>
  </View>
  </Left>
<Right>
<Button rounded style={{ backgroundColor:'#27d897',width:100,paddingLeft:20,textAlign:'center'}}><Icon name='call' color='white' size={25}/><Text style={{textAlign:'center',color:'white',paddingTop:3,fontSize:15}}>Call</Text></Button>
</Right>
</CardItem>
<Divider/>
<CardItem style={{flexDirection:'row'}}>
<Left>
  <View style={{flexDirection:'column'}}>
  <Text>Time:</Text>
  <Text style={{color:'black',fontWeight:'500'}}>29th jun 2016 at 09:00 AM</Text>
  </View>
  </Left>
<Right>
<Button rounded style={{ backgroundColor:'white',width:100,paddingLeft:20,textAlign:'center'}}><Ionicons name="ios-chatboxes" size={25}/><Text style={{textAlign:'center',color:'black',paddingTop:3,fontSize:15}}>  SMS</Text></Button>
</Right>


</CardItem>
<Divider/>
<CardItem style={{flexDirection:'row'}}>
<Left>
  <View style={{flexDirection:'column'}}>
  <Text>Address :</Text>
  <Text style={{color:'black',fontWeight:'500'}}>Sarav</Text>
  <Text style={{color:'black',fontWeight:'500'}}>178</Text>

  </View>
  </Left>
<Right>
<Button rounded style={{ backgroundColor:'white',width:100,paddingLeft:20,textAlign:'center'}}><Ionicons name="ios-pin" size={25}/><Text style={{textAlign:'center',color:'black',paddingTop:3,fontSize:15}}>  Map</Text></Button>
</Right>
</CardItem>
<Divider/>
<CardItem style={{flexDirection:'row'}}>
<Left>
  <View style={{flexDirection:'column'}}>
  <Text>Services :</Text>
  <Text style={{color:'black',fontWeight:'500'}}>(1) Fans -ceiling Fan</Text>
  <Text style={{color:'grey',fontWeight:'200'}}>Service Removal</Text>

  </View>
  </Left>
</CardItem>
</View>
  </Card>
  </ScrollView>
  <View style={{flex:1,paddingTop:60,paddingLeft:100}}>
  <Button style={{backgroundColor:'grey',
      width:150,
     paddingLeft:40,
      textAlign:'center',}}>
<Text style={{textAlign:'center',
color:'white',
paddingTop:5,fontSize:20,paddingLeft:10}}>
 Finish</Text>
 </Button>    
 </View>       
   </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  icontext:{
  
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    paddingRight:30,
},
});
