import { Container, Box, Input, Divider, HStack, Select, Button, Center, Text, VStack, Img, Grid, Slider, SliderThumb, SliderTrack, SliderFilledTrack, Tag, } from "@chakra-ui/react"
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { FooterMain } from "./FooterMain"
import { Navbar } from "./Navbar"

export function ProfilePage() {
    let navigate = useNavigate();
    let userData = JSON.parse(localStorage.getItem("CurrentUser")) || [];
    // console.log(userData);
    const { isAuth } = useContext(AuthContext)
    // console.log(isAuth, "isAuth")
    if (!isAuth) {
        <Navigate to="/register" />
    }
    let searchValues = {
        experience: 3,
        location: "mumbai",
        q: "sales"
    }

    const searchjobs = () => {
        localStorage.setItem("inputValuesSearchParams", JSON.stringify(searchValues));
        navigate("/searchPage");
    }

    return (
        <Container bg={"#f8f9ff"} maxW={"100%"} >
            <Navbar />
            <br />
            <div position={"relative"} style={{ width: "100%" }}><Img filter={"blur(3.5px)"} width={"100%"} height={"300px"} src="https://cdn.pixabay.com/photo/2016/09/04/20/14/sunset-1645103__340.jpg" alt="title" />
                <br />
                <Box position={"absolute"} top={"180"} >
                    <Grid padding={"6"} width={"70%"} gridTemplateColumns={"60% 40%"} gap={"20px"} margin={"auto"}>
                        <VStack justifyContent={"flex-start"} alignItems={"flex-start"}>
                            {/* <Center> */}
                            <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                                // border={"1px solid red"}
                                maxW={"100%"}
                                width={"fit-content"} bg="#ffffff"
                                borderRadius={"0px"}
                                paddingLeft={"2"}
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
                                    <Button borderRadius={"0"} onClick={searchjobs} bg={"#457eff"} paddingX={"60px"} paddingY={"15px"} fontSize={"18px"} color="white">Search</Button>
                                </HStack>
                            </Box>
                            <br /><br /><br />
                            <Box bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                                <Text paddingY={""} color={"black"} fontWeight={"500"} fontSize={"15px"} >What is most important to you when looking for a new job?  </Text>
                                <HStack wrap={"wrap"} spacing={"1"} padding={"3"}>
                                    <Text margin={"5px"} fontSize={"sm"} border={"1px solid black"} borderRadius={"20px"} padding={"1"} >Work Culture</Text>
                                    <Text margin={"5px"} fontSize={"sm"} border={"1px solid black"} borderRadius={"20px"} padding={"1"} >Competetive Salary</Text>
                                    <Text margin={"5px"} fontSize={"sm"} border={"1px solid black"} borderRadius={"20px"} padding={"1"} >Work Life Balance</Text>
                                    <Text margin={"5px"} fontSize={"sm"} border={"1px solid black"} borderRadius={"20px"} padding={"1"} >Company's reputation</Text>
                                    <Text margin={"5px"} fontSize={"sm"} border={"1px solid black"} borderRadius={"20px"} padding={"1"} >Qualtiy Of Work</Text>
                                </HStack>
                            </Box>
                            Jobs
                            <Box bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                                <Text fontWeight={"500"} fontSize={"15px"} >32 New Recommended Job(s)</Text>

                                <Divider padding={"2"} />

                                <Text paddingTop={"2"} fontWeight={"700"} fontSize={"17px"}>Android Developer - Java/SDK
                                </Text>
                                <HStack>
                                    <Text fontWeight={"500"} fontSize={"15px"}>Jaden Executice search</Text>
                                    <Img width={"15px"} src="https://i.ibb.co/wYNNStb/star.png" alt="rating" />
                                    <Text fontWeight={"500"} fontSize={"13px"} color={"blue"}>{Math.floor(Math.random() * 1000) + 1} reviews</Text>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/tPcmj57/portfolio.png" alt="exp" /> <Text fontWeight={"300"} fontSize={"13px"} > 0 - 2 yrs</Text>
                                    </HStack>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/KryKW3z/wallet.png" alt="sal" /> <Text fontWeight={"300"} fontSize={"13px"} >Not Disclosed</Text>
                                    </HStack>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/zVRsFwP/map-location.png" alt="location" /> <Text fontWeight={"300"} fontSize={"13px"} >Mumbai</Text>
                                    </HStack>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <Img width={"15px"} src="https://i.ibb.co/0sYJmJj/pen-tip.png" alt="doc" /> <Text fontWeight={"400"} fontSize={"13px"} >REST API,Web services,RDBMS,Django,Angular 11,JSON,MVC,relational databases,Flask,SQL,Web Fundamentals,Python</Text>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <Img width={"15px"} src="https://i.ibb.co/K2PwSb8/google-docs.png" alt="skills" />
                                    <Text fontWeight={"400"} fontSize={"12px"}>Bachelors degree in computer science,information technology,or a similar fieldBootstrap,Materialize CSS,Angular-Material etc) along with ...</Text>
                                </HStack>
                                <HStack margin={"1"} bg={"#eeeeee"} paddingX="0.5" width={"fit-content"}>
                                    <Img width={"10px"} src="https://i.ibb.co/3rppz9x/anti-clockwise.png" alt="days" />
                                    <Text fontWeight={"400"} fontSize={"10px"}> {Math.floor(Math.random() * 10) + 1} days ago </Text>
                                </HStack>
                                <Text ontWeight={"500"} fontSize={"15px"} float={"right"} color={"blue"} > VIEW ALL</Text>
                            </Box>
                            <Box bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                                <HStack width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text fontWeight={"500"} fontSize={"15px"} >New Jobs in My Job Alerts</Text>
                                    <HStack>
                                        <Text fontWeight={"500"} fontSize={"15px"} float={"right"} color={"blue"} >MANAGE ALERTS</Text>
                                        <Text fontWeight={"500"} fontSize={"15px"} float={"right"} color={"blue"} >CREATE ALERTS</Text>
                                    </HStack>
                                </HStack>


                                <Divider padding={"2"} />

                                <Text paddingTop={"2"} fontWeight={"700"} fontSize={"17px"}>Jaden Executice search
                                </Text>
                                <HStack>
                                    <Text fontWeight={"500"} fontSize={"15px"}>GlobalLogic</Text>
                                    <Img width={"15px"} src="https://i.ibb.co/wYNNStb/star.png" alt="rating" />
                                    <Text fontWeight={"500"} fontSize={"13px"} color={"blue"}>{Math.floor(Math.random() * 1000) + 1} reviews</Text>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/tPcmj57/portfolio.png" alt="exp" /> <Text fontWeight={"300"} fontSize={"13px"} > 3 - 8 yrs</Text>
                                    </HStack>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/KryKW3z/wallet.png" alt="sal" /> <Text fontWeight={"300"} fontSize={"13px"} >Not Disclosed</Text>
                                    </HStack>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/zVRsFwP/map-location.png" alt="location" /> <Text fontWeight={"300"} fontSize={"13px"} >Mumbai</Text>
                                    </HStack>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <Img width={"15px"} src="https://i.ibb.co/0sYJmJj/pen-tip.png" alt="doc" /> <Text fontWeight={"400"} fontSize={"13px"} >Push Notification,Java,Google Maps,Mobile UI,Design Patterns,SDK,Android</Text>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <Img width={"15px"} src="https://i.ibb.co/K2PwSb8/google-docs.png" alt="skills" />
                                    <Text fontWeight={"400"} fontSize={"12px"}>Should work with internal teams closely to understand their requirements and build Mobile App based solutions for them Bachelors or ...</Text>
                                </HStack>
                                <HStack margin={"1"} bg={"#eeeeee"} paddingX="0.5" width={"fit-content"}>
                                    <Img width={"10px"} src="https://i.ibb.co/3rppz9x/anti-clockwise.png" alt="days" />
                                    <Text fontWeight={"400"} fontSize={"10px"}> {Math.floor(Math.random() * 10) + 1} days ago </Text>
                                </HStack>

                                <Divider padding={"2"} />
                                <Text paddingTop={"2"} fontWeight={"700"} fontSize={"17px"}>Full Stack Developer - Python/Django
                                </Text>


                                <HStack>
                                    <Text fontWeight={"500"} fontSize={"15px"}>Oneture Technologies Private Limited</Text>
                                    <Img width={"15px"} src="https://i.ibb.co/wYNNStb/star.png" alt="rating" />
                                    <Text fontWeight={"500"} fontSize={"13px"} color={"blue"}>{Math.floor(Math.random() * 1000) + 1} reviews</Text>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/tPcmj57/portfolio.png" alt="exp" /> <Text fontWeight={"300"} fontSize={"13px"} > 5 - 7 yrs</Text>
                                    </HStack>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/KryKW3z/wallet.png" alt="sal" /> <Text fontWeight={"300"} fontSize={"13px"} >Not Disclosed</Text>
                                    </HStack>
                                    <HStack>
                                        <Img width={"15px"} src="https://i.ibb.co/zVRsFwP/map-location.png" alt="location" /> <Text fontWeight={"300"} fontSize={"13px"} >Mumbai</Text>
                                    </HStack>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <Img width={"15px"} src="https://i.ibb.co/0sYJmJj/pen-tip.png" alt="doc" /> <Text fontWeight={"400"} fontSize={"13px"} >Telecom,Core Java,Development Manager,Wordpress,Debugging,Javascript,HTML,HTTP,MVC,Troubleshooting</Text>
                                </HStack>
                                <HStack paddingY={"1"}>
                                    <Img width={"15px"} src="https://i.ibb.co/K2PwSb8/google-docs.png" alt="skills" />
                                    <Text fontWeight={"400"} fontSize={"12px"}>Proficiency in requirement mapping,technical documentation,design,development and troubleshooting for Mobile Application DevelopmentNeed ...</Text>
                                </HStack>
                                <HStack margin={"1"} bg={"#eeeeee"} paddingX="0.5" width={"fit-content"}>
                                    <Img width={"10px"} src="https://i.ibb.co/3rppz9x/anti-clockwise.png" alt="days" />
                                    <Text fontWeight={"400"} fontSize={"10px"}> {Math.floor(Math.random() * 10) + 1} days ago </Text>
                                </HStack>
                                <Text ontWeight={"500"} fontSize={"15px"} float={"right"} color={"blue"} > VIEW ALL</Text>
                            </Box>

                            <Box bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                                <Text fontWeight={"500"} fontSize={"15px"} >Job Application Status</Text>
                                <Divider padding={"2"} />
                                <Text paddingTop={"2"} fontWeight={"300"} fontSize={"13px"} >No Applications Till Now</Text>
                            </Box>
                            <HStack width={"100%"}>
                                <Box bg={"white"} height={"200px"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                                    <Text fontWeight={"500"} fontSize={"15px"} >Application Summary</Text>
                                    <Divider padding={"2"} />
                                    <Text paddingTop={"2"} fontWeight={"300"} fontSize={"13px"} >You have applied for 0 Jobs in last 30 days</Text>
                                    <Text fontWeight={"300"} fontSize={"13px"} >Daily Limit Of Applications :50</Text>
                                </Box>
                                <Box bg={"white"} height={"200px"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                                    <Text fontWeight={"500"} fontSize={"15px"} >Saved Jobs</Text>
                                    <Divider padding={"2"} />
                                    <Text paddingTop={"2"} fontWeight={"300"} fontSize={"13px"} >No Saved Jobs Till Now</Text>
                                </Box>
                            </HStack>

                            {/* </Center> */}
                        </VStack >

                        <VStack paddingX={"3"}>
                            <Box bg={"white"} borderRadius={"5px"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} padding={"7"} width={"100%"}>
                                <VStack position={"relative"} >
                                    <Box width={"100px"} left={"110"} top={"-75"} position={"absolute"}>
                                        <Img borderRadius={"50%"} bg={"white"} src="https://i.ibb.co/SRVMLTW/profile.png" alt="title" />
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
                </Box>
            </div>
        </Container>
    )
}