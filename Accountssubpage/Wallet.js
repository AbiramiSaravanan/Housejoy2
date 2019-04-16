import React, { Component } from 'react'
import {View,Text,Image,FlatList,StyleSheet} from 'react-native'
import {Card,Left,Right,Button} from 'native-base'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator'
import dummyData from './data'

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013'
}

export class Wallet extends Component {

  constructor () {
    super()

    this.state = {
      currentPage: 0
    }
    this.viewabilityConfig = { itemVisiblePercentThreshold: 40 }
  }

    static navigationOptions = { 
        title:'Order Details',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor:'#3c3b5c',
          fontSize:7,
          fontWeight:'normal'
        },
      };

      renderPage = rowData => {
        const item = rowData.item
        return (
          <View style={styles.rowItem}>
            <Text style={styles.title}>{item.title}</Text>
            {/* <Text style={styles.body}>{item.body}</Text> */}
          </View>
        )
      }
      
      onViewableItemsChanged = ({ viewableItems, changed }) => {
        const visibleItemsCount = viewableItems.length
        if (visibleItemsCount != 0) {
          this.setState({ currentPage: viewableItems[visibleItemsCount - 1].index })
        }
      }
      
      


  render() {
    return (
    <View>
      <ScrollView>
<Card style={{height:heightPercentageToDP('10%'),width:widthPercentageToDP('100%'),flexDirection:'row'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',padding:10}}>
<Button rounded style={{width:45,height:45,backgroundColor:'#f2efef',paddingLeft:6}}>
<Image source={require('../assets/images/beetle.png')} style={{height:30,width:30,paddingLeft:4}}/></Button>
<View style={{flexDirection:'column'}}>
<Text style={{fontWeight:'bold'}}>Pest Control</Text>
<View style={{flexDirection:'row'}}>
<Text>Service Id : </Text>
<Text style={{fontWeight:'bold'}}>12345</Text>
</View>
</View>
</View>
</Card>
<View style={{flexDirection:'column',height:heightPercentageToDP('7%'),padding:10}}>
<View style={{flexDirection:'row'}}>
<Text>Order Id : </Text>
<Text style={{fontWeight:'bold'}}>12345</Text>
</View>
<View style={{flexDirection:'row'}}>
<Text>Scheduled Date and Time : </Text>
<Text style={{fontWeight:'bold'}}>12345</Text>
</View>
</View>
<Card style={{height:heightPercentageToDP('20%'),width:widthPercentageToDP('100%'),padding:10}}>
  <View style={{flexDirection:'column',justifyContent:'space-between'}}>
  <View style={{flexDirection:'row',height:heightPercentageToDP('5%')}}>
  <Left>
  <Text>Service Details : </Text></Left>
  <Right>
  <Text style={{fontWeight:'bold'}}>{'\u20B9'}500 </Text></Right>
  </View>
  <View style={{height:heightPercentageToDP('8%'),backgroundColor:'#f2efef'}}>
    <Text>pesticides to kill insects</Text>
  </View>
  <View style={{flexDirection:'row',height:heightPercentageToDP('5%')}}>
  <Left>
  <Text>Assigned Professional : </Text></Left>
  <Right>
  <Text style={{fontWeight:'bold'}}>Id : 23344</Text></Right>
  </View>
  </View>
</Card>
<View style={{flexDirection:'row',padding:5}}>
<View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={5}
            direction='vertical'
            currentPosition={this.state.currentPage}
            labels={dummyData.data.map(item => item.title)}
          />
        </View>
        <FlatList
          style={{ flexGrow: 1 }}
          //data={dummyData.data}
          renderItem={this.renderPage}
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={this.viewabilityConfig}
        />
      </View>
      <View>
            <Button rounded block danger style={{width:widthPercentageToDP('30%')}}>
            <Text style={{color:'white'}}>Reschedule</Text>
          </Button>  
          </View>   
      </View>
</ScrollView>
    </View>
    )
  }
}




export default Wallet

const styles = StyleSheet.create({
  container: {
    flex: 1,
  flexDirection:'row',
    backgroundColor: '#ffffff',
    height:350,
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600'
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8
  }
})

