import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Splash, Login, Register, WelcomeAuth} from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splashscreen" component={Splash} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
