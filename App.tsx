import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Se connecter'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: "S'inscrire"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
