import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ url: process.env.WEBVIEW_SOURCE_URL || 'https://block-sword-game.netlify.app/' }}
    />
  );
}9

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
