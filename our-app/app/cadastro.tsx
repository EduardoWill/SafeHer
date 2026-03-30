import { StyleSheet, TextInput, View, Text} from "react-native";
import React, {useState} from "react";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";


export default function Cadastro () {
const [nome,setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [conSenha, conSetSenha] = useState ("");
const [cpf, setCpf] = useState("");
const [num, numSet] = useState("");
    return( 
<ThemedView style={styles.container}>
    
        <Text>Bah</Text>
        <TextInput value={nome} 
        onChangeText={setNome}
        placeholder="Nome Completo"
        style={styles.input}/>
        <TextInput value={email} 
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}/>
          <TextInput value={senha} 
        onChangeText={setSenha}
        placeholder="Senha"
        style={styles.input}/>
          <TextInput value={conSenha} 
        onChangeText={conSetSenha}
        placeholder="Confirme sua Senha"
        style={styles.input}/>
          <TextInput value={cpf} 
        onChangeText={setCpf}
        placeholder="CPF"
        style={styles.input}/>
          <TextInput value={num} 
        onChangeText={numSet}
        placeholder="Número de Celular"
        style={styles.input}/>
        
   
</ThemedView>
);


}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    input: {
        width: 300,
        height: 60,
        margin: 1,
        borderWidth:0.5,
        padding:20,
        borderRadius: 20,
        borderColor: "#800080",
    }


})

