import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Modal, ScrollView, Image } from 'react-native';

function Home() {
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  const showModal2 = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={isModal2Visible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
                AgriFincaster helps you to obtain weather info, predict production and yield for your crops, and manage your finances! Click on the bottom buttons to navigate through the app.
              </Text>
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
          <Text style={styles.headerText}>AgriFinCaster</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => setIsModal2Visible(true)}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        {showModal2()}
      </View>
      <View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'navajowhite',
  },
  headerButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F5061',
    width: 1600,
    marginTop: -140,
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
    marginTop: 30,
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
    height: 300,
    width: 200,
  },
  modalRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

export default Home;