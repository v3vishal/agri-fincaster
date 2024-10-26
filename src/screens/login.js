import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import db from '../config';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMKypDklqCtpeaBRv5NEqbeNS-XI4F_OY",
  authDomain: "agrifincaster.firebaseapp.com",
  projectId: "agrifincaster",
  storageBucket: "agrifincaster.appspot.com",
  messagingSenderId: "209562331382",
  appId: "1:209562331382:web:7008fd03567e1448ffe4d7",
  measurementId: "G-CBLK8TF2EP"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [language, setLanguage] = useState('');

  const userSignUp = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("Password doesn't match. Check your password.");
    } else {
      createUserWithEmailAndPassword(username, password)
        .then(() => {
          db.collection('users').add({
            name: name,
            username: username,
            contact: contact,
          });
          return Alert.alert('User Added Successfully', '', [
            {
              text: 'OK',
              onPress: () => setIsModalVisible(false),
            },
          ]);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  const userLogin = (username, password) => {
    signInWithEmailAndPassword(username, password)
      .then(() => {
        navigation.navigate('TabNavigation');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  const showModal = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <View style={styles.modalRow}>
                <Text style={styles.icon}>ℹ️</Text>
                <Text style={styles.modalTitle}>Registration</Text>
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}></Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Name"
                  maxLength={15}
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}></Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Username"
                  maxLength={15}
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}></Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Contact"
                  maxLength={10}
                  keyboardType="numeric"
                  onChangeText={(text) => setContact(text)}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}>️</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}></Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}></Text>
                <TouchableOpacity
                  style={language === "ENGLISH" ? styles.selectedOption : styles.option}
                  onPress={() => setLanguage("ENGLISH")}
                >
                  <Text style={styles.optionText}>ENGLISH</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={language === "HINDI" ? styles.selectedOption : styles.option}
                  onPress={() => setLanguage("HINDI")}
                >
                  <Text style={styles.optionText}>HINDI</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalRow}>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => userSignUp(username, password, confirmPassword)}
                  >
                    <Text style={styles.registerButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.modalRow}>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setIsModalVisible(false)}
                  >
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image
          source={require('../assetss/mee.gif')}
          style={{ width: 650, height: 450, marginTop: 10, marginLeft: 10 }}
        />
      </View>
      <ScrollView>
        <View style={styles.inputRow}>
          <Text style={styles.icon}></Text>
          <TextInput
            style={styles.loginBox}
            placeholder="Enter Username"
            keyboardType="email-address"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.icon}></Text>
          <TextInput
            style={styles.loginBox}
            placeholder="Enter Your Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.icon}></Text>
          <TouchableOpacity
            style={language === "ENGLISH" ? styles.selectedOption : styles.option}
            onPress={() => setLanguage("ENGLISH")}
          >
            <Text style={styles.optionText}>ENGLISH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={language === "HINDI" ? styles.selectedOption : styles.option}
            onPress={() => setLanguage("HINDI")}
          >
            <Text style={styles.optionText}>HINDI</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
          onPress={() => userLogin(username, password)}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        {showModal()}
      </ScrollView>
    </ScrollView>
  );
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

export default Login;