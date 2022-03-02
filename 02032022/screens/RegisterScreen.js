import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Form , Icon, Button, Text, Content, Item, Input, Label } from 'native-base';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ValidateSchema = Yup.object().shape({
  name: Yup.string().required('Please Enter Your Name'),
  email: Yup.string().email('Please Enter Your email').required('Please Enter Your Email'),
  password: Yup.string().min(3,'need more than 3 chars').required('Please Enter Your Password'),
});

const RegisterScreen = () => {
  return (
    <Container>
        <Content padder>

        <Formik
       initialValues={{
         name: '',
         email: '',
         password: '',
       }}
       validationSchema={ValidateSchema}
       onSubmit={async (values, {setSubmitting}) => {
         // same shape as initial values
         // alert(JSON.stringify(values));
         try {
           const url = 'https://api.codingthailand.com/api/register';
           const res = await axios.post(url,{
             name : values.name,
             email : values.email,
             password : values.password
           });
           alert(res.data.message)
           navigation.navigate('HomeScreen');
         } catch (error) { 
           alert(error.response.data.errors.email[0]);
         }finally{
           setSubmitting(false);
         }
       }}
     >
       {({ errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting }) => ( //Error State 
         <Form>
         <Item fixedLabel error={errors.name&&touched.name?true:false}>
           <Label>Name</Label>
           <Input
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
           />
           {errors.name && touched.name && <Icon name='close-circle' />}
         </Item>
         {
             errors.name && touched.name && (
                <Item>
                  <Label style={{color:'red'}}>{errors.name}</Label>
                </Item>
             )
           }
         
         <Item fixedLabel error={errors.email&&touched.email?true:false}>
           <Label>Email</Label>
           <Input
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
           />
           {errors.email && touched.email && <Icon name='close-circle' />}
         </Item>
         {
             errors.email && touched.email && (
                <Item>
                  <Label style={{color:'red'}}>{errors.email}</Label>
                </Item>
             )
           }

<Item fixedLabel error={errors.password&&touched.password?true:false}>
           <Label>Password</Label>
           <Input
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
           />
           {errors.password && touched.password && <Icon name='close-circle' />}
         </Item>
         {
             errors.password && touched.password && (
                <Item>
                  <Label style={{color:'red'}}>{errors.password}</Label>
                </Item>
             )
           }
         <Button block large onPress={handleSubmit}
           disabled = {isSubmitting}
           style = {{marginTop:30, backgroundColor:'#b19cd9'}}>
           <Text style ={{color:'white', fontSize:15, fontWeight:'bold'}}>Register</Text>
         </Button>
     </Form>
       )}
     </Formik>

        </Content>
    </Container>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})