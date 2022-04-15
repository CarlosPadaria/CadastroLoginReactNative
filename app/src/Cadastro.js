import React,{useState} from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
  } from 'react-native'; 
import api from './axios'  
  
  const Cadastro = () =>{

    const[nome,setNome] = useState('');
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');
    const[confirmarSenha,setConfirmarSenha] = useState('');
    const[textoConfirmacao,setTextoConfirmacao] = useState('');
    const[users,setUsers] = useState({})

    const handleCadastrar = async () => 
    {
      if(senha === confirmarSenha)
      {
        setUsers(
          {
            email: `${email}`,
            name: `${nome}`,
            password:`${senha}`
          }
        )
        setTextoConfirmacao("")

        const response = await api.post('users', users)
        .then(function () {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          setTextoConfirmacao(String(error))
        });
      }
      else
      {
        console.log("Senhas incompatíveis")
        setTextoConfirmacao("Senhas Incompatíveis")
      }
    }

    return (
      <View>
          <TextInput value={nome} onChangeText={setNome} placeholder="Nome"></TextInput>
          <TextInput value={email} onChangeText={setEmail} placeholder="Email"></TextInput>
          <TextInput value={senha} onChangeText={setSenha} placeholder="Senha"></TextInput>
          <TextInput value={confirmarSenha} onChangeText={setConfirmarSenha} placeholder="Confirmar Senha"></TextInput>
          <TouchableOpacity onPress={handleCadastrar}>
            <Text>
              Cadastrar
            </Text>
          </TouchableOpacity>
          <Text>
            {textoConfirmacao}
          </Text>
      </View>
  ); 
}

export default Cadastro;

