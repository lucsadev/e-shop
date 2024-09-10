import { LinearGradient } from "expo-linear-gradient";
import { View} from "react-native";
import { tw } from "../lib";

export function ProfileScreen() {
  return (
    <LinearGradient colors={["#50072444", "transparent", "transparent"]}>
      <View style={tw`h-44 w-full`}>
      </View>
    </LinearGradient>
  );
}
