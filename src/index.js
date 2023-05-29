import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AdicionarPessoa from "./screens/AdicionarPessoa";
import AdicionarFruta from "./screens/AdicionarFruta";
import AdicionarCor from "./screens/AdicionarCor";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AdicionarPessoa" component={AdicionarPessoa} />
        <Stack.Screen name="AdicionarFruta" component={AdicionarFruta} />
        <Stack.Screen name="AdicionarCor" component={AdicionarCor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
