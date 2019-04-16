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
import { SearchBar,TouchableHighlight,Badge, Divider} from 'react-native-elements';
import {Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { widthPercentageToDP,  heightPercentageToDP } from 'react-native-responsive-screen';

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
      <View style={{flex:1}}>
      

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
            autoplay={true}
            autoplayInterval={2000}
            selectedIndex={2}
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}>
            <View style={{flexGrow: 1,alignItems: 'center',justifyContent: 'center',}}>
               <Image source={require('../assets/images/pestcontrol.png')} style={{height: 200, width: 500,marginLeft:55}}/>
            </View>
            <View style={{flexGrow: 1,alignItems: 'center',justifyContent: 'center',}}>
              <Image source={require('../assets/images/carpentry.jpg')} style={{height: 200, width: 500,marginLeft:55}}/>
            </View>
            <View style={{flexGrow: 1,alignItems: 'center',justifyContent: 'center',}}>
              <Image source={require('../assets/images/acservice.jpeg')} style={{height: 200, width: 500,marginLeft:55}}/>
            </View>
          </Carousel>

          <View style={{width:widthPercentageToDP('99%'),height:heightPercentageToDP('40%')}}>
          
        
          <View style={{flexDirection:'column',padding:'5%'}}>
        <View style={{justifyContent:'space-between',flexDirection:'row',padding:'4%'}}>
       
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/plug.png')} style={{height:35,width:35}}/>
        <Text>
          Electricals
        </Text>
        </View>

        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/chainsaw.png')} style={{height:35,width:35}}/>
        <Text>
          Carpentry
        </Text>
        </View>
       
        </TouchableOpacity>



        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/air-conditioner.png')} style={{height:35,width:35}}/>
        <Text>
          AC services
        </Text>
        </View>
       
        </TouchableOpacity>
        </View>
        

        <View style={{justifyContent:'space-between',flexDirection:'row',padding:'4%'}}>
       
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/plug.png')} style={{height:35,width:35}}/>
        <Text>
          Electricals
        </Text>
        </View>

        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/chainsaw.png')} style={{height:35,width:35}}/>
        <Text>
          Carpentry
        </Text>
        </View>
       
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/air-conditioner.png')} style={{height:35,width:35}}/>
        <Text>
          AC services
        </Text>
        </View>
       
        </TouchableOpacity>
        </View>
        

        <View style={{justifyContent:'space-between',flexDirection:'row',padding:'4%'}}>
       
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/ac.png')}/>
        <Text>
          painting
        </Text>
        </View>

        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/curl.png')} style={{height:35,width:35}}/>
        <Text>
          salon at home
        </Text>
        </View>
       
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Pestscreen')}>
       
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/more.png')} style={{height:35,width:35}}/>
        <Text>
          more
        </Text>
        </View>
       
        </TouchableOpacity>
        </View>
        </View>
        </View>
<View style={{height:heightPercentageToDP('1%'),backgroundColor:'#f2efef'}}></View>

<View style={{width:widthPercentageToDP('99%'),height:heightPercentageToDP('32%')}}>
<Image source={require('../assets/images/cleanAd.png')} style={{height:'100%',width:'100%',paddingTop:'20%'}} />
</View>

<View style={{height:heightPercentageToDP('1%'),backgroundColor:'#f2efef'}}></View>



          
          <View style={{width:widthPercentageToDP('99%')}}>
          <View style={{flex:1,flexDirection:'column'}}>
<CardItem>
  <Text style={styles.description}>AC services</Text>
</CardItem>
<CardItem>
<View style={styles.twocardsinglerow}>
<ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
           <Card style={styles.cardrow} >
           <CardItem cardBody>
           <Image source={require('../assets/images/acserv.jpg')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Dry servicing</Text>
            </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
           <Image source={require('../assets/images/acinstallation.jpg')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Installation{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
           <Image source={require('../assets/images/wetservice.jpg')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Wet Services{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
           <Image source={require('../assets/images/gasrefill.jpg')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Gas Refill{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
           <Image source={require('../assets/images/acrepair.jpg')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>AC Repair{"\n"}</Text>
             
           </Card>
           </ScrollView>
          </View>
         </CardItem>
         </View>
          </View>


          <View style={{height:heightPercentageToDP('1%'),backgroundColor:'#f2efef'}}></View>



          <View style={{width:widthPercentageToDP('99%')}}>
          <View style={{flex:1,flexDirection:'column'}}>
<CardItem>
  <Text style={styles.description}>Home cleaning services</Text>
</CardItem>
<CardItem>
<View style={styles.twocardsinglerow}>
<ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
           <Card style={styles.cardrowtwo} >
           <CardItem cardBody>
           <Image source={require('../assets/images/sofacleanad.png')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Sofa cleaning packages</Text>
            </Card>
           <Card style={styles.cardrowtwo}>
           <CardItem cardBody>
           <Image source={require('../assets/images/houseclean.jpg')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>General cleaning{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrowtwo}>
           <CardItem cardBody>
           <Image source={require('../assets/images/tankclean.png')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Overhead Water Storage{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrowtwo}>
           <CardItem cardBody>
           <Image source={require('../assets/images/carpetclean.jpg')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Carpet Cleaning{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrowtwo}>
           <CardItem cardBody>
           <Image source={require('../assets/images/furnitureclean.jpg')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Furniture cleaning{"\n"}</Text>
             
           </Card>
           </ScrollView>
</View>
         </CardItem>
         </View>
          </View>
          
          <View style={{height:heightPercentageToDP('1%'),backgroundColor:'#f2efef'}}></View>

          <View style={{width:widthPercentageToDP('99%'),height:heightPercentageToDP('32%')}}>
<Image source={require('../assets/images/cleanAd.png')} style={{height:'100%',width:'100%',paddingTop:'20%'}} />
</View>

<View style={{height:heightPercentageToDP('1%'),backgroundColor:'#f2efef'}}></View>



<View style={{width:widthPercentageToDP('99%')}}>
          <View style={{flex:1,flexDirection:'column'}}>
<CardItem>
  <Text style={styles.description}>Home cleaning services</Text>
</CardItem>
<CardItem>
<View style={styles.twocardsinglerow}>
<ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
           <Card style={styles.cardrowtwo} >
           <CardItem cardBody>
           <Image source={require('../assets/images/sofacleanad.png')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Sofa cleaning packages</Text>
            </Card>
           <Card style={styles.cardrowtwo}>
           <CardItem cardBody>
           <Image source={require('../assets/images/houseclean.jpg')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>General cleaning{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrowtwo}>
           <CardItem cardBody>
           <Image source={require('../assets/images/tankclean.png')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Overhead Water Storage{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrowtwo}>
           <CardItem cardBody>
           <Image source={require('../assets/images/carpetclean.jpg')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Carpet Cleaning{"\n"}</Text>
             
           </Card>
           <Card style={styles.cardrowtwo}>
           <CardItem cardBody>
           <Image source={require('../assets/images/furnitureclean.jpg')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Furniture cleaning{"\n"}</Text>
             
           </Card>
           </ScrollView>
</View>
         </CardItem>
         </View>
          </View>


          <View style={{height:heightPercentageToDP('1%'),backgroundColor:'#f2efef'}}></View>



          <View style={{width:widthPercentageToDP('99%')}}>
          <View style={{flex:1,flexDirection:'column'}}>
<CardItem>
  <Text style={styles.description}>Painting and Renovation</Text>
</CardItem>
<CardItem>
<View style={styles.twocardsinglerow}>
<ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>

                      <View style={{flexDirection:'column'}}>
           <Card style={styles.cardrowfour} >
           <CardItem cardBody>
           <Image source={require('../assets/images/sofacleanad.png')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            </Card>
            <Text style={{ minHeight:heightPercentageToDP('8%'), maxHeight:heightPercentageToDP('15%'),minWidth:widthPercentageToDP('8%'),maxWidth:widthPercentageToDP('35%'),textAlign:'center'}}>Sofa cleaning packages</Text>
            </View>

            <View style={{flexDirection:'column'}}>
           <Card style={styles.cardrowfour}>
           <CardItem cardBody>
           <Image source={require('../assets/images/houseclean.jpg')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            </Card>
            <Text style={{ minHeight:heightPercentageToDP('8%'), maxHeight:heightPercentageToDP('15%'),minWidth:widthPercentageToDP('8%'),maxWidth:widthPercentageToDP('35%'),textAlign:'center'}}>General cleaning{"\n"}</Text>
            </View>

            <View style={{flexDirection:'column'}}>
           <Card style={styles.cardrowfour}>
           <CardItem cardBody>
           <Image source={require('../assets/images/tankclean.png')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            </Card>
            <Text style={{ minHeight:heightPercentageToDP('8%'), maxHeight:heightPercentageToDP('15%'),minWidth:widthPercentageToDP('8%'),maxWidth:widthPercentageToDP('35%'),textAlign:'center'}}>Overhead Water Storage{"\n"}</Text>
             </View>

             <View style={{flexDirection:'column'}}>
           <Card style={styles.cardrowfour}>
           <CardItem cardBody>
           <Image source={require('../assets/images/carpetclean.jpg')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            </Card>
            <Text style={{ minHeight:heightPercentageToDP('8%'), maxHeight:heightPercentageToDP('15%'),minWidth:widthPercentageToDP('8%'),maxWidth:widthPercentageToDP('35%'),textAlign:'center'}}>Carpet Cleaning{"\n"}</Text>
             </View>


             <View style={{flexDirection:'column'}}>
             <Card style={styles.cardrowfour}>
           <CardItem cardBody>
           <Image source={require('../assets/images/furnitureclean.jpg')} style={{height: 120, width: null, flex: 1}}/>
            </CardItem>
            </Card>
             <Text style={{ minHeight:heightPercentageToDP('8%'), maxHeight:heightPercentageToDP('15%'),minWidth:widthPercentageToDP('8%'),maxWidth:widthPercentageToDP('35%'),textAlign:'center'}}>Furniture cleaning{"\n"}</Text>
             </View
             >
           </ScrollView>
</View>
         </CardItem>
         </View>
          </View>
          

          <View style={{height:heightPercentageToDP('1%'),backgroundColor:'#f2efef'}}></View>



          <View style={{width:widthPercentageToDP('99%')}}>
          <View style={{flex:1,flexDirection:'column',padding:10}}>
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
          <ImageBackground source={require('../assets/images/roach.jpg')} style={{height: 130, width: 180}}>
              <View style={{flex:1,flexDirection:'column',paddingTop:40,padding:10}}>
              <Text style={{color:'white',fontWeight:'bold'}}>Cockroach Control</Text>
              <Text style={{color:'#7af3ff',fontSize:13}}>Avail 3 services and get 20% off</Text>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
              <Text style={{color:'#DCDCDC',textDecorationLine:'line-through',fontSize:13}}>2,2247</Text>
              <Text  style={{color:'#FFFF00',fontSize:13}}>1,797</Text>
              <Text style={{color:'#7FFF00',fontSize:13}}>20% off</Text>
              </View>
              </View>
              </ImageBackground>
            </CardItem>
          </View>
         </View>
          </View>


          <View style={{height:heightPercentageToDP('1%'),backgroundColor:'#f2efef'}}></View>



          <View>
          <View style={{width:widthPercentageToDP('99%'),height:heightPercentageToDP('20%')}}>
          
          <View style={{flexDirection:'row',padding:'3%',justifyContent:'center'}}>
           <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/business-economic-3/65/79-512.png'}} style={{height: 40, width: 40,paddingLeft:40}}/>
           <Text style={{ fontWeight:'bold',paddingTop:'3%'}}>  HAPPINESS GUARANTEE</Text>
           </View>
           
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
           
          </View>
          </View>

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
  justifyContent:'space-between',
  
  

}, 

cardrow:{
  width:130, 
  height:170,
},

cardrowtwo:{
width:190,
height:190,
},

cardrowfour:{
  width:120,
  height:120,
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