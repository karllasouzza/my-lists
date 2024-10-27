import { Image, Pressable, StatusBar, Text, View } from "react-native";

import logo from "@/assets/images/illustration/auth.png";
import { Href, router } from "expo-router";

export default function Index() {
  const handleNavigate = (path: Href) => {
    router.push(path);
  };
  return (
    <View className="flex-1 flex-col justify-between items-center bg-gray-50 p-8 py-10 pt-20 gap-20">
      <StatusBar />
      <View className="w-full">
        <Text
          className="font-Ubuntu text-2xl w-full"
          style={{ fontFamily: "Ubuntu_400Regular" }}
        >
          Bem-vindo ao
        </Text>
        <Text
          className="font-Ubuntu-Bold text-4xl w-full"
          style={{ fontFamily: "Ubuntu_700Bold" }}
        >
          Minhas Listas.
        </Text>
      </View>
      <View className="flex w-full gap-8 items-center">
        <Image source={logo} alt="" className="size-96" />
        <Text className="text-center">
          Aqui você pode criar e gerenciar suas listas de compra de forma fácil
          e rápida.
        </Text>
      </View>

      <View className="flex w-full gap-8 items-center">
        <Pressable
          className="w-full h-14 flex items-center justify-center bg-purple-300 rounded-2xl"
          onPress={() => handleNavigate("/singIn")}
        >
          <Text className="text-center font-bold text-xl">Criar conta</Text>
        </Pressable>

        <Pressable
          className="w-full h-14 flex items-center justify-center border-2 border-gray-900 rounded-2xl"
          onPress={() => handleNavigate("/singIn")}
        >
          <Text className="text-center font-bold text-xl">Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}
