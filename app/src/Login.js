import React,{useState} from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
  } from 'react-native';  
import api from './axios'
 

  const Login = () =>{ 
    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')
    const[DadosLogin,setDadosLogin] = useState({})
    const[Resposta,setResposta] = useState('')

    const Logar = async () => {
      setDadosLogin({
        email:`${email}`,
        password:`${senha}`
      })
      const response = await api.post('sessions',DadosLogin)
      .then(function () {
        setResposta('Login Efetuado com Sucesso')
      console.log(response);
      })
      .catch(function (error) {
        setResposta('Falha no Login')
      console.log(error);
      });
}
    return (
      <View>
          <TextInput placeholder="Email" value={email} onChangeText={setEmail}></TextInput>
          <TextInput placeholder="Senha" value={senha} onChangeText={setSenha}></TextInput>
          <TouchableOpacity onPress={Logar}>
            <Text>
              Logar
            </Text>
          </TouchableOpacity>
          <Text>
            {Resposta}
          </Text>
    </View>
  );
}

export default Login;

