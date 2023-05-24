import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Navegação</Text>
      <Button style={styles.button} onPress={() => navigation.navigate("AdicionarPessoa")}>
       Adicionar Pessoa
      </Button>
      <Button Button style={styles.button} onPress={() => navigation.navigate("AdicionarFruta")}>
        Adicionar Fruta
      </Button>
    </View>
  );
}
