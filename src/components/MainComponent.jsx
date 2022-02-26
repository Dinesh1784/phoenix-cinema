import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useQuery } from "react-query";
import Slider from "react-slick";
import PopularMovies from "./PopularMovies";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const movieFetcher = async () => {
  const list = await fetch(
    "http://api.themoviedb.org/3/movie/now_playing?api_key=1fb720b97cc13e580c2c35e1138f90f8"
  );
  return list.json();
};

const MainComponent = () => {
  const URL = "https://image.tmdb.org/t/p/w500";
  const { data, error, isLoading } = useQuery("movie", movieFetcher);
  console.log(data?.results);

  return (
    <Box
      flex={7}
      paddingX={5}
      borderRight={"1px"}
      width={"350px"}
      height={"95vh"}
      borderRightWidth={"medium"}
      borderRightColor={"grey"}
    >
      <Box display="flex" alignItems="center">
        <HeaderComponent name="Tv Shows" />
        <HeaderComponent name="Movie" />
        <HeaderComponent name="Animies" />
      </Box>
      <Box p={5} mt={5}>
        {isLoading && (
          <Flex
            height={"70vh"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner size={"xl"} />
          </Flex>
        )}
        <Slider {...settings}>
          {data &&
            data.results.slice(0, 5).map((d) => (
              <Box width={"100%"} key={d.id} p={5} position={"relative"}>
                <Image
                  src={URL + d.backdrop_path}
                  width={"100%"}
                  height={"380px"}
                  objectFit={"fill"}
                  borderRadius={20}
                />
                <Button
                  bgColor={"#E10712"}
                  variant={"solid"}
                  position={"absolute"}
                  bottom={10}
                  left={20}
                >
                  Watch
                </Button>
                <IconButton
                  icon={<FaPlus />}
                  position={"absolute"}
                  bottom={10}
                  left={180}
                />
                <Text
                  fontSize={30}
                  fontWeight={"bold"}
                  position={"absolute"}
                  top={250}
                  left={20}
                >
                  {d.title.toUpperCase()}
                </Text>
                <Text
                  fontWeight={"bold"}
                  position={"absolute"}
                  top={300}
                  left={20}
                  display={"flex"}
                  alignItems={"center"}
                >
                  {d.vote_average >= 6 ? (
                    <FaThumbsUp color={"red"} />
                  ) : (
                    <FaThumbsDown color={"red"} />
                  )}
                  <span
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    {d.vote_average}
                  </span>
                </Text>
              </Box>
            ))}
        </Slider>
      </Box>
      <Box width={"100%"}>
        <PopularMovies data={data} />
      </Box>
    </Box>
  );
};

export default MainComponent;

function HeaderComponent({ name }) {
  return (
    <Text
      fontSize={15}
      cursor="pointer"
      px={2.5}
      fontWeight={"bold"}
      color={"lightgray"}
      _hover={{
        color: "white",
        fontWeight: "bold",
      }}
    >
      {name}
    </Text>
  );
}
