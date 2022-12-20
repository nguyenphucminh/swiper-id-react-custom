import React, { FC, useRef } from "react";
import Swiper, { SwiperRefNode } from "react-id-swiper";
import { generateSlides } from "./utils";
import { SlideContainer } from "./styledComponents";
import { SliderProps, Slide } from "./types";
import SlideItem from "./SlideItem";
import { Button, Flex } from "@react-yuki/ui";
export const renderSlide = ({ id, ...rest }: Slide, idx: number) => (
  <SlideItem {...rest} key={`${id}-slideContent-${idx}`} width={1} />
);

const Slider: FC<SliderProps> = ({
  hasImage,
  useImageAsTag,
  params,
  id,
  ...styles
}) => {
  const data = generateSlides({ id, hasImage, useImageAsTag });
  const swiperRef = useRef<SwiperRefNode>(null);

  const goNext = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <div style={{ width: "1900px", display: "flex" }}>
        <div>I LOVE YOUR ĐICK</div>
        <div>
          <Flex mt={4} width={1} justifyContent="center" alignItems="center">
            <Button border={0} bg="blue.4" onClick={goPrev} color="white">
              Go prev
            </Button>
            <Button
              border={0}
              bg="red.4"
              m={0}
              ml={3}
              onClick={goNext}
              color="white"
            >
              Go next
            </Button>
          </Flex>
        </div>
      </div>

      <SlideContainer {...styles} id={id} flexDirection="column">
        <Swiper {...params} ref={swiperRef}>
          {data.map(renderSlide)}
        </Swiper>
      </SlideContainer>
    </>
  );
};

export default Slider;
