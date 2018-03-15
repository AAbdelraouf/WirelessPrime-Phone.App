import React, { Component } from 'react';
import { AsyncStorage,View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableHighlight,} from 'react-native'
import { Button } from 'react-native';
import firebase from './firebase'

class LoginScreen extends Component{
    state = {
        email: '',
        password: '',
        myKey:''
    }

     handleEmail = (text) => {
        this.setState({ email: text })}
        handlePassword = (text) => {
        this.setState({ password: text })}

        componentDidMount =()=> {
            AsyncStorage.getItem("myKey").then((myValue) => {
                if(myValue !== null )
                {
                    this.props.navigation.push('HomeScreen')
                }
                else if (myValue === ''){
                    this.props.navigation.push('LoginScreen')
            }
            }).done();
        }

    // Login stage //    
    login = (email, pass) => {
        if(email === '' || pass === ''){
                alert('Please fill empty fields')}
        else{
            AsyncStorage.setItem('myKey',email);
            this.setState({ "myKey":email })
            alert('Email saved to AsyncStorage ' +  this.state.myKey)
            firebase.auth().signInWithEmailAndPassword(email, pass).then((user) =>{
                this.props.navigation.push('HomeScreen');
                alert('Welcome ' + user.email )
                })
                .catch((error)=> {
                    alert(error.code);
            })}
        };

    // Signup stage //
     signup = (email, pass) =>{
         if(email === '' || pass === ''){
            alert('Please fill empty fields')
         }
         else{
            firebase.auth().createUserWithEmailAndPassword(email, pass).then((user) =>{
                this.props.navigation.push('HomeScreen')
                alert('Thank you ' + email +  ' for joining cine gears')

                firebase.auth().currentUser.sendEmailVerification().then(()=> {
                    alert('email sent, please follow link in email to verify')
                    }).catch((error)=> {
                        alert(error.code)
                    })
                    }).catch(function(error){    
                alert(error.code)
            })
         }
    }
     // Render stage //
     render(){
        navigateToPasswordRetrievePage = () =>
            {
                this.props.navigation.push('forgotPasswordScreen')
            }
     return (
        <View>
          <View>
          <Text 
          style={styles.wirelessPrime}
          >WIRELESS PRIME </Text>
          <Text style={styles.userLogin}> {this.props.welcomeText} USER LOGIN </Text>
          <TextInput 
                 style = {styles.emailInput}
                 underlineColorAndroid = "transparent"
                 placeholder = " Email"
                 placeholderTextColor = "gray"
                 autoCapitalize = "none"
                 onChangeText = {this.handleEmail}/>
              
              <TextInput 
              style = {styles.passwordInput}
                 underlineColorAndroid = "transparent"
                 placeholder = " PASSWORD"
                 secureTextEntry={true}
                 placeholderTextColor = "gray"
                 autoCapitalize = "none"
                 onChangeText = {this.handlePassword}/>
                </View>
            <View >
            <TouchableOpacity >
                <Text style = {styles.logInButton}
                onPress={()=>this.login(this.state.email, this.state.password)}
                title=''> LOG IN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity >
                <Text style = {styles.signUpButton}
                onPress={ () => this.signup(this.state.email, this.state.password) }
                >SIGN UP  </Text>
              </TouchableOpacity>

            <TouchableOpacity>
                    <Text
                    style={styles.resetPasswordButton}
                     onPress={navigateToPasswordRetrievePage}>
                     Forgot password?
                    </Text>
            </TouchableOpacity>                
                
                </View>
           </View>
        )}
}


export default LoginScreen;

// Create the inputs styling //
const styles = StyleSheet.create({
    wirelessPrime:{
       top:80,
       justifyContent:"center",
       color:'black',
       textAlign:'center',
       fontSize:30,
       fontWeight:'bold',
       },
    userLogin:{
       top:90,
       color:'#0080FF',
       textAlign:'center',
       fontSize:20
       },
    emailInput:{
       top:230,
       margin: 5,
       height: 40,
       borderBottomColor: '#0080FF',
       borderBottomWidth: 1,   
    },
    passwordInput:{
        top:250,
        margin: 5,
        height: 40,
        borderBottomColor: '#0080FF',
        borderBottomWidth: 1,  
    },
    logInButton:{
       textAlign:'center',
       paddingTop: 10,
       paddingBottom: 10,
       color:'#0080FF',
       top:300,
       borderRadius:10,
       borderWidth: 1,
       borderColor:'#0080FF',
       margin: 5,
       height: 40,
       fontWeight:'bold',
       fontSize:15
    },
    signUpButton:{
        textAlign:'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#0080FF',
        color:'#0080FF',
        top:300,
        fontSize:15,
        margin: 5,
        height: 40,
        fontWeight:'bold',
       },
    resetPasswordButton:
    {
        fontWeight:'bold',
        left:240,
        top:320,
        color:'#0080FF',
    },
 })
