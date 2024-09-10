import { tw } from "@/lib";
import { Pressable, View } from "react-native";

type Props = {
  quantityImages: number;
  currentIndex: number;
  scrollToSlide: (index: number) => void;
};

export function SlidesDotsPagination({ quantityImages, currentIndex, scrollToSlide }: Props) {
  return (
    <View style={tw`flex-row gap-3 justify-center items-center z-50 w-full bg-white h-5`}>
      {Array.from({ length: quantityImages }).map((_, index) => (
        <Pressable
          onPress={() => scrollToSlide(index)}
          key={index}
          style={tw`h-4 w-4 rounded-full border-2 border-gray-300 ${index === currentIndex ? "bg-[#500724]" : "bg-white"}`}
        />
      ))}
    </View>
  );
}
