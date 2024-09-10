import { CategoryRoundedCard, GenderButtons, ProductCard } from "../components";
import { tw } from "../lib";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useProductsStore } from "../store";
import { deviceWidth, isTablet } from "../constants";

export function HomeScreen() {
  const products = useProductsStore.use.products();
  const categories = useProductsStore.use.categories();

  return (
    <View style={tw`gap-4`}>
      <LinearGradient colors={["#50072444", "transparent", "transparent"]}>
        <View style={tw`items-center w-full`}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={tw`flex-row gap-5 ml-4 h-36 ${isTablet ? " pt-6" : "pt-8"}`}>
              {categories && categories.map((category) => <CategoryRoundedCard key={category.id} {...category} />)}
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row flex-wrap gap-4 justify-center`}>
          {products && products.map((product) => <ProductCard key={product.id} {...product} />)}
        </View>
        <View style={tw`h-60`} />
      </ScrollView>
    </View>
  );
}
