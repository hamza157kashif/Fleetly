import { ButtonProps } from "@/types/type";

export const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    case "primary":
      return "bg-[#0286ff]";
    default:
      return "bg-[#0286ff]";
  }
};

export const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    case "secondary":
      return "text-gray-100";
    default:
      return "text-white";
  }
};
