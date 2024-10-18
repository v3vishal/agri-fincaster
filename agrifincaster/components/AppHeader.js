import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class AppHeader extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#FFE9E4', marginTop : -10}}>
      <View>

      <Header 
    centerComponent={{ text: "", style: { color: '#8FDDE7', fontSize:20, fontWeight:"bold", } 
  }} 
backgroundColor="#FBE5C8" />
<Header
    centerComponent={{ text: "A", style: { color: '#8FDDE7', fontSize:20, fontWeight:"bold", width : 500} 
  }} 
backgroundColor="#FBE5C8" />

</View>
</SafeAreaView>
  </SafeAreaProvider>
      
      
    );
  }
}

