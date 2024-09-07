import { TextInput as DefaultTextInput } from "react-native-paper";
import tw from "../../lib/tailwind";
import { primaryColorLight } from "@/src/constants/Colors";

type TextInputProps = React.ComponentProps<typeof DefaultTextInput> & {
    styles?: string
};

export function TextInput(props: TextInputProps) {
  return (
    <DefaultTextInput
      mode="outlined"
      activeOutlineColor={primaryColorLight}
      left={<DefaultTextInput.Icon icon="search" />}
      style={tw.style(`w-full h-9`, props.styles)}
      {...props}
    />
  );
}
