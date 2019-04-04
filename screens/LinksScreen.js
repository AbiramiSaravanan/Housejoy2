import React from 'react';
import { Text, View, StyleSheet,TouchableHighlight} from 'react-native';
import {Card,Divider,Icon} from 'react-native-elements';
import {Left,Right,CardItem,Button} from 'native-base';
import { ListItem, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Jobid from '../Jobid';
import { createStackNavigator, createAppContainer } from 'react-navigation';

  class LinksScreen extends React.Component {
  static navigationOptions = {
    title:'Open orders',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor:'#333333',
      fontSize:12,
      fontWeight:'normal'
    },
    headerLeft:
      <Icon name="menu"/>,
      
    
    
  };

  
  

  render() {
    return (
      <ScrollView>
      
  <Card>
  <View style={{flex:1,flexDirection:'column'}}>
<CardItem style={{flexDirection:'row'}}>
<Left>
<Button rounded style={{width:28,height:28,backgroundColor:'#27d897', paddingLeft:4}}><Icon name='person' color='white' size={20}/></Button>
  <Text style={{fontWeight:'bold'}}> Sarav</Text>
  </Left>
<Right><Text style={{fontWeight:'bold',color:'green'}}>PROGRESS</Text></Right>
</CardItem>
<Divider/>
<CardItem style={{flexDirection:'row'}}>
<Text >Location: </Text>
<Text style={{fontWeight:'bold'}}>139</Text>
</CardItem>
<Divider/>
<CardItem style={{flexDirection:'row'}}>
<Left><Text>Job ID: </Text>
<Text style={{fontWeight:'bold'}}>908765</Text>
</Left>

  <Text>Time: </Text>
<Text style={{fontWeight:'bold'}}>29th jun 07:00 AM</Text>



</CardItem>
<Divider/>
<CardItem style={{ flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
<Button rounded style={{ backgroundColor:'#27d897',width:100,paddingLeft:20,textAlign:'center'}}>
   <Icon
  name='call' color='white' />
<Text style={{textAlign:'center',
color:'white',
paddingTop:3,fontSize:15,paddingRight:5}}>
 Call</Text></Button>
<Button rounded style={{ backgroundColor:'grey',width:110,paddingLeft:40,textAlign:'center'}} onPress={() => this.props.navigation.navigate('jobid')}>
<Text style={{textAlign:'center',
color:'white',
paddingTop:3,fontSize:15}}>
 Details</Text>
</Button></CardItem>
</View>
  </Card>
  <Card style={{width:null,height:260,flex:1}}>
  <View style={{flexDirection:'column'}}>
<CardItem style={{flexDirection:'row'}}>
<Left>
<Button rounded style={{width:28,height:28,backgroundColor:'#27d897', paddingLeft:4}}><Icon name='person' color='white' size={20}/></Button>
  <Text style={{fontWeight:'bold'}}> Sarav</Text>
  </Left>
<Right><Text style={{fontWeight:'bold',color:'green'}}>PROGRESS</Text></Right>
</CardItem>
<Divider/>
<CardItem style={{flexDirection:'row'}}>
<Text >Location: </Text>
<Text style={{fontWeight:'bold'}}>139</Text>
</CardItem>
<Divider/>
<CardItem style={{flexDirection:'row'}}>
<Left><Text>Job ID: </Text>
<Text style={{fontWeight:'bold'}}>12345</Text>
</Left>

  <Text>Time: </Text>
<Text style={{fontWeight:'bold'}}>29th jun 07:00 AM</Text>



</CardItem>
<Divider/>
<CardItem style={{ flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
<Button rounded style={{ backgroundColor:'#27d897',width:110,paddingLeft:20,textAlign:'center'}}>

           <Icon
  name='call' color='white'/>
<Text style={{textAlign:'center',
color:'white',
paddingTop:3,fontSize:15}}>
 Call</Text>
 
 
</Button>
<Button rounded style={{ backgroundColor:'grey',width:110,paddingLeft:40,textAlign:'center'}} onPress={() => this.props.navigation.navigate('jobid')} ><Text style={{textAlign:'center',color:'white',paddingTop:3,fontSize:15}} >Details</Text></Button>
</CardItem>
</View>
  </Card>
      
      </ScrollView>
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

const Rootstack = createStackNavigator({
  link: LinksScreen,
  jobid: Jobid,
},
{
  initialRouteName: 'link',
}

);


const AppContainer = createAppContainer(Rootstack);

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <AppContainer />;
  }
}
