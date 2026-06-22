import React from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { getSafeAreaInitialMetrics } from './src/Functions/safeArea';
import { AppNavigator } from './src/Navigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider
      initialMetrics={getSafeAreaInitialMetrics(initialWindowMetrics)}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor="transparent"
      />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
