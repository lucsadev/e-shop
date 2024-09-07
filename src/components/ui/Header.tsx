import { View, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import type { DrawerHeaderProps } from "@react-navigation/drawer";
import { tw } from "@/src/lib";
import { LinearGradient } from "expo-linear-gradient";

export function Header(props: DrawerHeaderProps) {
  const { top } = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <LinearGradient style={tw`h-30 pt-5`} colors={["#50072488","#50072444" ]}>
      <View style={tw`h-20 mt-[${top}] px-2`}>
        <View>
          <Text style={tw`text-xl font-bold text-center`}>E-Shop</Text>
        </View>
        <View style={tw`flex-1 w-full flex-row justify-between items-center`}>
          <Icon name="menu" size={26} color="black" onPress={props.navigation.openDrawer} />
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
