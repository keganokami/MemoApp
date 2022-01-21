import React from 'react';

import LoginScreen from './src/screens/LoginScreen';
import SingUpScreen from './src/screens/SingUpScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreen from './src/screens/MemoListScreen';

export default function App() {
  return (
    <MemoListScreen />
    // <MemoEditScreen />
    // <LoginScreen />
    // <SingUpScreen />
    // <MemoCreateScreen />
    // <MemoDetailScreen />
  );
}
