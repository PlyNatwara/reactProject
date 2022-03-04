import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { userStoreContext } from '../context/UserContext';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Register"
            iconName="person-add"
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </HeaderButtons>
      ),  
    });
  }, [navigation]);

  const userStore = React.useContext(userStoreContext);

  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={30} color="#99a8df" />
      {
        userStore.profile && (
          <>
            <Text>Welcome : {userStore.profile.name}</Text>
            <Text>Email   : {userStore.profile.email}</Text>
          </>
        )
      }
      <Text>MainPage</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {email: 'ar.natwara_st@tni.ac.th'})
        }  
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});