import { View, Text, FlatList } from "react-native";
import type { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { tw } from "@/lib";
import { useRef, useState } from "react";
import { SlideItem } from "./SlideItem";
import { SlidesDotsPagination } from "./SlidesDotsPagination";

type Props = {
  images: string[];
  visibleDotsPagination?: boolean;
};

export function Slides({ images, visibleDotsPagination = true }: Props) {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };

  return (
    <View style={tw`bg-background`}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => <SlideItem item={item} scrollToSlide={scrollToSlide} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      {visibleDotsPagination && (
        <SlidesDotsPagination
          quantityImages={images.length}
          scrollToSlide={scrollToSlide}
          currentIndex={currentSlideIndex}
        />
      )}
    </View>
  );
}
