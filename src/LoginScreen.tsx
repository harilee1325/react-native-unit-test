import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

interface Props {
  onLogin: (username: string, password: string) => void;
}

const LoginPage: React.FC<Props> = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Username and password are required');
      return;
    }
    onLogin(username, password);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        testID="usernameInput"
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        testID="passwordInput"
      />
      <Button title="Login" onPress={handleLogin} testID="loginButton" />
      {errorMessage ? <Text testID="errorMessage">{errorMessage}</Text> : null}
    </View>
  );
};

export default LoginPage;
