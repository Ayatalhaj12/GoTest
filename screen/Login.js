
import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { View,Text,Image,StyleSheet,StatusBar as RnStatusBar,
 
  SafeAreaView,
  Button,
  TouchableHighlight,
  Alert,  } from 'react-native';
 

const Login=({navigation})=>{


      return(
          <View>
             <Button title='tttttt' onPress={()=> navigation.navigate("MapNew")}/>
     </View>
      );
  }
export default Login;
const styles = StyleSheet.create({
  container: {
    paddingTop: RnStatusBar.currentHeight,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
