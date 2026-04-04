import { StyleSheet, TextInput, View, Text, Button, Modal, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { ThemedView } from "@/components/themed-view";


export default function Cadastro () {
const [nome,setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [conSenha, conSetSenha] = useState ("");
const [cpf, setCpf] = useState("");
const [num, numSet] = useState("");
const [modalVisible, setModalVisible] = useState(false);
const [modalTitle, setModalTitle] = useState("");
const [modalMessage, setModalMessage] = useState("");

const showModal = (title: string, message: string) => {
  setModalTitle(title);
  setModalMessage(message);
  setModalVisible(true);
};

const handleSubmit = () => {
  if (!nome || !email || !senha || !conSenha || !cpf || !num) {
    showModal("Erro", "Por favor, preencha todos os campos.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (nome.length < 10 || nome.length > 60) {
    showModal("Erro", "O nome deve conter entre 10 e 60 caracteres.");
    return;
  }
  
  if (!emailRegex.test(email)) {
    showModal("Erro", "Email inválido.");
    return;
  }

  if (senha.length < 6) {
    showModal("Erro", "A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  if (senha !== conSenha) {
    showModal("Erro", "As senhas não coincidem.");
    return;
  }

  const cpfOnlyDigits = cpf.replace(/\D/g, "");
  if (cpfOnlyDigits.length !== 11) {
    showModal("Erro", "CPF deve conter 11 dígitos.");
    return;
  }

  showModal("Sucesso", "Cadastro realizado com sucesso!");
};

    return( 
<ThemedView style={styles.container}>
    
        <Text>Titúlo</Text>

        <TextInput value={nome} 
        onChangeText={setNome}
        placeholder="Nome Completo"
        style={styles.input}/>

        <TextInput value={email} 
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"/>

          <TextInput value={senha} 
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}/>

          <TextInput value={conSenha} 
        onChangeText={conSetSenha}
        placeholder="Confirme sua Senha"
        secureTextEntry={true}
        style={styles.input}/>

          <TextInput value={cpf} 
        onChangeText={setCpf}
        placeholder="CPF"
        keyboardType ="numeric"
        style={styles.input}
        />

          <TextInput value={num} 
        onChangeText={numSet}
        placeholder="Número de Celular"
        keyboardType = "phone-pad"
        style={styles.input}/>
        
        <Button
          title="Enviar" onPress={handleSubmit}
        />

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <Text style={styles.modalMessage}>{modalMessage}</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
      width: "80%",
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 12,
      alignItems: "center",
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    modalMessage: {
      fontSize: 16,
      marginBottom: 12,
      textAlign: "center",
    },
    modalButton: {
      backgroundColor: "#800080",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
    },
    modalButtonText: {
      color: "#fff",
      fontWeight: "bold",
    }

})

