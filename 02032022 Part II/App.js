import {} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import MenuScreen from './screens/MenuScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserStoreProvider from './context/UserContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#b19cd9'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'HomePage'}}
      />
        <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: 'RegisterPage'}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'LoginScreen'}}
      />
    </Stack.Navigator>
  );
};

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#b19cd9'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: 'Product'}}
      />
        <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{title: 'Detials'}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <UserStoreProvider>
      <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerPosition="left"
        drawerContent = {(props)=> <MenuScreen{...props}/>}
      >
        <Drawer.Screen name='HomeStack' component ={HomeStack}/>
        <Drawer.Screen name='ProductStack' component ={ProductStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </UserStoreProvider>
  );
};

export default App;