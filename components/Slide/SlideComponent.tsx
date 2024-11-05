import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

interface StageData {
  highlightedTitle: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}

const SlideComponent = ({
  stageData,
}: {
  setStage: (index: number) => void;
  stage: number;
  stageData: StageData;
}) => {
  return (
    <View className="flex flex-col w-screen">
      <View className="flex w-full px-6 gap-2 mt-10">
        <Text
          className="font-Ubuntu-Bold text-4xl max-w-xs w-full dark:text-gray-50"
          style={{ fontFamily: "Ubuntu_700Bold" }}
        >
          <Text className="text-primary-default">
            {stageData.highlightedTitle}
          </Text>{" "}
          {stageData.title}
        </Text>
        <Text
          className="font-Ubuntu text-lg max-w-xs w-full dark:text-gray-50/55"
          style={{ fontFamily: "Ubuntu_400Regular" }}
        >
          {stageData.subtitle}
        </Text>
      </View>

      <View className="flex w-full mt-8 items-center">
        <Image source={stageData.image} alt="" className="flex w-screen" />
      </View>
    </View>
  );
};

export default SlideComponent;
