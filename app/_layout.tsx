import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AppRegistry } from 'react-native';
import ClassPage from './classpage';

const appName = "studybuddies";

AppRegistry.registerComponent(appName, () => App);

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ClassPage />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
