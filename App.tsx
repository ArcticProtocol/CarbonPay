import {
  ConnectionProvider,
  RPC_ENDPOINT,
} from './components/old/providers/ConnectionProvider';
import {clusterApiUrl} from '@solana/web3.js';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={clusterApiUrl(RPC_ENDPOINT)}>
      {/* <AuthorizationProvider> */}
      <SafeAreaView style={styles.shell}>
        <MainScreen />
      </SafeAreaView>
      {/* </AuthorizationProvider> */}
    </ConnectionProvider>
  );
}

const styles = StyleSheet.create({
  shell: {
    height: '100%',
  },
});
