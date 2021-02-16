/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import HomeScreen from './screens/Home'
import PaymentScreen from './screens/Payment'
import PaymentConfirmScreen from './screens/Payment/PaymentConfirm'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from 'react-redux'
import store from './store'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: '#FF8686'}}}>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: 'Loja Virtual'}}/>
          <Stack.Screen name="Payment" component={PaymentScreen} options={{headerTitle: 'Pagamento com cartão'}}/>
          <Stack.Screen name="PaymentConfirm" component={PaymentConfirmScreen} options={{headerTitle: 'Pagamento com cartão'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
