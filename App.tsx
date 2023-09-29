import {
  ConnectionProvider,
  RPC_ENDPOINT,
} from './components/old/providers/ConnectionProvider';
import {clusterApiUrl} from '@solana/web3.js';
import React from 'react';

// import MainScreen from './screens/MainScreen';
import Navigation from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={clusterApiUrl(RPC_ENDPOINT)}>
      {/* <AuthorizationProvider> */}
      <SafeAreaProvider>
        {/* <MainScreen /> */}
        <Navigation />
      </SafeAreaProvider>
      {/* </AuthorizationProvider> */}
    </ConnectionProvider>
  );
}
