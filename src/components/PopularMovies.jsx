import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
};

const PopularMovies = ({ data }) => {
  const URL = "https://image.tmdb.org/t/p/w500";
  return (
    <Box p={5}>
      <Text fontWeight={"bold"}>Trending Movies</Text>
      <Slider {...settings}>
        {data &&
          data.results.map((d) => (
            <Box mt={5} cursor={"grab"}>
              <Image
                width={"150px"}
                objectFit={"contain"}
                src={URL + d.poster_path}
                borderRadius={15}
              />
              <Text
                fontSize={15}
                textAlign={"center"}
                textOverflow={"ellipsis"}
                width={"100%"}
              >
                {d.title}
              </Text>
            </Box>
          ))}
      </Slider>
    </Box>
  );
};

export default PopularMovies;
