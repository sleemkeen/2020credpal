import React from 'react';
import { Root } from "native-base";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Router from "./controllers/router";
import store from './redux/store/index'
import NavigationService from './NavigationService';

export default function App() {
  return (
    <Provider store={store}>
        <Root>
          <Router ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
        </Root>
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