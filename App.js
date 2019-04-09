import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import Main from "./app/Main";

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB7b_Qt3O1ZvBOQoaxZdvsnj-QPDNa02MU",
      authDomain: "chatapp-ceadf.firebaseapp.com",
      databaseURL: "https://chatapp-ceadf.firebaseio.com",
      projectId: "chatapp-ceadf",
      storageBucket: "chatapp-ceadf.appspot.com",
      messagingSenderId: "425286328487"
    };
    firebase.initializeApp(config);
  }
  render() {
    return <Main />;
  }
}
