import React from 'react';
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';

export default function LoginScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="Email address" />
        <TextInput style={styles.input} value="password" />
        <Button
          label="Submit"
          onPress={() => {
            // 0番目をMemoListで上がいて表示する
            navigation.reset({
              index: 0,
              routes: [{
                name: 'MemoList',
              }],
            });
          }}
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
    color: '#DDDDDD',
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
