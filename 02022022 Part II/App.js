import React from 'react';
import { Image, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {backgroundColor: '#b19cd9'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
    </Stack.Navigator>
  );
}

function SettingScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {backgroundColor: '#b19cd9'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: 'Setting Page'}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
}

function App (){
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color})=>{
          let iconName;
          if(route.name === "HomeScreen"){
            iconName = focused
            ? <Image source={require('./assets/logo1.png')} style={{width: 25, height: 25, marginLeft: 5}} />
            : <Image source={require('./assets/logo2.png')} style={{width: 25, height: 25, marginLeft: 5}} />;
          }else if(route.name == "SettingScreen"){
            iconName = focused
            ? <Image source={require('./assets/logo1.png')} style={{width: 25, height: 25, marginLeft: 5}} />
            : <Image source={require('./assets/logo3.png')} style={{width: 25, height: 25, marginLeft: 5}} />;
          }
          return iconName;
        }
      })}
      tabBarOptions={{
        activeTintColor:'indianred',
        inactiveTintColor: 'gray'
      }}
      >
      <Tab.Screen name="HomeScreen" component={HomeScreenStack}/>
      <Tab.Screen name="SettingScreen" component={SettingScreenStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;