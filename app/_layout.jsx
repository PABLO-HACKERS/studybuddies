import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import ClassPage from './classpage';

AppRegistry.registerComponent(appName, () => App);

if (module.hot) {
  module.hot.accept();
}

export default function App() {
  return (
    <View style={styles.container}>
      <ClassPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
