import { Container, Box, Input, Divider, HStack, Select, Button, Center, Text, VStack, Img, Grid, Slider, SliderThumb, SliderTrack, SliderFilledTrack, } from "@chakra-ui/react"
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { FooterMain } from "./FooterMain"
import { Navbar } from "./Navbar"

export function ProfilePage() {
    let userData = JSON.parse(localStorage.getItem("CurrentUser")) || [];
    // console.log(userData);
    const { isAuth } = useContext(AuthContext)
    console.log(isAuth, "isAuth")
    if (!isAuth) {
        <Navigate to="/register" />
    }
    return (
        <Container bg={"#f8f9ff"} maxW={"100%"}>
            <Navbar />
            <br />
            <br />
            <Grid padding={"6"} width={"70%"} gridTemplateColumns={"60% 40%"} gap={"20px"} border={"1px solid red"} margin={"auto"}>
                <VStack border={"1px solid red"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                    {/* <Center> */}
                    <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                        border={"1px solid red"}
                        maxW={"100%"}
                        width={"fit-content"} bg="#ffffff"
                        borderRadius={"0px"}

                        // marginEnd={"300px"}
                        justifyContent={"space-between"}
                        alignItems={"center"}>
                        <HStack >
                            <Img padding={"1"} alt="search" width={"20px"} src="https://cdn-icons-png.flaticon.com/512/54/54481.png" />
                            <Input variant={"unstyled"} placeholder="Enter skills / designations / companies" type={"text"} />
                            <Divider orientation="vertical" height={"8"} color={"black"} />
                            <Select color={"#8292b4"} placeholder='Select Experience' variant={"unstyled"}>
                                <option value='1'>Option 1</option>
                                <option value='2'>Option 2</option>
                                <option value='3'>Option 3</option>
                            </Select>
                            <Divider orientation="vertical" height={"8"} color={"black"} />
                            <Input variant={"unstyled"} placeholder="Enter Loaction" type={"text"} />
                            <Button borderRadius={"0"} bg={"#457eff"} paddingX={"60px"} paddingY={"15px"} fontSize={"18px"} color="white">Search</Button>
                        </HStack>
                    </Box>
                    {/* </Center> */}
                </VStack >

                <VStack border={"1px solid red"} padding={"3"}>
                    <Box bg={"white"} borderRadius={"5px"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} padding={"7"} width={"100%"}>
                        <VStack position={"relative"} >
                            <Box width={"80px"} left={"120"} top={"-65"} position={"absolute"}>
                                <Img borderRadius={"50%"} bg={"white"} src="https://i.ibb.co/8BHQ2gQ/user.png" alt="title" />
                            </Box>
                            <br />
                            <Text paddingY={""} color={"black"} fontWeight={"700"} fontSize={"18px"}>{userData.name}</Text>
                            <Text paddingY={""} color={"black"} fontWeight={"500"} fontSize={"15px"}>{userData.work_status}</Text>
                            <HStack paddingY={"2"} width={"100%"} justifyContent={"space-between"} alignContent={"center"}>
                                <p style={{ fontSize: "14px", color: "blue" }}>Profile Status</p>
                                <p style={{ fontSize: "14px", color: "blue" }}>10%</p>
                            </HStack>

                            <Slider paddingY={"2"} aria-label='slider-ex-1' defaultValue={10} >
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                            </Slider>

                            <HStack paddingY={"2"} width={"100%"} justifyContent={"space-between"} alignContent={"center"}>
                                <p style={{ fontSize: "14px", }}>Some Details Missing</p>
                                <p style={{ fontSize: "15px", color: "blue" }}>ADD DETAILS</p>
                            </HStack>
                            <Button width={"100%"} bg={"#457eff"} paddingY={"15px"} fontSize={"15px"} color="white">UPDATE PROFILE
                            </Button>

                            <p style={{ fontSize: "15px", alignSelf: "flex-start" }}>Profile Performance</p>
                            <HStack paddingY={"2"} width={"100%"} justifyContent={"flex-start"} alignContent={"center"}>
                                <Box padding={2} fontSize="13px" boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}>9 Search appearences</Box>
                                <Box padding={2} fontSize="13px" boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} Color="blue">13 Recruiter Actions</Box>
                            </HStack>
                            <Box bg={"#f5f5f5"} padding={3}>
                                <p style={{ fontSize: "14px", color: "blue" }}>3X Boost to Your Profile Performance. Explore. </p>
                                <p style={{ fontSize: "13px", }}>Paid Service</p>
                            </Box>
                        </VStack>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                        <HStack>
                            <VStack justifyContent={"flex-start"} alignItems={"flex-start"}>
                                <Text fontWeight={"700"} fontSize={"17px"}>Get real-time job updates & instant notifications only on the app!</Text>
                                <HStack><p>Availiable on</p> <Img width={"15px"} src="https://static.naukimg.com/s/5/105/i/play-store.png" alt="" /> <Img width={"15px"} src="https://static.naukimg.com/s/5/105/i/app-store.png" alt="" /></HStack>
                            </VStack>
                            <VStack>
                                <Img width={"300px"} padding={"2"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} src="https://static.naukimg.com/s/5/105/i/qrcode.png" alt="" />
                                <p style={{ fontSize: "13px" }}>Scan to Download</p>
                            </VStack>
                        </HStack>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                        <VStack >
                            <Img alignSelf={"flex-start"} width={"130px"} src="https://static.naukimg.com/s/4/123/i/ffLogo.png" alt="" />
                            <Text paddingY={2} fontWeight={"700"} fontSize={"17px"}>Naukri Services you might be interested in</Text>
                            <VStack >
                                <Text alignSelf={"start"} fontWeight={"700"} fontSize={"17px"}>Be a Priority Applicant</Text>
                                <p style={{ fontSize: "15px" }}>Increase your chances of getting shortlisted for the applied jobs and receiving calls from recruiters.</p>
                                <p style={{ fontSize: "15px", color: 'blue', alignSelf: "end" }}>KNOW MORE</p>
                            </VStack>
                            <VStack >
                                <Text alignSelf={"start"} fontWeight={"700"} fontSize={"17px"}>Increase your visibility by up to 3 times</Text>
                                <p style={{ fontSize: "15px" }}>Get your profile marked as 'Featured' and get a higher rank when recruiters search for resumes.</p>
                                <p style={{ fontSize: "15px", color: 'blue', alignSelf: "end" }}>KNOW MORE</p>
                            </VStack>
                        </VStack>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                        <Text alignSelf={"start"} fontWeight={"700"} fontSize={"17px"}>FAQ</Text>

                        <HStack>
                            <p style={{ fontSize: "15px", color: 'blue', alignSelf: "end" }}>Click Here </p>
                            <p style={{ fontSize: "15px", alignSelf: "end" }}>for frequently asked questions</p>

                        </HStack>
                    </Box>
                </VStack>
            </Grid>
            <FooterMain />

        </Container>
    )
}