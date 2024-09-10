import { router, usePathname } from "expo-router";
import { DrawerContentScrollView, DrawerItem, type DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { tw } from "@/lib";
import { LinearGradient } from "expo-linear-gradient";

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  return (
    <DrawerContentScrollView contentContainerStyle={tw`-top-12`} {...props}>
      <LinearGradient style={tw`border-b border-gray-300 mb-3`} colors={["#50072470","#50072433", "transparent" ]}>
      <View style={tw`flex-row px-[10px] py-5 mt-8`}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/26.jpg" }}
          width={80}
          height={80}
          style={tw`rounded-full`}
        />
        <View style={tw`ml-3 mt-6`}>
          <Text style={tw`text-lg font-bold`}>John Doe</Text>
          <Text style={tw`underline italic`}>john@email.com</Text>
        </View>
      </View>
      </LinearGradient>
      <DrawerItem
        icon={({ color, size }) => <Icon name="home-outline" size={size} color={pathname == "/" ? "#fff" : "#000"} />}
        label={"Inicio"}
        labelStyle={[tw`-ml-5`, { color: pathname == "/" ? "#fff" : "#000" }]}
        style={{ backgroundColor: pathname == "/" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="account-cog-outline" size={size} color={pathname == "/profile" ? "#fff" : "#000"} />
        )}
        label={"Perfil"}
        labelStyle={[tw`-ml-5`, { color: pathname == "/profile" ? "#fff" : "#000" }]}
        style={{ backgroundColor: pathname == "/profile" ? "#333" : "#fff" }}
        onPress={() => {
          props.navigation.closeDrawer();
          router.push("/profile");
        }}
        />

      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="format-list-checkbox" size={size} color={pathname == "/categories" ? "#fff" : "#000"} />
        )}
        label={"Categorías"}
        labelStyle={[tw`-ml-5`, { color: pathname == "/categories" ? "#fff" : "#000" }]}
        style={{ backgroundColor: pathname == "/categories" ? "#333" : "#fff" }}
        onPress={() => {
          props.navigation.closeDrawer();          
          router.push("/categories");
        }}
      />
    </DrawerContentScrollView>
  );
};
