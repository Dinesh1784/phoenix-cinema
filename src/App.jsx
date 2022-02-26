import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainComponent from "./components/MainComponent";
import RightComponent from "./components/RightComponent";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Box
      bg={"#191A1F"}
      width={"100vw"}
      minHeight={"100vh"}
      p={5}
      display={"flex"}
    >
      <SideBar />
      <MainComponent />
      <RightComponent />
    </Box>
  );
};

export default App;
