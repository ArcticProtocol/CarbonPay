import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export const CustomWebView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://www.coraltribe.io/'}} // Change the URI to your desired website
        style={styles.webView}
      />
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
