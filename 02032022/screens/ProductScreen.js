import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons, HeaderButton, Item,} from 'react-navigation-header-buttons';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import {
  Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge,} from 'native-base';
const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
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
            title="register"
            iconName="person-add"
            onPress={() => alert('Register')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);

  let cancelToken;

  const getData = async () => {
    setloading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course',{
      cancelToken : cancelToken.token
    });
    setProduct(res.data.data);
    setloading(false);
  };

  useFocusEffect(
    React.useCallback(()=>{
      cancelToken = axios.CancelToken.source
      getData();
      return ()=>{
        //alert('Exit ProdutScreen');
        cancelToken.cancel();
      }
    },[])
  )

  // useEffect(() => {
  //   getData();
  // }, []);

  if(loading===true){
    return(
      <View style={styles.container}>
        <ActivityIndicator color='#c0ffee' size='large' />
      </View>
    )
  }

  const _onRefresh =()=>{
    getData();
  }

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={item => item.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({item}) => (
          <ListItem thumbnail onPress={()=>{
            navigation.navigate('DetailScreen',{
              id:item.id,
              title:item.title
            })
          }}>
            <Left>
              <Thumbnail square source={{uri: item.picture}} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
