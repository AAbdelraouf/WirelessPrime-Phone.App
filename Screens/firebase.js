import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import * as firebase from 'firebase';
import { database } from 'firebase';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC4jsvf0PsZvYTH_25jXLAdLXpDVFg1uhw",
  authDomain: "cinegearsuserslist.firebaseapp.com",
  databaseURL: "https://cinegearsuserslist.firebaseio.com",
  projectId: "cinegearsuserslist",
  storageBucket: "",
  messagingSenderId: "934939093990"
};
firebase.initializeApp(config);


  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();