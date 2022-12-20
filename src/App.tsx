import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme, globalStyles } from "./stylesConfig";
import { Global } from "@emotion/core";
import { Box, Heading } from "@react-yuki/ui";
import Slider from "./Slider";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyles} />
      <Box p={4}>
        <Box>
          <Heading
            as="h1"
            color="orange.4"
            fontSize={13}
            m={0}
            my={4}
            fontWeight={1}
            textAlign="center"
          >
            Mutiple Slides Per View - Example
          </Heading>
        </Box>
        <Box>
          <Slider
            params={{
              slidesPerGroup: 4,
              loopFillGroupWithBlank: false,
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
              loop: true,
              autoplay: {
                delay: 2000,
                disableOnInteraction: false
              }
            }}
          />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

export default App;
