


import { StyleSheet,Button, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Expo from 'expo'
import  *as Google from 'expo-google-app-auth';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';
  const MapNew=({navigation})=>{
    const hanleGoogleLogin  = async () =>{
      try {
        const result = await Google.logInAsync({
        androidClientId: `489497122703-hp0c9lueqqp5j4sgn22ot8icrpemmiq7.apps.googleusercontent.com`,

          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }

    return (
      <WebView 
      style={styles.container}
      source={{ uri: 'http://192.168.0.201/GO/AngDCRM/dashboard' }}
    />
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
  });

export default  MapNew