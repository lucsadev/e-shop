import { tw } from "@/src/lib";
import { useProductsStore } from "@/src/store";
import { CategoryType } from "@/src/types/DB";
import { Image, Pressable, Text, View } from "react-native";

const baseUri = "https://robmflyfegerrawawpxk.supabase.co/storage/v1/object/public/images/categories/";

export function CategoryCard(category: CategoryType) {
  const setFilterCategory = useProductsStore.use.setFilterCategory()  
  return (
    <Pressable
      style={({ pressed }) =>
        tw.style(`w-20 h-28 rounded-md overflow-hidden`, { opacity: pressed ? 0.6 : 1})
      }
      onPress={() => setFilterCategory(category.id)}
    >
      <View style={tw`w-full h-20 rounded-full bg-white shadow-lg shadow-red-900 p-1 overflow-hidden`}>
        <Image
          source={{
            uri: `${baseUri}${category.image ?? "no-image.png"}`,
          }}
          style={tw`w-full h-full rounded-full`}
          resizeMode="contain"
        />
      </View>
      <Text style={tw`text-sm text-black text-center`}>{category.name}</Text>
    </Pressable>
  );
}
