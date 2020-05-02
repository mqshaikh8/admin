import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStore} from 'redux'
import {Provider} from 'react-redux'


//components
import Home from './Screens/Home'
import adminReducer from './Redux/adminReducer'

let storeObj = createStore( adminReducer)
export default function App() {
  return (
    <Provider store={ storeObj }>
      <Home/>
      </Provider>
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
