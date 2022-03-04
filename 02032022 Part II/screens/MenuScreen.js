import {View, ScrollView} from 'react-native';
import React from 'react';
import {Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {userStoreContext} from '../context/UserContext';

const MenuScreen = ({navigation}) => {

  //const [profile,setprofile] = React.useState(Null);
  const userStore = React.useContext(userStoreContext);

  React.useEffect(() => {
    const getprofile = async () => {
      const profile = await AsyncStorage.getItem('@profile');
      if (profile) {
        userStore.updateprofile(JSON.parse(profile));
      }
    };
    getprofile();
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: undefined,
          height: 150,
        }}>
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
        {userStore.profile && (
          <>
            <Text style={{fontSize: 18, color: '#f4511e', fontWeight: 'bold'}}>
              Welcome {userStore.profile.name}
            </Text>
            <Text style={{fontSize: 14, color: '#f4511e', fontWeight: 'bold'}}>
              Welcome {userStore.profile.email}
            </Text>
          </>
        )}
        </View>
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
                <Icon active name="cart" />
              </Button>
            </Left>
            <Body>
              <Text>Product</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          {!userStore.profile && (
          <ListItem icon
            onPress={()=> navigation.navigate('LoginScreen')}
          >
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="log-in" />
              </Button>
            </Left>
            <Body>
              <Text>Login</Text>
            </Body>
            <Right>
                <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          )}

            {userStore.profile &&(
              <ListItem icon style={{marginBottom:10,marginTop:10}} onPress={async()=>{
                await AsyncStorage.removeItem('@token');
                await AsyncStorage.removeItem('@profile');
                userStore.updateprofile(null);
                navigation.closeDrawer();
              }}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="log-out" />
              </Button>
            </Left>
            <Body>
              <Text>Log Out</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
            )}

        </Content>
    </ScrollView>
  );
};

export default MenuScreen;