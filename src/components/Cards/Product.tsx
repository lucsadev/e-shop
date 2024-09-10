import { cloudinary } from "@/db/Cloudinary";
import { formatPrice, tw } from "@/lib";
import { AdvancedImage } from "cloudinary-react-native";
import { Pressable } from "react-native";
import { Card, Text } from "react-native-paper";
import type { IProduct } from "@/types/models";
import { router } from "expo-router";

//const noImage = "https://robmflyfegerrawawpxk.supabase.co/storage/v1/object/public/images/categories/no-image.png";

export function ProductCard(product: IProduct) {
  const img = product.images ? product.images[0] : "no-image.png";
  const myImage = cloudinary.image(`e-shop/products/${img}`);
  return (
    <Card style={tw`w-44 rounded-md overflow-hidden`}>
      <Pressable
        style={({ pressed }) => tw`w-full h-44 rounded-md overflow-hidden ${pressed ? "bg-blue-100" : "bg-gray-200"}`}
        onPress={() => router.push(`/details/${product.id}`)}       
      >
        <AdvancedImage cldImg={myImage} style={tw`w-full h-44`} />
      </Pressable>
      <Card.Title titleNumberOfLines={2} title={product.name} subtitle={formatPrice(product.price)} titleStyle={tw`font-bold`} />
    </Card>
  );
}
