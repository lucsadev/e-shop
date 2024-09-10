import Icon from "react-native-vector-icons/FontAwesome";
import { tw } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";

import { ActivityIndicator, Pressable, Text } from "react-native";
import { colors, primaryColorLight } from "@/constants";

type Props = {
  onPress: () => void;
  label: string;
  disabled?: boolean;
  loading?: boolean;
  styleButton?: string;
  styleText?: string;
  leftIcon?: string;
  rightIcon?: string;
};

const buttonVariants = cva("rounded-md ", {
  variants: {
    variant: {
      default: "bg-primary",
      destructive: "bg-destructive",
      outline: "border-2 border-primary",
      secondary: "bg-secondary",
      ghost: "active:bg-accent",
    },
    size: {
      default: "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8 native:h-14",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const buttonTextVariants = cva("text-sm font-medium text-foreground", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      destructive: "text-destructive-foreground",
      outline: "text-primary",
      secondary: "text-secondary-foreground",
      ghost: "",
    },
    size: {
      default: "",
      sm: "",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = Props & VariantProps<typeof buttonVariants>;

export function Button(props: ButtonProps) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        tw.style(
          `flex-row gap-3 items-center`,
          buttonVariants({ variant: props.variant, size: props.size }),
          props.styleButton
        ),
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      disabled={props.disabled}
    >
      <>
        {props.loading && (
          <ActivityIndicator size="small" color={colors[(props.variant as keyof typeof colors) || "default"]} />
        )}
        {props.leftIcon && (
          <Icon name={props.leftIcon} size={16} color={colors[(props.variant as keyof typeof colors) || "default"]} />
        )}
        <Text style={tw.style(`capitalize`, buttonTextVariants({ variant: props.variant, size: props.size }))}>
          {props.label}
        </Text>
        {props.rightIcon && (
          <Icon name={props.rightIcon} size={16} color={colors[(props.variant as keyof typeof colors) || "default"]} />
        )}
      </>
    </Pressable>
  );
}
