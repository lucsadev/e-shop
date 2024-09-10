import { useLocalSearchParams } from "expo-router";
import { useProductsStore } from "../store";
import { Slides } from "../components";
import { ScrollView, Text, View } from "react-native";
import { formatPrice, tw } from "../lib";
import { isTablet } from "../constants";

export function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = useProductsStore.use.products().find((product) => product.id === id);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Slides images={product?.images || []} />
      </View>
      <View style={tw`p-4 gap-5`}>
        <Text style={tw`font-bold ${isTablet ? "text-4xl" : "text-2xl"}`}>{product?.name}</Text>
        <Text style={tw` ${isTablet ? "text-3xl" : "text-xl"}`}>{formatPrice(product?.price!)}</Text>
      <View>
        <Text style={tw`font-bold  ${isTablet ? "text-2xl" : "text-lg"}`}>Descripción</Text>
        <Text style={tw` ${isTablet ? "text-xl" : ""}`}>{product?.description}</Text>
      </View>
      </View>
    </ScrollView>
  );
}
