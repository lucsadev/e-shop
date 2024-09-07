import { CategoryCard, GenderButtons, ProductCard } from "../components";
import { tw } from "../lib";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useProductsStore } from "../store";

export function HomePage() {
  const products = useProductsStore.use.products();
  const categories = useProductsStore.use.categories();

  return (
    <View style={[tw`gap-4`]}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <LinearGradient colors={["#50072444", "transparent"]}>
          <View style={tw`flex-row flex-wrap gap-5 justify-center pt-7 ml-4 h-44`}>
            {categories && categories.map((category) => <CategoryCard key={category.id} {...category} />)}
          </View>
        </LinearGradient>
      </ScrollView>
      <View style={tw`border-b border-gray-300 pb-3`}>
        <GenderButtons />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row flex-wrap gap-4 justify-center mt-4`}>
          {products && products.map((product) => <ProductCard key={product.id} {...product} />)}
        </View>
        <View style={tw`h-60`} />
      </ScrollView>
    </View>
  );
}
