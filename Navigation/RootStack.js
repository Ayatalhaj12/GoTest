import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screen/Login';
import MapNew from '../screen/MapNew';
const Stack = createStackNavigator();
const RootStack =()=>{
return(
  
    <NavigationContainer>
      <Stack.Navigator 
     
      initialRouteName="Login"
      >
        <Stack.Screen name="MapNew" component={MapNew} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
)
}
export default RootStack