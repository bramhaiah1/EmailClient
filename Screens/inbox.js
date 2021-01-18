import React from "react";
import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/AntDesign";

import {
  SafeAreaView, View, Text,TouchableOpacity, StyleSheet, ScrollView,Image,FlatList
} from "react-native";

import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function App1() {
    
    
  return (
    <View style={styles.container}>
     
<FlatList  styles={{alignItems:"center",
margin:"10px",
  justifyContent:'space-between'
}}
//Inside data inbox.js Json is going to parse data 
data={[{}]}
  numColumns={1}
  
  renderItem={({ item }) => 
  <Card >
    <TouchableOpacity style={{   justifyContent:'space-between',
}}>                <Icon name="user" size={22} /> 
</TouchableOpacity>
  
  
</Card>
}

/> 

</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:'space-between'
  },
  
});
