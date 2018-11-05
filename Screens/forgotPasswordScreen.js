import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableHighlight, } from 'react-native'
import { Button } from 'react-native';
import firebase from './firebase'

class forgotPasswordScreen extends React.Component{
    state = { email:'' }

    handleTheEmail = (inputText) => { this.setState({ email: inputText })};

    render(){
        navigateTo = ()=>{
            this.props.navigation.push('LoginScreen')
        }

        // Retrieve password function //
        retrievePassword = () =>
        {   
            var auth = firebase.auth();
            var emailAddress = this.state.email;

            if(emailAddress === ''){alert('Please fill empty fields')}
            else{
                auth.sendPasswordResetEmail(emailAddress).then( ()=> {
                    this.props.navigation.push('LoginScreen')
                    alert('Email sent, follow instructions on the email');
                }).catch(function(error) {
                alert(error.code)
                })
            }
        }
        return (
            <View>   
            <View>
                <Text style ={forgorPasswordScreenStyles.forgorPasswordText} >Lets retrieve your password</Text>
                <TextInput style = {forgorPasswordScreenStyles.forgotPasswordInput}
                    placeholder = "Enter email here"
                    autoCapitalize = 'none'
                    placeholderTextColor = 'gray' 
                    onChangeText ={this.handleTheEmail}
                    >
                </TextInput>
                <TouchableOpacity>
                <Text style={forgorPasswordScreenStyles.forgorPasswordSubmitButton} 
                onPress={retrievePassword}> Retrieve my password </Text>
                </TouchableOpacity>
            </View>

            <View>
            <Text style={forgorPasswordScreenStyles.orText}> Or </Text>
            </View>
                <View>
                <TouchableOpacity>
                <Text style = {forgorPasswordScreenStyles.logInButton}
                    onPress={navigateTo}
                    >Back to login</Text>
              </TouchableOpacity>
                     <TouchableOpacity >
                         <Text style={forgorPasswordScreenStyles.createNewAccount}
                          onPress={ navigateTo } > Create new acount </Text >
                     </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

export default forgotPasswordScreen;

// Style elements //
forgorPasswordScreenStyles = StyleSheet.create({
    forgotPasswordInput:{
        top:250,
        margin: 10,
        height: 40,
        borderBottomColor: '#0080FF',
        borderBottomWidth: 1,   
    },
    forgorPasswordText:{
        color:'#0080FF',
        fontSize:20,
        fontWeight:'bold',
        top:100,
        left:70
    },
    forgorPasswordSubmitButton:{
        paddingTop: 7,
        paddingBottom: 5,
        textAlign:'center',
        height:35,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#0080FF',
        color:'#0080FF',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'bottom',
        top:290,
        width:250,
        textAlign:'center',
        left:70
    },
    orText:{
        top:390,
        color:'#0080FF',
        fontSize:20,
        fontWeight:'bold',
        left:180
    },
    logInButton:{
        fontWeight:'bold',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#0080FF',
        color: '#0080FF',
        top:300,
        margin: 5,
        height: 40,
        color: '#0080FF',
        textAlign:'center',
        fontSize:15
    },
    createNewAccount:{
        fontWeight:'bold',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#0080FF',
        color:'#0080FF',
        top:350,
        fontSize:15,
        textAlign:'center',
        margin: 5,
        height: 40,
    },


})
