import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function AdicionarCor() {
  const [nome, setNome] = useState("");

  async function handleAdicionarCor() {
    console.log(nome);
    try {
      const corRef = collection(db, "cores");
      const inserir = {
        NomeFruta: nome,
      };
      const cor = await addDoc(corRef, inserir);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Adicionar Cores</Text>

      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <Button onPress={handleAdicionarCor}>Adicionar Cor</Button>
    </View>
  );
}
