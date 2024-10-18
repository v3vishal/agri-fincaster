import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView,  TouchableOpacity, Modal, ScrollView, Image,  KeyboardAvoidingView, TextInput } from "react-native";
import AppHeader from '../components/AppHeader'
import { SearchBar, Icon, Header } from 'react-native-elements';
    

export default class Crop extends React.Component{  

constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible : false,
      type: '',
      price: '',
      sale: '',
      area : ''
    };
  }

showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Icon reverse name="globe" type="feather" color="#FFC270" />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={'crop type'}
                  onChangeText={(text) => {
                    this.setState({ state: text });
                  }}
                />
              </View>
              
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginLeft: -10,
                }}>
                <Icon
                  reverse
                  name="layout"
                  type="feather"
                  color="#A2DCE7"
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={'land area'}
                  multiline={true}
                  onChangeText={(text) => {
                    this.setState({ area: text });
                  }}
                />
              </View>
              
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Icon reverse name="user-plus" type="feather" color="orange" />
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => this.userSignUp(this.state.username)}>
                    <Text style={styles.registerButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Icon reverse name="minus" type="feather" color="darkblue" />
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => this.setState({ isModalVisible: false })}>
                    <Text
                      style={{
                        color: '#F0A160',
                        textSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>

        
      
    );
  };

showModal2 = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModal2Visible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>

          <View>
          <Text style = {{fontWeight: 'bold'}}>!</Text>
          </View>
            
<View 
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Icon onPress={() => this.setState({ isModal2Visible: false })}
            reverse
            name="minus"
            type="feather"
            color="darkblue"
          
          />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ isModal2Visible: false })}>
                  <Text
                    style={{
                      color: '#F0A160',
                      textSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
              </View>


              
          
          </ScrollView>
        </View>
      </Modal>
    );
  };





  render(){
  return (
    <SafeAreaView style={styles.container}>
    
<View>
<TouchableOpacity style ={{alignSelf : "center", justifyContent : "center",   backgroundColor : "#2F5061", width : 1600, marginTop : -210, height : 120}}>

<Text style ={{alignSelf : "center", marginTop : 20, fontWeight : "bold", fontSize : 20, marginLeft : 30, color: "white"}}>Crop Recorder</Text>

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
<TouchableOpacity
            style={styles.button2}
            onPress={() => {
              this.setState({
                isModalVisible: true,
              });
            }}>
           <Text style = {styles.buttonText}>Input Details</Text>
          </TouchableOpacity>

          {this.showModal()}
  </View>

  <View>
<TouchableOpacity
            style={styles.button2}
            onPress={() => {
             this.props.navigation.navigate("CropRec");
            }}>
           <Text style = {styles.buttonText}>Check Report</Text>
          </TouchableOpacity>

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
    backgroundColor: "#E57F84"
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
    marginTop : 100 
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
    marginLeft: 628,
    marginTop: 50,
    marginBottom: 80,
    height : 10,
    width : 280,
    
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
