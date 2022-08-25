import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css"
import "slick-carousel/slick/slick-theme.css";
import { Box, Center, Container, Divider, Img, Text, VStack, HStack, Button } from "@chakra-ui/react";


export function SliderComponentFeatured(props) {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  console.log(data, "SliderComponentFeatured")
  return (
    <div style={{ width: "75%", padding: "40px", margin: "auto" }} >
      <Slider {...settings}>
        {data && data.map((item) => {
          return <Container centerContent padding={"5"} overflow={"hidden"} maxW={"fit-content"} key={item.title}>
            <Box _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} justifyContent={"center"} alignContent={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} width={"220px"} height={"300px"} padding={"7"} borderTopLeftRadius={"20"} borderBottomRightRadius={"20"} borderBottomLeftRadius={"5"} borderTopRightRadius={"5"}>
              <Center><Box width={"60px"} marginY={"1"} height={"fit-content"} justifyContent={"center"} alignItems={"center"}><Img src={item.image} alt="logo" /></Box></Center>
              <VStack bg={"#fdfaf7"} borderRadius={"20"} marginY={"2"} padding={"3"}>
                <Text fontWeight={"600"} >{item.title}</Text>
                <HStack ><Img width={"13px"} src="https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg" />
                  <Text fontSize={"12px"} fontWeight={"500"}>{item.rating}</Text>
                  <Divider orientation="vertical" height={"6"} color={"#92a0bd"} />
                  <Text fontSize={"12px"} fontWeight={"400"} color={"#92a0bd"} >{item.reviews} Reviews</Text>
                </HStack>
              </VStack>
              <Text fontSize={"14px"} marginY={"2"} align={"center"} fontWeight={"400"}>{item.description}</Text>
              <Center><Button borderRadius={"20"} paddingX={"6"} paddingY={"4"} bg={"#f1f5ff"} color={"blue"}>View jobs</Button></Center>
            </Box>
          </Container>

        })}
      </Slider >
    </ div >
  );
}


export function SliderTopCompanies(props) {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  console.log(data, "sliderTOpCompanies")
  return (
    <div style={{ width: "80%", padding: "40px", margin: "auto" }} >
      <Slider {...settings}>
        {data && data.map((item) => {
          return <Container centerContent padding={"5"} overflow={"hidden"} maxW={"fit-content"} key={item.title}>
            <Box _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} alignContent={"center"} justifyContent={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} width={"250px"} padding={"7"} borderTopLeftRadius={"20"} borderBottomRightRadius={"20"} borderBottomLeftRadius={"5"} borderTopRightRadius={"5"}>
              <Text fontSize={"14px"} fontWeight={"600"}>{item.title} </Text>
              <Text fontSize={"13px"} fontWeight={"300"}>{item.description} are actively Hiring</Text>
              <HStack padding={"1"} >
                {console.log(item.imgarr)}
                {item.images && item.images.map((ele) => <Img key={ele} border={"0.5px solid gray"} borderRadius={"5px"} width={"40px"} src={ele} />)}
              </HStack>
            </Box>
          </Container>

        })}
      </Slider >
    </ div >
  );
}

export function SliderTrendingLanding(props) {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  console.log(data, "SliderTrendingLanding")
  return (
    <div style={{ width: "75%", padding: "40px", margin: "auto" }} >
      <Slider {...settings}>
        {data && data.map((item) => {
          return <Container centerContent padding={"5"} overflow={"hidden"} maxW={"fit-content"} key={item.title}>
            <Box _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} justifyContent={"center"} alignContent={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} width={"170px"} height={"150px"} padding={"5"} borderTopLeftRadius={"20"} borderBottomRightRadius={"20"} borderBottomLeftRadius={"5"} borderTopRightRadius={"5"} >
              <Box width={"50px"} height={"50px"}><Center><Img src={item.image} alt={data.title} /></Center></Box>
              <Text fontSize={"15px"} fontWeight={"600"}>{item.title} &nbsp;
                &#10095; </Text>
              <Text fontSize={"14px"}>{item.countOfJobs}</Text>
            </Box>
          </Container>

        })}
      </Slider >
    </ div >
  );
}