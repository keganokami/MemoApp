import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoDetailScreen(props) {
  // 外から渡していない。→ ReactNavigationが提供している。
  const { navigation, route } = props;
  const { id } = route.params;

  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubcribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubcribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubcribe;
  });

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
