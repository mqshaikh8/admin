import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

import {connect} from 'react-redux'
import {UserInfo} from '../Redux/actions'
function Login({navigation,UserInfo}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let handleSubmit = () => {
      fetch("https://religion-inc.herokuapp.com/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            password
        })
    })
    .then(res => res.json())
    .then(credentials =>{
      console.log(credentials)
        if(credentials.error){
            setError("Incorrect username or password")
        }else {
          localStorage.token(credentials.token)
          UserInfo(credentials.user)
          navigation.navigate('ActionContainer')
        }
        
    })
    }

    

    return(
        <View style={styles.container}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={handleSubmit}
        />
        {error ? <Text>{error}</Text> : null}
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });

export default connect(null,{UserInfo})(Login);