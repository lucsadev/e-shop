import { View, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { tw } from "@/lib";
import { LinearGradient } from "expo-linear-gradient";
import { useProductsStore } from "@/store";
import { router } from "expo-router";

export function HeaderScreen() {
  const { top } = useSafeAreaInsets();
  const searchQuery = useProductsStore.use.searchQuery();
  const setSearchQuery = useProductsStore.use.setSearchQuery();

  return (
    <LinearGradient style={tw`h-40`} colors={["#50072488", "#F2F2F2"]}>
      <View style={tw`h-20 mt-[${top}] px-2`}>
        <View>
          <Text style={tw`text-xl font-bold text-center`}>E-Shop</Text>
        </View>
        <View style={tw`flex-1 w-full flex-row justify-between items-center`}>
          <Icon name="arrow-left" size={26} color="black"  onPress={() => router.back()}/>
          <Searchbar
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={tw`w-2/3 h-8 items-center`}
            inputStyle={tw`text-sm pb-6`}
            elevation={1}
          />
          <Icon name="shopping-outline" size={26} color="black" />
        </View>
      </View>
    </LinearGradient>
  );
}
