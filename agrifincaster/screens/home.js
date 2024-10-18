import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView,  TouchableOpacity, Modal, ScrollView, Image } from "react-native";
import AppHeader from '../components/AppHeader'
import { SearchBar, Icon, Header } from 'react-native-elements';
    

export default class Home extends React.Component{  

constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible : false,
    };
  }

showModal2 = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModal2Visible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>

          <View>
          <Text style = {{fontWeight: 'bold', fontSize : 24}}>AgriFincaster helps you to obtain Weather info, predict production and yield for your crops, and manage your finances! Click on the bottom buttons to navigate through the app.</Text>
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
<TouchableOpacity style ={{alignSelf : "center", justifyContent : "center",   backgroundColor : "#2F5061", width : 1600, marginTop : -140, height : 120}}>

<Text style ={{alignSelf : "center", marginTop : 20, fontWeight : "bold", fontSize : 20, marginLeft : 30, color : "white"}}>AgriFinCaster</Text>

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
            style={styles.button}
            onPress={() => {
              this.setState({
                isModal2Visible: true,
              });
            }}>
           <Text style = {styles.buttonText}>About Us</Text>
          </TouchableOpacity>

          {this.showModal2()}
  </View>

<View><Image
          //source={require('../assets/animation_500_l1g70035.gif')} 
          style={{ width: 350, height: 350}}
        /></View>


    
  
    </SafeAreaView>
  );
}
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "navajowhite"
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
    marginTop : 30 
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
    marginLeft: 330,
    marginTop: 120,
    marginBottom: 80,
    height : 300,
    width : 200
    
  },
});
