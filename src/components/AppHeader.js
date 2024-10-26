import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function AppHeader() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#FFE9E4', marginTop: -10 }}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}></Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>A</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FBE5C8',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  headerText: {
    color: '#8FDDE7',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppHeader;