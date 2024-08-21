import { TouchableOpacity, Text } from "react-native";
import { getBgVariantStyle, getTextVariantStyle } from "@/constants/helper";
import { ButtonProps } from "@/types/type";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  bgVariant?: ButtonProps["bgVariant"];
  textVariant?: ButtonProps["textVariant"];
  IconLeft?: any;
  IconRight?: any;
  className?: string;
}
const CustomButton = ({
  title,
  onPress,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className = "",
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full flex flex-row p-2 rounded-full justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
