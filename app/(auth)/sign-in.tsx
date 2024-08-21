import { Text, ScrollView, View, Image, Alert } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useCallback, useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";

interface ISignInForm {
  email: string;
  password: string;
}
const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [form, setForm] = useState<ISignInForm>({
    email: "",
    password: "",
  });
  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/home");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Log in failed. Please try again.");
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form]);
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <Image source={images.signUpCar} className="h-[250px] z-0 w-full" />
        <Text className="text-black text-2xl font-JakartaSemiBold relative bottom-5 left-5">
          Welcome 👋
        </Text>
      </View>
      <View className="p-5">
        <InputField
          label={"Email"}
          placeholder={"Enter your email"}
          icon={icons.email}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label={"Password"}
          placeholder={"Enter your password"}
          icon={icons.lock}
          value={form.password}
          secureTextEntry={true}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        <CustomButton
          title={"Sign In"}
          onPress={onSignInPress}
          className="mt-6"
        />
        <OAuth />
        <Link
          href={"/(auth)/sign-up"}
          className="text-lg text-center text-general-200  mt-10"
        >
          <Text>Don't have an account? </Text>
          <Text className="text-primary-500">Sign up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignIn;
