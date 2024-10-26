import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default class CropRec extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible: false,
      state: '',
      city: '',
      district: '',
      panchayat: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.headerButton}
          >
            <Text style={styles.headerText}>Crop Recorder</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SideDrawer")}
              style={styles.menuButton}
            >
              <Text style={styles.menuIcon}>≡</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.card}>
            <Text>Crop Type: Wheat</Text>
          </View>
          <View style={styles.card}>
            <Text>Area: 3 Acre</Text>
          </View>
          <View style={styles.card}>
            <Text>Ideal Production: 50kg</Text>
          </View>
          <View style={styles.card}>
            <Text>Ideal Yield: 16.66kg/acre</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBEDE0',
  },
  headerButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#B6E2D3',
    width: 1600,
    marginTop: -215,
    height: 120,
  },
  headerText: {
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
  },
  menuButton: {
    backgroundColor: '#FFCA4B',
    marginTop: -45,
    width: 70,
    borderRadius: 200,
    marginLeft: 40,
  },
  menuIcon: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
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
    marginTop: 40,
    padding: 10,
  },
});
