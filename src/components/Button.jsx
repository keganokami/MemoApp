import { string } from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.bottonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  )
}

Button.protoTypes = {
  label: string.isRequired,
}


const styles = StyleSheet.create({
  bottonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    // 伸びたボタンを左に詰める
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#FFFFFF',
  },
})