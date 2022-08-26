import { Box, Button, Checkbox, Container, Divider, Grid, HStack, Img, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FooterMain } from "./FooterMain";
import { Navbar } from "./Navbar";
import { SingleJObTemplate } from "./singleJobTemplate";

export function JobSearch() {
    return (
        <Container bg={"#f8f9ff"} maxW={"100%"}>
            <Navbar /><br />
            <HStack bg={"white"} paddingX={"15"} paddingY={"3"} width={"100%"} margin={"auto"} border={"1px solid red"} justifyContent={"space-between"} alignItems={"center"}>
                <HStack  >
                    <Img width={"30px"} src="https://static.naukimg.com/s/7/109/assets/images/qsb.e037c49a.png" alt="searchkeywords" />
                    <Text fontSize={"15px"} color={"blue"}>Showing jobs for '{ }'</Text>
                </HStack>
                <Button bg={"#457eff"} paddingX={"20px"} paddingY={"10px"} fontSize={"15px"}> Save as Alert</Button>
            </HStack>
            <Grid padding={"10"} width={"90%"} gridTemplateColumns={"20% 50% 30%"} gap={"20px"} border={"1px solid red"} margin={"auto"}>
                <VStack border={"1px solid red"} justifyContent={"flex-start"} alignItems={"flex-start"} spacing={"1"}>
                    <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                        border={"1px solid red"}
                        width={"100%"}
                        bg="#ffffff"
                        borderRadius={"5px"}
                        paddingX={"1"}
                        paddingY={"1"}>
                        <HStack width={"100%"}>
                            <Img width={"10px"} src="https://i.ibb.co/yWqXqyR/filter-results-button.png" alt="filter" />
                            <Text fontWeight={"500"} fontSize={"15px"}> All Filters</Text>
                        </HStack>
                    </Box>
                    <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                        border={"1px solid red"}
                        width={"100%"}
                        bg="#ffffff"
                        borderRadius={"5px"}
                        paddingX={"1"}
                        paddingY={"1"}>
                        <VStack padding={"2"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <Text fontWeight={"500"} fontSize={"15px"}> Roles</Text>
                            <Divider />
                            <Checkbox fontSize={"15px"}>Software Developer</Checkbox>
                            <Checkbox fontSize={"15px"}>Graphis</Checkbox>
                            <Checkbox fontSize={"15px"}>Sales</Checkbox>
                            <Checkbox fontSize={"15px"}>Project Manager</Checkbox>
                        </VStack>
                    </Box>
                    <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                        border={"1px solid red"}
                        width={"100%"}
                        bg="#ffffff"
                        borderRadius={"5px"}
                        paddingX={"1"}
                        paddingY={"1"}>
                        <VStack padding={"2"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <Text fontWeight={"500"} fontSize={"15px"}> Location</Text>
                            <Divider />
                            <Checkbox fontSize={"15px"}>Mumbai</Checkbox>
                            <Checkbox fontSize={"15px"}>Delhi</Checkbox>
                            <Checkbox fontSize={"15px"}>Hyderabad</Checkbox>
                            <Checkbox fontSize={"15px"}>Chennai</Checkbox>
                            <Checkbox fontSize={"15px"}>Bengaluru</Checkbox>
                        </VStack>
                    </Box>


                </VStack>
                <VStack>
                    <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                        border={"1px solid red"}
                        maxW={"100%"}
                        width={"fit-content"} bg="#ffffff"
                        borderRadius={"10px"}
                        paddingX={"1"}
                        paddingY={"1"} >
                        <VStack>

                            <SingleJObTemplate />
                            <SingleJObTemplate />
                            <SingleJObTemplate />
                            <SingleJObTemplate />
                            <SingleJObTemplate />
                            <SingleJObTemplate />
                            <SingleJObTemplate />
                            <SingleJObTemplate />
                            <SingleJObTemplate />

                        </VStack>
                    </Box>
                </VStack>
                <VStack>
                    <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                        border={"1px solid red"}
                        maxW={"100%"}
                        width={"fit-content"} bg="#ffffff"
                        borderRadius={"5px"}
                        paddingX={"1"}
                        paddingY={"1"}>
                        <VStack padding={"5"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <Text fontWeight={"500"} fontSize={"15px"} >See 57 jobs in Featured Companies</Text>
                            <SimpleGrid columns={"2"} padding={"2"}>
                                {["https://img.naukimg.com/fc_images/v2/5953034.gif",
                                    "https://img.naukimg.com/fc_images/v2/3426010.gif",
                                    "https://img.naukimg.com/fc_images/v2/4113192.gif",
                                    "https://img.naukimg.com/fc_images/v2/5680540.gif",
                                    "https://img.naukimg.com/fc_images/v2/4764518.gif",
                                    "https://img.naukimg.com/fc_images/v2/5271592.gif",
                                    "https://img.naukimg.com/fc_images/v2/2195080.gif",
                                    "https://img.naukimg.com/fc_images/v2/838417.gif",
                                    "https://img.naukimg.com/fc_images/v2/3211.gif",
                                    "https://img.naukimg.com/fc_images/v2/68320.gif"].map(item => {
                                        return <Img padding={"1"} width={"110px"} src={item} alt="title" />
                                    })}
                            </SimpleGrid>
                        </VStack>
                    </Box>
                    <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                        border={"1px solid red"}
                        maxW={"100%"}
                        width={"80%"} bg="#ffffff"
                        borderRadius={"5px"}
                        paddingX={"1"}
                        paddingY={"1"}>
                        <VStack padding={"5"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <Img alignSelf={"flex-start"} width={"130px"} src="https://static.naukimg.com/s/4/123/i/ffLogo.png" alt="" />
                            <Text paddingY={2} fontWeight={"700"} fontSize={"17px"}>Get 3X more profile views from android developer recruiters</Text>
                            <Text paddingY={2} fontWeight={"300"} fontSize={"12px"}>Increase your chances of callback with Naukri FastForward</Text>
                            <Button width={"100%"} variant={"outline"} colorScheme={"blue"} paddingY={"15px"} fontSize={"15px"}  >Know More</Button>
                        </VStack>
                    </Box>
                </VStack>
            </Grid>
            <FooterMain />

        </Container >
    )
}