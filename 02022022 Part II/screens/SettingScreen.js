import { View, Text, Button } from 'react-native';
import React from 'react';

import {styles} from '../components/styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const SettingScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 15}}>
          <View style={styles.container}>
            <Text style={styles.textTopStyle}>Setting Screen</Text>
            
            <View style={{height:50, width:250}}>
              <Button
                title="Home Tab"
                onPress={() => navigation.navigate('HomeScreen')}
                color={'#FFAEBC'}
              />
              </View>
              <View style={{height:50, width:250}}>
              <Button
                title="News Screen"
                //onPress={() => navigation.navigate('NewsScreen')}
                color={'#FFAEBC'}
              />
              </View>
              <View style={{height:50, width:250}}>
              <Button
                title="Profile Tab"
                onPress={() => navigation.navigate('ProfileScreen')}
                color={'#FFAEBC'}
              />
            </View>
  
            <View style={{bottom: 5, position: 'absolute'}}>
              <Text style={styles.textBottomStyle}>
                www.tni.ac.th
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

export default SettingScreen;
