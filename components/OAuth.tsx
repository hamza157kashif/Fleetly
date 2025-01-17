import { View, Text, Image } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <CustomButton
        title={"Log in with Google"}
        className="w-full mt-5 shadow-none"
        onPress={handleGoogleSignIn}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode={"contain"}
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant={"outline"}
        textVariant={"primary"}
      />
    </View>
  );
};

export default OAuth;
