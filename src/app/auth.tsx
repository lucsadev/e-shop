import { View, Text } from "react-native";
import { tw } from "@/lib";
import { useUserStore } from "@/store";
import { Redirect } from "expo-router";

export default function auth() {
  const isAuthenticated = useUserStore.use.isAuthenticated();
  const setUser = useUserStore.use.setUser();

  if (isAuthenticated) return <Redirect href="/(drawer)" />;

  return (
    <View style={tw`container-center`}>
      <Text style={tw`font-bold text-2xl`} onPress={() => setUser({name:'Lucas' })}>auth</Text>
    </View>
  );
}
