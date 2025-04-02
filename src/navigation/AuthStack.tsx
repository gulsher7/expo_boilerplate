import {
  Login,
  Signup,
  OTPVerification
} from '@/screens';
import React from 'react';
import { AuthStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} id={undefined}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
    </Stack.Navigator>
  );
}; 

export default AuthStack;