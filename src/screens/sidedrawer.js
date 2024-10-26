import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class SideDrawer extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <ScrollView contentContainerStyle={{ backgroundColor: '#CFD6C2', height: 800, width: 400 }}>
          <View>
            <Image source={require('../assetss/meeeee.png')} style={{ width: 400, height: 440 }} />
          </View>

          <View style={styles.navItem}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigation')}>
              <Text style={styles.icon}>🏠</Text>
            </TouchableOpacity>
            <Text style={styles.navText}>Home</Text>
          </View>

          <View style={styles.navItem}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CropRec')}>
              <Text style={styles.icon}>⭐</Text>
            </TouchableOpacity>
            <Text style={styles.navText}>Crop Records</Text>
          </View>

          <View style={styles.navItem}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Fin')}>
              <Text style={styles.icon}>🔍</Text>
            </TouchableOpacity>
            <Text style={styles.navText}>Financial Calculator</Text>
          </View>

          <View style={styles.navItem}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.icon}>🚪</Text>
            </TouchableOpacity>
            <Text style={styles.navText}>Logout</Text>
          </View>

          <View style={styles.navItem}>
            <Text style={styles.icon}>@</Text>
            <Text style={styles.navText}></Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerCard}>
              <Text>Made by Vihaan</Text>
            </View>
            <View style={styles.footerCard}>
              <Text>Ideated by Vishal & Vihaan</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  navItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  icon: {
    fontSize: 30,
    marginHorizontal: 10,
  },
  navText: {
    color: '#E87A00',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
  },
  footerCard: {
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
    marginVertical: 20,
    padding: 10,
  },
});
