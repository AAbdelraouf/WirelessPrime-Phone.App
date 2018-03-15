import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen'
import forgotPasswordScreen from './Screens/forgotPasswordScreen'



export default class App extends React.Component {
  render() {
    return (
<AppNavigator />
    )
  }
}

const AppNavigator = StackNavigator({ 
  HomeScreen:{screen: HomeScreen},
  LoginScreen:{screen: LoginScreen},
  forgotPasswordScreen:{screen: forgotPasswordScreen}
},
{
  index: 0,
  initialRouteName: 'LoginScreen',
  headerMode: 'none',
  navigationOptions: { gesturesEnabled: false}
})

// styling //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});