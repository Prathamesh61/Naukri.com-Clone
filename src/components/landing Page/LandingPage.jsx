import { Box, Button, Center, Container, Divider, Heading, HStack, Img, Input, Select, Text, VStack } from "@chakra-ui/react";
import { Footer } from "../Footer";
import Slider from "react-slick";


export function TrendingLanding(props) {
    const { image, title, countOfJobs } = props;
    return (
        <Box alignContent={"center"} border={"1px solid #8292b4"} width={"300px"} padding={"7"} borderTopLeftRadius={"20"} borderBottomRightRadius={"20"} borderBottomLeftRadius={"5"} borderTopRightRadius={"5"} >
            <Box border={"1px solid #8292b4"} width={"80px"} height={"80px"}><Center><Img src={image} alt={title} /></Center></Box>
            <Text fontSize={"14px"} fontWeight={"600"}>{title} </Text>
            <Text fontSize={"13px"}>{countOfJobs}</Text>
        </Box>
    )
}

export function TopCompanies(props) {
    const { title, description, imgarr } = props;
    return (
        <Box alignContent={"center"} border={"1px solid #8292b4"} width={"300px"} padding={"7"} borderTopLeftRadius={"20"} borderBottomRightRadius={"20"} borderBottomLeftRadius={"5"} borderTopRightRadius={"5"}>
            <Text fontSize={"14px"} fontWeight={"600"}>{title} </Text>
            <Text fontSize={"13px"} fontWeight={"300"}>{description} are actively Hiring</Text>
            <HStack padding={"3"} spacing={"5"}>
                {imgarr && imgarr.map((item) => <Img width={"25px"} src={item} />)}
            </HStack>
        </Box>

    )
}

export function LandingPage() {
    const trandingOnNaukri = [
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
            title: "Remote",
            countOfJobs: "5.4K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
            title: "MNC",
            countOfJobs: "59.3K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg",
            title: "Sales",
            countOfJobs: "9K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg",
            title: "HR",
            countOfJobs: "3.4K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg",
            title: "Analytics",
            countOfJobs: "9.4K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg",
            title: "Marketing",
            countOfJobs: "2.1K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
            title: "Software & IT",
            countOfJobs: "21.2K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg",
            title: "Banking & Finance",
            countOfJobs: "4K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg",
            title: "Fresher",
            countOfJobs: "52.2K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
            title: "Remote",
            countOfJobs: "5.4K+ Jobs"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg",
            title: "Data Science",
            countOfJobs: "5.4K+ Jobs"
        }
    ]
    const topCompanies = [
        {
            title: "MNCs",
            description: "1.2k+",
            images: ["https://img.naukimg.com/logo_images/groups/v1/1019640.gif", "https://img.naukimg.com/logo_images/groups/v1/62866.gif", "https://img.naukimg.com/logo_images/groups/v1/295156.gif", "https://img.naukimg.com/logo_images/groups/v1/360296.gif"],
        },
        {
            title: "Fortune 500",
            description: "79",
            images: ["https://img.naukimg.com/logo_images/groups/v1/293284.gif", "https://img.naukimg.com/logo_images/groups/v1/36136.gif", "https://img.naukimg.com/logo_images/groups/v1/255972.gif", "https://img.naukimg.com/logo_images/groups/v1/142780.gif"],
        },
        {
            title: "Unicorns",
            description: "84",
            images: ["https://img.naukimg.com/logo_images/groups/v1/2519816.gif", "https://img.naukimg.com/logo_images/groups/v1/3989906.gif", "https://img.naukimg.com/logo_images/groups/v1/682834.gif", "https://img.naukimg.com/logo_images/groups/v1/533532.gif"],
        },
        {
            title: "Startups",
            description: "191",
            images: ["https://img.naukimg.com/logo_images/groups/v1/1194340.gif", "https://img.naukimg.com/logo_images/groups/v1/1596468.gif", "https://img.naukimg.com/logo_images/groups/v1/1383834.gif", "https://img.naukimg.com/logo_images/groups/v1/4961339.gif"],
        },
        {
            title: "Internet",
            description: "125",
            images: ["https://img.naukimg.com/logo_images/groups/v1/1284194.gif", "https://img.naukimg.com/logo_images/groups/v1/1122782.gif", "https://img.naukimg.com/logo_images/groups/v1/4961339.gif", "https://img.naukimg.com/logo_images/groups/v1/558162.gif"],
        },
        {
            title: "Product",
            description: "598",
            images: ["https://img.naukimg.com/logo_images/groups/v1/244334.gif", "https://img.naukimg.com/logo_images/groups/v1/4611495.gif", "https://img.naukimg.com/logo_images/groups/v1/44664.gif", "https://img.naukimg.com/logo_images/groups/v1/360296.gif"],
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <Container bg={"#ffffff"} maxW="auto">

            {/* first container start */}
            <Container bg={"#f8f9ff"} position="relative" maxW={"100%"} centerContent>
                <Heading as={"h1"} margin="2">Find your dream job now</Heading>
                <Text margin={"2"}>5 lakh+ jobs for you to explore</Text>
                <br />
                <br />
                <br />
                <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} position={"absolute"} top="130" borderRadius={"120px"} border={"1px solid white"} width={"60%"} bg="#ffffff" paddingX={"4"} paddingY={"3"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <HStack >
                        <img padding={"1"} alt="search" width={"20"} src="https://cdn-icons-png.flaticon.com/512/54/54481.png" />
                        <Input variant={"unstyled"} placeholder="Enter skills / designations / companies" type={"text"} />
                        <Divider orientation="vertical" height={"8"} color={"black"} />
                        <Select color={"#8292b4"} placeholder='Select Experience' variant={"unstyled"}>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Divider orientation="vertical" height={"8"} color={"black"} />
                        <Input variant={"unstyled"} placeholder="Enter Loaction" type={"text"} />
                        <Button bg={"#457eff"} borderRadius="50px" paddingX={"60px"} paddingY={"25px"} fontSize={"18px"} color="white">Search</Button>
                    </HStack>
                </Box>
            </Container>
            {/* first container end */}

            <br /><br /><br /><br />

            {/* second Conainer start */}
            <Container border={"1px dashed #8292b4"} borderRadius={"10px"} maxW="50%">
                <HStack padding={"5"} spacing="40px" >
                    <HStack position={"relative"} >
                        <Img border={"1px solid #8292b4"} bg="white" padding={"1"} borderRadius={"50px"} src="https://static.naukimg.com/s/0/0/i/homepage-register/myntra-logo.png" alt="myntra" />
                        <Img position={"absolute"} left={"6"} border={"1px solid #8292b4"} bg="white" padding={"1"} borderRadius={"50px"} src="https://static.naukimg.com/s/0/0/i/homepage-register/accenture-logo.png" alt="accenture" />
                    </HStack>
                    <VStack lineHeight={"10px"} align={"start"}>
                        <Text fontSize={"16px"} fontWeight={"700"} >Get contacted by top companies hiring on Naukri!</Text>
                        <Text fontSize={"16px"} >Your chance to build that dream career is here</Text>
                    </VStack>
                    <Button bg={"#ff7555"} borderRadius="50px" paddingX={"20px"} paddingY={"15px"} fontSize={"16px"} color="white" >Register Now</Button>
                </HStack>
            </Container>
            {/* second Conainer end */}
            <br /><br /><br />
            <Container maxW={"70%"} centerContent padding={"4"}>
                <Heading as={"h4"} margin={"3"}>Trending on Naukri today</Heading>
                <HStack spacing={"5"} maxW={"90%"} overflow={"auto"}>
                    {trandingOnNaukri && trandingOnNaukri.map((item) =>
                        <TrendingLanding key={item.title} image={item.image} title={item.title} countOfJobs={item.countOfJobs} />
                    )}
                </HStack>
            </Container>
            {/* third container end */}
            {/* fourth container start */}
            <Container maxW={"70%"} centerContent padding={"4"}>
                <Heading as={"h4"} margin={"3"}>Explore top companies hiring now</Heading>
                <HStack spacing={"5"} maxW={"90%"} overflow={"auto"}>
                    {topCompanies && topCompanies.map((item) =>
                        <TopCompanies key={item.title} title={item.title} description={item.description} imgarr={item.images} />
                    )}
                </HStack>
            </Container>
            <Footer />
        </Container >

    )
}