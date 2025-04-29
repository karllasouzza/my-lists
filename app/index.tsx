import React, { useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  useWindowDimensions,
  View,
  Text,
} from "react-native";

import { Slide } from "@/components/Slide";
import { SafeAreaView } from "react-native-safe-area-context";

import slideImageOne from "@/assets/images/illustration/stageOneImg.png";
import slideImageTwo from "@/assets/images/illustration/stageTwoImg.png";
import slideImageThree from "@/assets/images/illustration/stageThreeImg.png";

import Ionicons from "@expo/vector-icons/Ionicons";

const stages = [
  {
    highlightedTitle: "Learn live",
    title: "online from the best teachers",
    subtitle: "Upgrade your basic skill to be advance with expert mentors",
    image: slideImageOne,
  },
  {
    highlightedTitle: "Schedule",
    title: "your live classes with teachers",
    subtitle: "Upgrade your basic skill to be advance with expert mentors",
    image: slideImageTwo,
  },
  {
    highlightedTitle: "You can",
    title: "learn anytime and anywhere",
    subtitle: "Upgrade your basic skill to be advance with expert mentors",
    image: slideImageThree,
  },
];

export default function Index() {
  const screenDimensions = useWindowDimensions().width;
  const [stage, setStage] = useState(0);

  const scrollRef = useRef<any>();

  const onMomentumScrollEnd = (e: any) => {
    const { nativeEvent } = e;
    const index = Math.round(nativeEvent.contentOffset.x / screenDimensions);
    if (index !== stage) setStage(index);
  };

  return (
    <SafeAreaView className="flex justify-center items-center h-full  flex-col bg-gray-950 relative my-auto">
      <StatusBar backgroundColor={"#23262B"} barStyle={"light-content"} />

      <ScrollView
        className="flex-1 h-full w-full truncate"
        horizontal
        pagingEnabled
        nestedScrollEnabled
        onMomentumScrollEnd={onMomentumScrollEnd}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
      >
        {stages.map((stageData, index) => (
          <Slide
            key={index}
            stageData={stageData}
            stage={stage}
            setStage={setStage}
          />
        ))}
      </ScrollView>

      <View className="w-full h-28 flex flex-row justify-between items-center gap-12 px-6 mt-3">
        <View className="h-5 flex flex-row items-center justify-center gap-2">
          {stages.map((_, index) =>
            index <= stage ? (
              <View
                key={index}
                className="size-3 bg-primary-default rounded-full rounded-r-none last-of-type:rounded-r-full"
              />
            ) : (
              <View
                key={index}
                className="size-3 border border-gray-500 rounded-full"
              />
            )
          )}
        </View>
        <View className="flex flex-row gap-4 ml-auto">
          {stage > 0 && (
            <Pressable
              className="size-14 rounded-full  border !border-gray-500 flex justify-center items-center"
              onPress={() =>
                scrollRef.current?.scrollTo({
                  x: stage !== 1 ? screenDimensions / (stage - 1) : 0,
                  animated: true,
                })
              }
            >
              <Ionicons
                name="chevron-back-outline"
                size={24}
                className="!text-slate-50"
              />
            </Pressable>
          )}

          {stage !== 2 && (
            <Pressable
              className="size-14 rounded-full  bg-primary-default flex justify-center items-center"
              onPress={() =>
                scrollRef.current?.scrollTo({
                  x: screenDimensions * (stage + 1),
                  animated: true,
                })
              }
            >
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                className="!text-gray-800"
              />
            </Pressable>
          )}

          {stage === 2 && (
            <Pressable
              className="h-14 w-2/3 rounded-full  bg-primary-default px-4 flex justify-center items-center"
              onPress={() =>
                scrollRef.current?.scrollTo({
                  x: screenDimensions * (stage + 1),
                  animated: true,
                })
              }
            >
              <Text className="flex text-lg font-bold">Vamos lá!</Text>
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
