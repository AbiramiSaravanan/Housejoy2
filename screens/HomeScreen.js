import React from 'react';
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
import { SearchBar,TouchableHighlight,Badge} from 'react-native-elements';
import {Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import LinksScreen from './LinksScreen';
import Jobid from '../Jobid';

import { Carousel } from '@ant-design/react-native';

import { Container, Item, Input, Icon, Header,Content,Thumbnail,List,ListItem,Left, Right, Body,Separator,Tab, Tabs,Card,CardItem, Title} from 'native-base';
import Subscription from '../Subscription';

 class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({ search });
  };



 

  render() {
    const { search } = this.state;

    

    return (
      <ScrollView>
      <View>
      <ImageBackground source={{uri:"https://images.pexels.com/photos/1531677/pexels-photo-1531677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} style={{width: '100%', height: '100%'}}>

     <Header style={{backgroundColor:'#3c3b5c',height:150}}>
     <View style={styles.headerfull}>
     <View style={styles.locationcart}>
     <Left>
     <Text style={{textAlign:'left',color:'white',fontSize:10}}> Your Location</Text>
       <Text style={{textAlign:'left',color:'white',fontSize:15}}>Address <Icon name="arrow-dropdown" style={{color:'white',fontSize:17}}/></Text>
    </Left>

      <Right>
     <Icon  name="cart" style={{color:'white'}}/>
       </Right>
      </View>
      <View style={{paddingVertical:20}}>
      <SearchBar style={styles.searchbar}
        placeholder="search for a service"
        platform="android"
        onChangeText={this.updateSearch}
        value={search}
 />
      </View>
      </View>
     </Header>
    
    <Carousel 
            
            selectedIndex={2}
            
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            <View style={[
                styles.containerHorizontal, ]}>
               <Image source={{uri: 'https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg'}} style={{height: 200, width: 500,marginLeft:55}}/>
            </View>
            <View
              style={[styles.containerHorizontal]}
            >
              <Image source={{uri: 'https://cdn.pixabay.com/photo/2013/01/04/11/32/toronto-73508_960_720.jpg'}} style={{height: 200, width: 500,marginLeft:55}}/>
            </View>
            <View
              style={[
                styles.containerHorizontal,
               
              ]}
            >
              <Image source={{uri: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/01/26/104970968-GettyImages-160330770.600x400.jpg?v=1516991794'}} style={{height: 200, width: 500,marginLeft:55}}/>
            </View>
          </Carousel>
      
           <Card style={{width:355,height:132}}>
           <View >
             <View style={styles.servicesiconrowone}>
         
  <CardItem style={{
    borderBottomColor: 'grey',
    borderBottomWidth:0.3,
    borderRightWidth: 0.3,
    borderRightColor: 'grey',
  }}>
  <View style={{flexDirection:'column',alignItems:'center',width:82}}>
  <Icon name="home"> </Icon>
  <Text style={{fontSize:12}}>Home Cleaning</Text>
  </View>
  </CardItem>

  <CardItem style={{
    borderBottomColor: 'grey',
    borderBottomWidth:0.3,
    borderRightWidth: 0.3,
    borderRightColor: 'grey',
  }}>
  <View style={{flexDirection:'column',alignItems:'center',width:82}}>
  <Icon name="home"> </Icon>
  <Text style={{fontSize:12}}>Pest Control</Text>
  </View>
  </CardItem>

  <CardItem style={{
    borderBottomColor: 'grey',
    borderBottomWidth:0.3,
    borderRightWidth: 0.3,
    borderRightColor: 'grey',
  }}>
  <View style={{flexDirection:'column',alignItems:'center',width:82}}>
  <Icon name="home"> </Icon>
  <Text style={{fontSize:12}}>Carpentry</Text>
  </View>
  </CardItem>
 </View>

  <View style={styles.servicesiconrowtwo}>
    <CardItem style={{
    borderBottomColor: 'grey',
    borderBottomWidth:0.3,
    borderRightWidth: 0.3,
    borderRightColor: 'grey',
  }}>
  <View style={{flexDirection:'column',alignItems:'center',width:82}}>
  <Icon name="home"> </Icon>
  <Text style={{fontSize:12}}>Electrical</Text>
  </View>
  </CardItem> 
  <CardItem style={{
    borderBottomColor: 'grey',
    borderBottomWidth:0.3,
    borderRightWidth: 0.3,
    borderRightColor: 'grey',
  }}>
  <View style={{flexDirection:'column',alignItems:'center',width:82}}>
  <Icon name="home"> </Icon>
  <Text style={{fontSize:12}}>Appliances</Text>
  </View>
  </CardItem> 
  <CardItem style={{
    borderBottomColor: 'grey',
    borderBottomWidth:0.3,
    borderRightWidth: 0.3,
    borderRightColor: 'grey',
  }}>
  <View style={{flexDirection:'column',alignItems:'center',width:82}}>
  <Icon name="home"> </Icon>
  <Text style={{fontSize:12}}>Plumbings</Text>
  </View>
  </CardItem> 
  
             </View>
             {/* <Icon name="home">
             </Icon>
 <Text>{"\n"}</Text> 
             <Text>home</Text> */}
             </View>
           </Card>
          <Card style={{width:355,height:260}}>
          <View style={{flex:1,flexDirection:'column'}}>
<CardItem>
  <Text>AC services</Text>
</CardItem>
<CardItem>
<View style={styles.twocardsinglerow}>
<ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
           <Card style={styles.cardrow} >
           <CardItem cardBody>
              <Image source={{uri: 'http://www.bnyconline.com/common/images/products/large/CAW348-8506_1.JPG'}} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Dry servicing</Text>
            </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
              <Image source={{uri: 'https://assets.abfrlcdn.com/img/app/categorymedia/production/7/77-37-6475.jpg'}} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Installation{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
              <Image source={{uri: 'https://assets.abfrlcdn.com/img/app/categorymedia/production/7/77-37-6475.jpg'}} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Installation{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
              <Image source={{uri: 'https://assets.abfrlcdn.com/img/app/categorymedia/production/7/77-37-6475.jpg'}} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Installation{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
              <Image source={{uri: 'https://assets.abfrlcdn.com/img/app/categorymedia/production/7/77-37-6475.jpg'}} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Installation{"\n"}</Text>
             
           </Card>
           </ScrollView>
</View>
         </CardItem>
         </View>
          </Card>
          
          <Card style={{width:355,height:200}}>
          <View style={{flex:1,flexDirection:'column',paddingBottom:20,padding:10}}>
          <View style={{flex:1,flexDirection:'row'}}>
            <Left style={{flex:1,flexDirection:'row'}}>
            <Text>Subscriptions  </Text>
            <Badge status="warning" value={<Text>   Newly Launched   </Text>} ></Badge>
            </Left>
            <Right>
            <Button transparent>
                  <Text style={{color:'red'}} onPress={() => this.props.navigation.navigate('subscription')}>VIEW ALL</Text>
                </Button>
            </Right>
          </View>
          <View>
          <CardItem cardBody>
              <ImageBackground source={{uri: 'https://www.terminix.com/static-srvm/images/pest-control/cockroaches/BrownCockroach.jpg'}} style={{height: 130, width: 180}}>
              <View style={{flex:1,flexDirection:'column',paddingTop:40,padding:10}}>
              <Text style={{color:'white'}}>Cockroach Control</Text>
              <Text style={{color:'blue',fontSize:13}}>Avail 3 services and get 20% off</Text>
              <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{color:'white',textDecorationLine:'line-through',fontSize:13}}>2,2247</Text>
              <Text  style={{color:'yellow',fontSize:13}}>   1,797  </Text>
              <Text style={{color:'green',fontSize:13}}>20% off</Text>
              </View>
              </View>
              </ImageBackground>
            </CardItem>
          </View>
         </View>
          </Card>
          <View opacity={0.2}>
          <Card style={{width:355,height:150}}>
          
           <Body>
           <View style={{flexDirection:'row',paddingTop:10}}>
           <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/business-economic-3/65/79-512.png'}} style={{height: 40, width: 40,paddingLeft:40}}/>
           <Text style={{ fontWeight:'bold',paddingTop:8,color:'black'}}>  HAPPINESS GUARANTEE</Text>
           </View>
           </Body>
           
           <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between'}}>
         
           <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
              <Image source={require('../assets/images/worker.png')} style={{height:30,width:30}}/>
              <Text style={{fontSize:10,color:'black'}}>Verified professionals</Text> 
             </View>
             <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
             <Image source={require('../assets/images/ruined.png')} style={{height:30,width:30}}/>
              <Text  style={{fontSize:10,color:'black'}}>Insured Work</Text> 
             </View>
             <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
             <Image source={require('../assets/images/toolbox.png')} style={{height:30,width:30}}/>
              <Text  style={{fontSize:10,color:'black'}}>Rework Assurance</Text> 
             </View>
             <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
             <Image source={require('../assets/images/support.png')} style={{height:30,width:30}}/>
              <Text  style={{fontSize:10,color:'black'}}>Professional Support</Text> 
             </View>
             
           </View>
           
          </Card>
          </View>
</ImageBackground>
      </View>
      </ScrollView>
    );
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3b5c',
  },
  
locationcart:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  paddingTop:30,
},
headerfull:{
  flex: 1,
  flexDirection: 'column',
  //justifyContent: 'space-evenly',
},
containerHorizontal: {
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  //height: 450,

  
},

servicesiconrowone:{
  flexGrow: 1,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
},
servicesiconrowtwo:{
  flexGrow: 1,
  flexDirection: 'row',
  
},

twocardsinglerow:{
  flex: 1,
  flexDirection: 'row',
  
  

}, 

cardrow:{
  width:120, 
  height:170,
},
description:{
 textAlign:'center',
 fontWeight:'bold',
 paddingTop:10,
},

searchbar:{
  
  
},
  
});

const stemstack = createStackNavigator({
  home: HomeScreen,
  subscription:Subscription,
},
{
  initialRouteName: 'home',
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