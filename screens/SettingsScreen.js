import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View,TouchableHighlight,StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

import { Button } from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';

export default class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'app.json',
  // };

  state = {
    selectedItems : '',
    items : [{
      id: '92iijs7yta',
      name: 'Ondo',
    }, {
      id: 'a0s0a8ssbsd',
      name: 'Ogun',
    }, {
      id: '16hbajsabsd',
      name: 'Calabar',
    }, {
      id: 'nahs75a5sg',
      name: 'Lagos',
    }, {
      id: '667atsas',
      name: 'Maiduguri',
    }, {
      id: 'hsyasajs',
      name: 'Anambra',
    }, {
      id: 'djsjudksjd',
      name: 'Benue',
    }, {
      id: 'sdhyaysdj',
      name: 'Kaduna',
    }, {
      id: 'suudydjsjd',
      name: 'Abuja',
    }]  
  };
 
  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };


    
  
  render() {
    return(
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    <View style={{ flex: 1 }}>
    <MultiSelect
      items={this.state.items}
      uniqueKey="id"
      onSelectedItemsChange={this.onSelectedItemsChange}
      selectedItems={this.state.selectedItems}
      selectText="Pick Items"
      searchInputPlaceholderText="Search Items..."
      tagRemoveIconColor="#CCC"
      tagBorderColor="#CCC"
      tagTextColor="#CCC"
      single={true}
      selectedItemTextColor="#CCC"
      selectedItemIconColor="#CCC"
      itemTextColor="#000"
      searchInputStyle={{ color: '#CCC' }}
      submitButtonColor="#CCC"
      submitButtonText="Submit"
    />
  </View>
    ) 
  }
}
