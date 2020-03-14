import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Navigator from './src/routes/navigationStack';

const App = () => {
  return (
    <>
      <Navigator />
    </>
  );
};
export default App;
