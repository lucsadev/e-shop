import { cloudinary } from "@/db/Cloudinary";
import { tw } from "@/lib";
import { AdvancedImage } from "cloudinary-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useWindowDimensions, View } from "react-native";

type Props = {
  item: string;
  scrollToSlide: (index: number) => void;
};

export function SlideItem({ item, scrollToSlide }: Props) {
  const { width } = useWindowDimensions();
  const img = item || "no-image.png";
  const myImage = cloudinary.image(`e-shop/products/${img}`);

  return (
    <View style={[tw`mt-5`, { width, height: width }]}>
      <LinearGradient style={tw``} colors={["transparent", "#fff", "#fff", "#fff"]}>
        <AdvancedImage cldImg={myImage} style={tw`w-full h-full`} />       
      </LinearGradient>
    </View>
  );
}
