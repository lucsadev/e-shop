import tw from "@/src/lib/tailwind";

import { useState } from "react";
import { Button, TextInput } from "@/src/components/ui";
import { Pressable, Text, View } from "react-native";

export default function TabOneScreen() {
  const [text, setText] = useState("");

  return (
    <View style={tw`container-center bg-background`}>
      <Text style={tw`text-3xl font-bold`}>Tab One</Text>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
        styles="w-3/4"
      />
      <Button
        label="button"
        onPress={() => console.log(text)}
        size='lg'
        variant='outline'
        styleButton="m-5"
      />
      <Button
        label="button"
        onPress={() => console.log(text)}
      />
    </View>
  );
}
