import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';

function Crop() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');
  const [area, setArea] = useState('');

  const showModal = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <View style={styles.modalRow}>
                <Text style={styles.icon}>🌍</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Crop type"
                  onChangeText={(text) => setType(text)}
                />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.icon}>🌱</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Land area"
                  multiline={true}
                  onChangeText={(text) => setArea(text)}
                />
              </View>
              <View style={styles.modalRow}>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => {
                      // Handle Registration
                    }}
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

  const showModal2 = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={isModal2Visible}>
        <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={{ width: '100%' }}>
            <View>
              <Text style={{ fontWeight: 'bold' }}>!</Text>
            </View>
            <View style={styles.modalRow}>
              <TouchableOpacity onPress={() => setIsModal2Visible(false)}>
                <Text style={styles.icon}>➖</Text>
              </TouchableOpacity>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setIsModal2Visible(false)}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerText}>Crop Recorder</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button2} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.buttonText}>Input Details</Text>
        </TouchableOpacity>
        {showModal()}
      </View>
      <View>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Check Report</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E57F84',
  },
  headerButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F5061',
    width: 1600,
    marginTop: -210,
    height: 120,
  },
  headerText: {
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    color: 'white',
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
    marginTop: 100,
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
    height: 10,
    width: 280,
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  cancelText: {
    color: '#F0A160',
    textSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
});

export default Crop;
