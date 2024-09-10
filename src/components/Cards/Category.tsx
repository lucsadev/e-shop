import { tw } from "@/lib";
import { useProductsStore } from "@/store";
import { CategoryType } from "@/types/DB";
import { router, useNavigation } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { Card } from "react-native-paper";

const baseUri = "https://robmflyfegerrawawpxk.supabase.co/storage/v1/object/public/images/categories/";

export function CategoryRoundedCard(category: CategoryType) {
  const resetFilterGender = useProductsStore.use.resetFilterGender();

  return (
    <Pressable
      style={({ pressed }) => tw.style(`w-20 h-28 rounded-md overflow-hidden`, { opacity: pressed ? 0.6 : 1 })}
      onPress={() => {
        resetFilterGender();
        router.push(`/categories/${category.id}`);
      }}
    >
      <View style={tw`w-full h-20 rounded-full bg-white shadow-lg shadow-red-900 p-1 overflow-hidden`}>
        <Image
          source={{
            uri: `${baseUri}${category.name ?? "no-image.png"}`,
          }}
          style={tw`w-full h-full rounded-full`}
          resizeMode="contain"
        />
      </View>
      <Text style={tw`text-sm text-black text-center`}>{category.name}</Text>
    </Pressable>
  );
}
export function CategoryCard(category: CategoryType) {
  const resetFilterGender = useProductsStore.use.resetFilterGender();

  return (
    <Card
      style={tw`w-28 h-28 rounded-md overflow-hidden bg-white`}
      onPress={() => {
        resetFilterGender();
        router.push(`/categories/${category.id}`);
      }}
    >
      <Card.Cover resizeMode="contain" style={tw`w-28 h-20 rounded-none bg-white`} source={{ uri: `${baseUri}${category.name ?? "no-image.png"}` }} />
      <Card.Content>
        <Text style={tw`text-sm text-black text-center`}>{category.name}</Text>
      </Card.Content>
    </Card>
  );
}
