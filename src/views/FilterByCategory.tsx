import { GenderButtons, ProductCard } from "@/components";
import { tw } from "@/lib";
import { useProductsStore } from "@/store";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export function FilterByCategoryScreen() {
  const { id } = useLocalSearchParams();
  const filterGender = useProductsStore.use.filterGender();
  const category = useProductsStore.use.categories().find((category) => category.id === id);
  const products = useProductsStore.use
    .products()
    .filter(
      (product) =>
        product.category === id &&
        (filterGender !== "" ? product.gender === filterGender || product.gender === "Unisex" : true)
    );

  return (
    <View>
      <Text style={tw`text-center font-bold text-2xl -top-2`}>{category?.name}</Text>
      <GenderButtons />
      <ScrollView showsVerticalScrollIndicator={false} style={tw`mt-6`}>
        <View style={tw`flex-row flex-wrap gap-4 justify-center`}>
          {products && products.map((product) => <ProductCard key={product.id} {...product} />)}
        </View>
        <View style={tw`h-60`} />
      </ScrollView>
    </View>
  );
}
