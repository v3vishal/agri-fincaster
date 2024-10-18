import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView,  TouchableOpacity, Modal, ScrollView, Image,  KeyboardAvoidingView, TextInput } from "react-native";
import AppHeader from '../components/AppHeader'
import { SearchBar, Icon, Header } from 'react-native-elements';
import { Card } from 'react-native-paper';
    

export default class CropRec extends React.Component{  

constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible : false,
      state: '',
      city: '',
      district: '',
      panchayat: '',
    };
  }






  render(){
  return (
    <SafeAreaView style={styles.container}>
    
<View>
<TouchableOpacity style ={{alignSelf : "center", justifyContent : "center",   backgroundColor : "#B6E2D3", width : 1600, marginTop : -215, height : 120}}>

<Text style ={{alignSelf : "center", marginTop : 20, fontWeight : "bold", fontSize : 20, marginLeft : 30}}>Crop Recorder</Text>

<TouchableOpacity onPress = {()=> this.props.navigation.navigate("SideDrawer")} style = {{backgroundColor : "#FFCA4B", marginTop : -45, width :70, borderRadius: 200, marginLeft : 40}}>
 <Icon 
            raised 
           
            name="menu"
            type="feather" 
            color="#F6A21E"
             
          />
          </TouchableOpacity>
</TouchableOpacity>

</View>

<View> 
      <Card style={styles.button2}>
         Crop Type     :              Wheat
 
      </Card>
      <Card style={styles.button2}>
        Area         :               3 Acre
 
      </Card>
       <Card style={styles.button3}>
      Ideal Production : 50kg
      </Card>
      <Card style={styles.button3}>
       Ideal Yield : 16.66kg/acre
      </Card>
       
      </View>


    
  
    </SafeAreaView>
  );
}
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBEDE0"
  },
  fadingContainer: {
      
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 18
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FFCD58',
    shadowColor: '#DAD870',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,
    marginTop : -190 
  },
  button2: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FFCD58',
    shadowColor: '#DAD870',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,
    marginTop : 40 
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
  
  buttonText: {
    color: '#FF5C4D',
    fontSize: 20,  
    fontWeight: 'bold',
 
    
  
  },

  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBE5C0',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 880,
    marginBottom: 80,
    height : 500 
    
  },
   KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 22,
    backgroundColor: '#F88379',
    borderRadius: 12,
  },

  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBE5C0',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },

  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#4C5D70',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },

  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: '#D0E6F0',
  },

  registerButtonText: {
    color: '#F54D3D',
    fontSize: 15,
    fontWeight: 'bold',
  },

  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#4C5D70',
  },
});
