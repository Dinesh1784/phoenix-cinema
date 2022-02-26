import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  RiHomeFill,
  RiCommunityLine,
  RiCompassDiscoverLine,
  RiTimerFlashLine,
  RiUserHeartLine,
  RiMovie2Line,
} from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { FiSettings, FiLogOut } from "react-icons/fi";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      flex={2}
      borderRight={"1px"}
      width={"350px"}
      height={"95vh"}
      borderRightWidth={"medium"}
      borderRightColor={"grey"}
    >
      <Heading display={"flex"} alignItems={"center"}>
        <RiMovie2Line size={30} color="#E10712" />
        <Text fontSize={{ base: "lg", md: "2xl" }} pl={2}>
          Phoenix Cinema <span style={{ color: "#E10712" }}>.</span>
        </Text>
      </Heading>
      <Box mt={10}>
        <Text fontSize={15} color={"lightgray"} fontWeight={"bold"}>
          MENU
        </Text>
        <Box ml={10}>
          <SideBarItem Icon={RiHomeFill} active={true} name="Home" />
          <SideBarItem Icon={RiCommunityLine} name="Community" />
          <SideBarItem Icon={RiCompassDiscoverLine} name="Discover" />
          <SideBarItem Icon={RiTimerFlashLine} name="Comming Soon" />
        </Box>
      </Box>
      <Box mt={10}>
        <Text fontSize={15} color={"lightgray"} fontWeight={"bold"}>
          SOCIAL
        </Text>
        <Box ml={10}>
          <SideBarItem Icon={BiUser} name="Friends" />
          <SideBarItem Icon={RiUserHeartLine} name="Parties" />
          <SideBarItem Icon={CgMediaLive} name="Media" />
        </Box>
      </Box>
      <Box mt={10}>
        <Text fontSize={15} color={"lightgray"} fontWeight={"bold"}>
          GENERAL
        </Text>
        <Box ml={10}>
          <SideBarItem Icon={FiSettings} name="Settings" />
          <SideBarItem Icon={FiLogOut} name="Logout" />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
