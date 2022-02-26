import React from "react";
import { Box, Text } from "@chakra-ui/react";
const SideBarItem = ({ Icon, name, active }) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      py={3}
      cursor={"pointer"}
      position={"relative"}
    >
      {active && (
        <Box
          position={"absolute"}
          bg={"#E10712"}
          width={"5px"}
          height={"30px"}
          right={0}
        />
      )}
      <Icon size={22} color={active && "#E10712"} />
      <Text
        fontSize={15}
        pl={2.5}
        color={"lightgray"}
        _hover={{
          color: "white",
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
    </Box>
  );
};

export default SideBarItem;
