/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const navigaton = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        // Hooksは別の関数の中に入れることはできない
        // NG: const navigaton = useNavigation(); Rule
        navigaton.reset({
          index: 0,
          routes: [{
            name: 'LogIn',
          }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました。');
      });
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
});
