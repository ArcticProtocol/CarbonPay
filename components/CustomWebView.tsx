import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {RootStackScreenProps} from '../types/navigation';

type WebViewParams = {
  url: string;
};

export const CustomWebView: React.FC<RootStackScreenProps<'WebView'>> = ({
  route,
}) => {
  const params = route?.params as unknown as WebViewParams;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: params.url!}} style={styles.webView} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
