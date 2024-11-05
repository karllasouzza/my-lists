import React, { useRef, useState } from "react";
import { ScrollView, StatusBar, useWindowDimensions, View } from "react-native";

import { Slide } from "@/components/Slide";
import { SafeAreaView } from "react-native-safe-area-context";

import slideImageOne from "@/assets/images/illustration/stageOneImg.png";
import slideImageTwo from "@/assets/images/illustration/stageTwoImg.png";
import slideImageThree from "@/assets/images/illustration/stageThreeImg.png";

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
    <SafeAreaView className="flex justify-center items-center h-full py-10 flex-col bg-gray-950 relative my-auto">
      <StatusBar />
      <View className="w-full h-5 flex flex-row items-center justify-center gap-2">
        {stages.map((_, index) =>
          index >= stage ? (
            <View
              key={index}
              className="size-3 w-7 bg-primary-default rounded-full rounded-r-none last-of-type:rounded-r-full"
            />
          ) : (
            <View key={index} className="size-2 bg-gray-500 rounded-full" />
          )
        )}
      </View>

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
    </SafeAreaView>
  );
}
