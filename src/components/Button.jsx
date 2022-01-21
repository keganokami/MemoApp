import { func, string } from 'prop-types';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.bottonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

Button.protoTypes = {
  label: string.isRequired,
  onPress: func,
}

Button.defaultProps = {
  onPress:  null,
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