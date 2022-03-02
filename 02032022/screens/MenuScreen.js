import {View, ScrollView} from 'react-native';
import React from 'react';
import {
  Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch} from 'native-base';

const MenuScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          }}>
          MainMenu
        </Text>
        {/* CODE FROM NATIVE BASE */}
        <Content>
          <ListItem icon
            onPress={()=> navigation.navigate('HomeStack')}
          >
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>MainPage</Text>
            </Body>
            <Right>
                <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon
             onPress={()=> navigation.navigate('ProductStack')}
          >
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Product</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon
            onPress={()=> navigation.navigate('LoginScreen')}
          >
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Login</Text>
            </Body>
            <Right>
                <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;