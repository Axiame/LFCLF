import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useNavigation();
  const logo = require('../assets/la_frite.png');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
    } else if (!validateEmail(email)) {
      Alert.alert('Erreur', 'Veuillez entrer une adresse email valide');
    } else if (!validatePassword(password)) {
      Alert.alert(
        'Erreur',
        'Le mot de passe doit contenir au moins une majuscule, un caractère spécial et avoir au minimum 6 caractères.',
      );
    } else {
      // Vous pouvez traiter la connexion ici (par exemple, en appelant une API)
      Alert.alert('Succès', 'Vous êtes connecté!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoStyle} />
      <Input
        placeholder="Email"
        leftIcon={
          <Icon
            name="envelope"
            size={20}
            color="grey"
            style={styles.iconStyle}
          />
        }
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <Input
        placeholder={'Mot de passe'}
        leftIcon={
          <Icon name="lock" size={24} color="grey" style={styles.iconStyle} />
        }
        secureTextEntry={!showPassword}
        onChangeText={value => setPassword(value)}
        value={password}
        rightIcon={
          <Icon
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="grey"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Se connecter"
        onPress={handleLogin}
        buttonStyle={{backgroundColor: '#E21034'}}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Pas encore de compte ? S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  iconStyle: {
    marginRight: 10,
  },
  logoStyle: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: 'blue',
    marginTop: 15,
    textAlign: 'center',
  },
});

const validateEmail = (email: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regex.test(email);
};

const validatePassword = (password: string) => {
  // Vérifier s'il contient au moins une majuscule
  const hasUpperCase = /[A-Z]/.test(password);

  // Vérifier s'il contient au moins un caractère spécial
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>+/;]/.test(password);

  // Vérifier s'il a au moins 6 caractères
  const isLengthValid = password.length >= 6;

  return hasUpperCase && hasSpecialCharacter && isLengthValid;
};

export default LoginScreen;
