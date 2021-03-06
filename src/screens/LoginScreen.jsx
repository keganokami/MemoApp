/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';
import Button from '../components/Button';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;

  // propsが変わりレンダリングされるタイミングで実行されてしまう
  useEffect(() => {
    const unsubcribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{
            name: 'MemoList',
          }],
        });
      }
    });
    return unsubcribe;
  }, []); // こうすることで画面が表示された1回だけ実行される。配列には監視する値を入れることができる ex: [foo]

  function handlePress() {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 0番目をMemoListで上がいて表示する
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{
            name: 'MemoList',
          }],
        });
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          // スマホ側の自動補完
          textContentType="password"
        />
        <Button
          label="Submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registerd?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{
                  name: 'SingUp',
                }],
              });
            }}
          >
            <Text style={styles.footerLink}>Sing up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    paddingHorizontal: 8,
    fontSize: 16,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },

});
