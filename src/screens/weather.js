import React from 'react';
import { Text, View, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible: false,
      contact: '',
      state: '',
      city: '',
      district: '',
      panchayat: '',
    };
  }

  showModal = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={{ width: '150%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <View style={styles.modalRow}>
                <Text style={styles.icon}>🌍</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="State"
                  onChangeText={(text) => {
                    this.setState({ state: text });
                  }}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}>🗺️</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="City"
                  onChangeText={(text) => {
                    this.setState({ city: text });
                  }}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}>📍</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="District"
                  multiline={true}
                  onChangeText={(text) => {
                    this.setState({ district: text });
                  }}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}>📌</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Panchayat"
                  multiline={true}
                  onChangeText={(text) => {
                    this.setState({ panchayat: text });
                  }}
                />
              </View>
              <View style={styles.modalRow}>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity style={styles.registerButton} onPress={() => { this.props.navigation.navigate("Weather"); }}>
                    <Text style={styles.registerButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.modalRow}>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity style={styles.cancelButton} onPress={() => this.setState({ isModalVisible: false })}>
                    <Text style={styles.cancelText}>Cancel</Text>
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
      <Modal animationType="fade" transparent={true} visible={this.state.isModal2Visible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '150%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <View style={styles.modalBackButton}>
                <View>
                  <View style={styles.card}>
                    <Text>Location: Uttar Pradesh, Ghaziabad, Loni, West Ghat</Text>
                  </View>
                  <View style={styles.card}>
                    <Text>Temperature: 24°C</Text>
                  </View>
                  <View style={styles.card}>
                    <Text>Precipitation: 50%</Text>
                  </View>
                  <View style={styles.card}>
                    <Text>Optimal weather for growing Paddy and Beans</Text>
                  </View>
                </View>
              </View>
              <View style={styles.modalRow}>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity style={styles.cancelButton} onPress={() => this.setState({ isModal2Visible: false })}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerText}>Weather Recorder</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("SideDrawer")} style={styles.menuButton}>
              <Text style={styles.menuIcon}>≡</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button2} onPress={() => { this.setState({ isModalVisible: true }); }}>
            <Text style={styles.buttonText}>Input Details</Text>
          </TouchableOpacity>
          {this.showModal()}
        </View>
        <View>
          <TouchableOpacity style={styles.button2} onPress={() => { this.setState({ isModal2Visible: true }); }}>
            <Text style={styles.buttonText}>Predict</Text>
          </TouchableOpacity>
          {this.showModal2()}
        </View>
        <View>
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
    backgroundColor: "#93E9BE"
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
    marginLeft: 628,
    marginTop: 50,
    marginBottom: 80,
    height : 10,
    width : 480,
    
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
    width: 200,
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
    marginTop :100 
  },
  
  buttonText: {
    color: '#FF5C4D',
    fontSize: 20,  
    fontWeight: 'bold',
 
    
  
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
