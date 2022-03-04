import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Form , Icon, Button, Text, Content, Item, Input, Label } from 'native-base';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userStoreContext } from '../context/UserContext';

const LoginScreen = () => {

  const userStore = React.useContext(userStoreContext);

  return (
    <Container>
        <Content padder>

        <Formik
       initialValues={{
         email: '',
         password: '',
       }}
       //validationSchema={ValidateSchema}
       onSubmit={async (values, {setSubmitting}) => {
         // same shape as initial values
         // alert(JSON.stringify(values));
         try {
          const url = 'https://api.codingthailand.com/api/login';
          const res = await axios.post(url,{
            email : values.email,
            password : values.password
          });
          await AsyncStorage.setItem('@token',JSON.stringify(res.data));
          const urlprofile = 'https://api.codingthailand.com/api/profile';
          const resprofile = await axios.get(urlprofile,{
            headers:{
              Authorization : 'Bearer '+ res.data.access_token
            }
          })
          await AsyncStorage.setItem('@profile',JSON.stringify(resprofile.data.data.user));
          
          const profile = await AsyncStorage.getItem('@profile')
          userStore.updateprofile(JSON.parse(profile))

          alert('Login Successfully');
          navigation.navigate('HomeScreen');
         } catch (error) { 
           alert(error.response.data.message);
         }finally{
           setSubmitting(false);
         }
       }}
     >
       {({ errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting }) => ( //Error State 
         <Form>
         
         <Item fixedLabel error={errors.email&&touched.email?true:false}>
           <Label>Email</Label>
           <Input
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType='email-address'
           />
         </Item>

        <Item fixedLabel error={errors.password&&touched.password?true:false}>
           <Label>Password</Label>
           <Input
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              keyboardType='number-pad'
           />
         </Item>
         <Button block large onPress={handleSubmit}
           disabled = {isSubmitting}
           style = {{marginTop:30, backgroundColor:'#b19cd9'}}>
           <Text style ={{color:'white', fontSize:15, fontWeight:'bold'}}>Login</Text>
         </Button>
     </Form>
       )}
     </Formik>

        </Content>
    </Container>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})