import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function AdicionarPessoa() {
  const [nome, setNome] = useState("");

  async function handleAdicionarPessoa() {
    console.log(nome);
    try {
      const pessoaRef = collection(db, "pessoas");
      const inserir = {
        NomePessoa: nome,
      };
      const pessoa = await addDoc(pessoaRef, inserir);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1} >Adicionar Pessoa</Text>

      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <Button onPress={handleAdicionarPessoa}>Adicionar Pessoa</Button>
    </View>
  );
}
