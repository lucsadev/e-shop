import { CategoryCard, CategoryRoundedCard } from "@/components";
import { tw } from "@/lib";
import { useProductsStore } from "@/store";
import { View, ScrollView, Text } from "react-native";

export function CategoriesScreen() {
  const categories = useProductsStore.use.categories();

  return (
    <View>
      <Text style={tw`text-center font-bold text-2xl -top-2`}>CATEGORÍAS</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row flex-wrap gap-5 justify-center py-3`}>
          {categories && categories.map((category) => <CategoryCard key={category.id} {...category} />)}
        </View>
      </ScrollView>
    </View>
  );
}
