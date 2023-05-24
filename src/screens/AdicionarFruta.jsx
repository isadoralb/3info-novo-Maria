import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function AdicionarFruta() {
  const [nome, setNome] = useState("");

  async function handleAdicionarFruta() {
    console.log(nome);
    try {
      const frutaRef = collection(db, "frutas");
      const inserir = {
        NomeFruta: nome,
      };
      const fruta = await addDoc(frutaRef, inserir);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Adicionar Frutas</Text>

      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <Button onPress={handleAdicionarFruta}>Adicionar Frutas</Button>
    </View>
  );
}
