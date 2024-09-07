import { tw as twrnc } from "@/src/lib";
import { useProductsStore } from "@/src/store";
import { Text, View } from "react-native";

const { style: tw } = twrnc;

const BUTTONS = [
  { value: "Unisex", label: "Unisex" },
  { value: "Men", label: "Men" },
  { value: "Women", label: "Women" },
];

export const GenderButtons = () => {
  const filterGender = useProductsStore.use.filterGender();
  const toggleFilterGender = useProductsStore.use.toggleFilterGender();

  return (
    <View
      style={tw(
        `flex-row items-center justify-center h-8 w-10/12 self-center border border-gray-300 rounded-md shadow overflow-hidden`
      )}
    >
      <Text
        style={tw(`text-center font-bold text-gray-400 text-lg w-1/3 h-full shadow ${filterGender === "Unisex" ? "bg-[#500724]" : "bg-background"}`)}
        onPress={() => toggleFilterGender("Unisex")}
      >
        Unisex
      </Text>
      <View style={tw(`border-l border-gray-300 w-[1px] h-full`)} />
      <Text
        style={tw(`text-center font-bold text-gray-400 text-lg w-1/3 h-full shadow ${filterGender === "Men" ? "bg-[#500724]" : "bg-background"}`)}
        onPress={() => toggleFilterGender("Men")}
      >
        Hombre
      </Text>
      <View style={tw(`border-l border-gray-300 w-[1px] h-full`)} />
      <Text
        style={tw(`text-center font-bold text-gray-400 text-lg w-1/3 h-full shadow ${filterGender === "Women" ? "bg-[#500724]" : "bg-background"}`)}
        onPress={() => toggleFilterGender("Women")}
      >
        Mujer
      </Text>
    </View>
  );
};
