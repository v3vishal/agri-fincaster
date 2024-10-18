import React, { Component, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Picker,
} from 'react-native';
import db from "../config";
import firebase from "firebase";
import * as Speech from 'expo-speech';
import { Icon } from 'react-native-elements';
import Home from '../screens/home.js';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedValue: '',

      isModalVisible: false,
      name: '',
      username: '',
      contact: '',
      state: '',
      city: '',
      district: '',
      panchayat: '',

      password: '',
      confirmPassword: '',

      language: '',
      login: 'You Have Successfully Logged In. Welcome To AgriFinCaster',
      signup:
        'Please enter the details in the form given to become a registered user.',
      wronglog:
        'It seems that you have not entered any username. Please do so first',
      wrongsign: 'Please enter the registered email and password to enter.',
    };
  }

  login = () => {
    var login = this.state.login;

    Speech.speak(login);
  };

  signup = () => {
    var signup = this.state.signup;

    Speech.speak(signup);
  };

  wrong1 = () => {
    var wronglog = this.state.wronglog;

    Speech.speak(wronglog);
  };

  wrong2 = () => {
    var wrongsign = this.state.wrongsign;

    Speech.speak(wrongsign);
  };

  userSignUp = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .firestore()
        .createUserWithEmailAndPassword(username, password)
        .then(() => {
          db.collection("users").add({
            name: this.state.name,
            username: this.state.username,
            contact: this.state.contact,
        
           
          });
          
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false }),
              
            }
          ]);
        })  
        console.log("something happened")
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  userLogin = (username, password) => {
    //firebase
      //.firestore()
      //.signInWithEmailAndPassword(username, password)
      //.then(() => {
        this.props.navigation.navigate("TabNavigation");
      //})
      //.catch(error => {
        //var errorCode = error.code;
        //var errorMessage = error.message;
        //return Alert.alert(errorMessage);
      //});
  };

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
                <Icon reverse name="info" type="feather" color="coral" />
                <Text style={styles.modalTitle}>Registration</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Icon reverse name="user" type="feather" color="#FF3161" />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={'Name'}
                  maxLength={15}
                  onChangeText={(text) => {
                    this.setState({ name: text });
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
                <Icon reverse name="file-text" type="feather" color="tan" />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={'Username'}
                  maxLength={15}
                  onChangeText={(text) => {
                    this.setState({ username: text });
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
                <Icon reverse name="phone" type="feather" color="#BEDF7C" />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={'Contact'}
                  maxLength={10}
                  keyboardType={'numeric'}
                  onChangeText={(text) => {
                    this.setState({ contact: text });
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
          <Icon
            reverse
            name="shield"
            type="feather"
            color="#A2DCE7"
          
          />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({ password: text });
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
          <Icon
            reverse
            name="lock"
            type="feather"
            color="salmon"
          
          />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Confirm Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({ confirmPassword: text });
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

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={require('../assets/mee.gif')}
            style={{ width:650, height: 450, marginTop: 10, marginLeft: 10 }}
          />


        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Icon reverse name="at-sign" type="feather" color="#DCAE96" />
            <TextInput
              style={styles.loginBox}
              placeholder="Enter Username"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({ username: text });
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
          <Icon
            reverse
            name="key"
            type="feather"
            color="#FF4500"
          
          />
          <TextInput
            style={styles.loginBox}
            placeholder="Enter Your Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
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
            <Icon reverse name="globe" type="feather" color="#00E0D4" />
            <Picker
              style={{ height: 40, width: 200 }}
              selectedValue={this.state.language}
              onValueChange={(text) => {
                this.setState({ language: text });
                console.log(text);
              }}>
              <Picker.Item label="ENGLISH" value="ENGLISH" />
              <Picker.Item label="HINDI" value="HINDI" />
            </Picker>
          </View>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.username, this.state.password);
            }}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.signup();

              this.setState({
                isModalVisible: true,
              });
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>

          {this.showModal()}
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eecf8c',
    alignItems: 'center',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    paddingBottom: 40,
    color: 'orange',
    alignSelf: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginBox: {
    width: 220,
    height: 40,
    borderBottomWidth: 2.5,
    borderColor: '#4120A9',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    position: 'relative',
    color: '#999',
    transition: 'all 0.3s ease-in-out',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
    position: 'relative',
    color: '#999',
    transition: 'all 0.3s ease-in-out',
  },
  inputFocused: {
    borderColor: '#007bff',
    paddingTop: 5, // Adjust this value as needed
    paddingBottom: 0,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFCD58',
    shadowColor: '#DAD870',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 56,
  },
  buttonText: {
    color: '#FF5C4D',
    fontWeight: '200',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
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
