import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const RightComponent = () => {
  return (
    <Box flex={2} paddingX={5} display={{ base: "none", md: "block" }}>
      <Box>
        <SearchBar />
      </Box>
      <Box>
        <Text fontWeight={"bold"} mt={10}>
          Popular Movies
        </Text>
        <Box mt={5}>
          <HStack my={3}>
            <Image
              width={"80px"}
              borderRadius={15}
              src={
                "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
              }
              alt={"name"}
            />
            <VStack alignItems={"center"}>
              <Box>
                <Text fontWeight={"bold"}>Spiderman</Text>
              </Box>
              <HStack>
                <Badge colorScheme={"yellow"}>IMDB</Badge>
                <Text
                  fontWeight={"bold"}
                  display={"flex"}
                  alignItems={"center"}
                  pl={2}
                >
                  <FaThumbsUp />
                  <Text pl={2}> 7.3</Text>
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack my={3}>
            <Image
              width={"80px"}
              borderRadius={15}
              src={
                "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
              }
              alt={"name"}
            />
            <VStack alignItems={"center"}>
              <Box>
                <Text fontWeight={"bold"}>Spiderman</Text>
              </Box>
              <HStack>
                <Badge colorScheme={"yellow"}>IMDB</Badge>
                <Text
                  fontWeight={"bold"}
                  display={"flex"}
                  alignItems={"center"}
                  pl={2}
                >
                  <FaThumbsUp />
                  <Text pl={2}> 7.3</Text>
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack my={3}>
            <Image
              width={"80px"}
              borderRadius={15}
              src={
                "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
              }
              alt={"name"}
            />
            <VStack alignItems={"center"}>
              <Box>
                <Text fontWeight={"bold"}>Spiderman</Text>
              </Box>
              <HStack>
                <Badge colorScheme={"yellow"}>IMDB</Badge>
                <Text
                  fontWeight={"bold"}
                  display={"flex"}
                  alignItems={"center"}
                  pl={2}
                >
                  <FaThumbsUp />
                  <Text pl={2}> 7.3</Text>
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack my={3}>
            <Image
              width={"80px"}
              borderRadius={15}
              src={
                "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
              }
              alt={"name"}
            />
            <VStack alignItems={"center"}>
              <Box>
                <Text fontWeight={"bold"}>Spiderman</Text>
              </Box>
              <HStack>
                <Badge colorScheme={"yellow"}>IMDB</Badge>
                <Text
                  fontWeight={"bold"}
                  display={"flex"}
                  alignItems={"center"}
                  pl={2}
                >
                  <FaThumbsUp />
                  <Text pl={2}> 7.3</Text>
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack my={3}>
            <Image
              width={"80px"}
              borderRadius={15}
              src={
                "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
              }
              alt={"name"}
            />
            <VStack alignItems={"center"}>
              <Box>
                <Text fontWeight={"bold"}>Spiderman</Text>
              </Box>
              <HStack>
                <Badge colorScheme={"yellow"}>IMDB</Badge>
                <Text
                  fontWeight={"bold"}
                  display={"flex"}
                  alignItems={"center"}
                  pl={2}
                >
                  <FaThumbsUp />
                  <Text pl={2}> 7.3</Text>
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Button bgColor={"#E10712"} variant={"solid"} width={"100%"} my={4}>
            See More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RightComponent;

function SearchBar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      border={"1px"}
      p={2}
      borderWidth={"medium"}
      borderRadius={50}
      borderColor={"lightgray"}
    >
      <FiSearch size={25} color="##DCDCDC" />
      <input
        type="search"
        placeholder="Search"
        style={{
          background: "transparent",
          outline: "none",
          border: "none",
          paddingLeft: "10px",
          width: "100%",
        }}
      />
    </Box>
  );
}
