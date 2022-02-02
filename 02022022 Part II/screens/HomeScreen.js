import { View, Text, Button } from 'react-native';
import React from 'react';

import {styles} from '../components/styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 15}}>
          <View style={styles.container}>
            <Text style={styles.textTopStyle}>Home Screen</Text>
            
            <View style={{height:50, width:250}}>
              <Button
                title="Setting Tab"
                onPress={() => navigation.navigate('SettingScreen')}
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

export default HomeScreen;
