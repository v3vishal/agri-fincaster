import * as React from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, Alert, StyleSheet, KeyboardAvoidingView, ScrollView, TextInput } from 'react-native';

import { SearchBar, Icon, Header } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';

export default class SideDrawer extends React.Component {

  render() {
    return (
      <SafeAreaProvider>
        <ScrollView style={{ backgroundColor: '#CFD6C2', height: 800, width : 400 }}>
        <View><Image
          source={require('../assets/meeeee.png')} 
          style={{ width: 400, height: 440}}
        /></View>
        
        

              <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Icon
            reverse
            name="home"
            type="font-awesome"
            color="#D89C60"
            onPress={() => {
              this.props.navigation.navigate('TabNavigation');
              
            }}
          />

          <Text style = {{color :"#E87A00", fontWeight : "bold"}}>Home</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Icon
            reverse
            name="star"
            type="font-awesome"
            color="#D89C60"
            onPress={() => {
              this.props.navigation.navigate('CropRec');
              
            }}
          />

          <Text style = {{color : "#E87A00", fontWeight : "bold"}}>Crop Records</Text>
        </View>





<View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Icon
            reverse
            name="zoom-out"
            type="feather"
            color="#D89C60"
            onPress={() => {
              this.props.navigation.navigate('Fin');
              
            }}
          />

          <Text style = {{color : "#E87A00", fontWeight : "bold"}}>Financial Calculator</Text>
        </View>
        
         <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Icon
            reverse
            name="log-out"
            type="feather"
            color="#D89C60"
            onPress={() => {
              this.props.navigation.navigate('Login');
              
            }}
          />

          <Text style = {{color :"#E87A00", fontWeight : "bold"}}>Logout</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Icon 
            reverse
            name="at-sign"
            type="feather"
            color="#749EB2"
           
          />

          <Text style = {{color :"#E87A00", fontWeight : "bold"}}></Text>
          
          
        </View>
         <View><Card style={styles.button3}>
         Made by Vihaan
 
      </Card></View>
      <View><Card style={styles.button3}>
        Ideated by Vishal & Vihaan
 
      </Card></View>
</ScrollView> 

      </SafeAreaProvider>
    )
  }
}


const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
    button3: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#BD8E83',
    shadowColor: '#DAD870',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,
    marginTop : 40 
  },
  }
)

