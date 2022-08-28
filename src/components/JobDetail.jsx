import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Box, Button, Container, Divider, Grid, GridItem, HStack, Img, List, ListIcon, ListItem, Tag, Text, UnorderedList, VStack, useToast
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { FooterMain } from "./FooterMain";

import { Navbar } from "./Navbar";


const getData = async (id) => {
    let response = await fetch(`https://arcane-oasis-06780.herokuapp.com/data/${id}`);
    let data = await response.json();
    return data;
};

export function JobDetail() {
    const { isAuth } = useContext(AuthContext);
    const toast = useToast()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [data, setData] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() => {
        getData(params.id).then((res) => {
            setData(res);
        });
    }, [params.id]);
    console.log(data);

    let user = JSON.parse(localStorage.getItem("CurrentUser"))
    const ApplyJob = () => {
        if (!isAuth) {
            toast({
                title: "You're not logged in....",
                description: "Please Login First.",
                status: 'error',
                duration: 3000,
                position: 'top',
                isClosable: true,
            })
        } else {
            setIsModalVisible(true);
        }
    }
    const onClose = () => {
        setIsModalVisible(false);
    };
    return (
        <Container bg={"#f8f9ff"} maxW={"100%"}>
            <Navbar />
            <br />
            <div position={"relative"} style={{ width: "100%", backgroundColor: "#d4e5ff", height: "100px" }}>
                <br />
                <Box position={"absolute"} top={"110"} width={"100%"}>
                    <Grid padding={"6"} width={"80%"} gap={"4"} gridTemplateColumns={"60% 40%"} margin={"auto"} >
                        <VStack spacing={"1"} marginEnd={"5"} >
                            <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                                width={"100%"}
                                maxH={"auto"}
                                bg="#ffffff"
                                marginBottom={"5"}
                                borderRadius={"5px"}
                                paddingX={"1"}
                                paddingY={"1"}>
                                <VStack justifyContent={"space-between"} alignItems={"center"} padding={"5"}>
                                    <HStack width={"100%"} justifyContent={"space-between"}  >
                                        <Box justifyContent={"flex-start"} alignItems={"flex-start"}>
                                            <Text fontWeight={"500"} fontSize={"18px"}>{data.JobTitle}</Text>
                                            <HStack maxW={"100%"}>
                                                <Text fontWeight={"500"} fontSize={"15px"}>{data.Industry}</Text>
                                                <Img width={"15px"} src="https://i.ibb.co/wYNNStb/star.png" alt="rating" />
                                                <Text fontWeight={"500"} fontSize={"13px"} color={"blue"}>{Math.floor(Math.random() * 1000) + 1} reviews</Text>
                                            </HStack>
                                            <VStack justifyContent={"flex-start"} alignItems={"flex-start"} >
                                                <HStack>
                                                    <Img width={"15px"} src="https://i.ibb.co/tPcmj57/portfolio.png" alt="exp" /> <Text fontWeight={"500"} fontSize={"13px"} > {data.JobExperienceRequired} </Text>
                                                </HStack>
                                                <HStack>
                                                    <Img width={"15px"} src="https://i.ibb.co/KryKW3z/wallet.png" alt="sal" /> <Text fontWeight={"500"} fontSize={"13px"} > {data.JobSalary} </Text>
                                                </HStack>
                                                <HStack>
                                                    <Img width={"15px"} src="https://i.ibb.co/zVRsFwP/map-location.png" alt="location" /> <Text fontWeight={"500"} fontSize={"13px"} > {data.Location}  </Text>
                                                </HStack>
                                            </VStack>
                                        </Box>
                                        <Box justifyContent={"flex-end"} alignItems={"flex-end"} >
                                            <VStack >
                                                <Img alignSelf={"flex-end"} border={"1px solid gray"} padding={"2"} width={"60px"} src="https://i.ibb.co/dc6hjJN/office-building.png" />
                                                <HStack>
                                                    <Button borderRadius={"2px"} boxSizing="border-box" paddingX={"8"} paddingY="0" color={"#4a90e2"} border={"1px solid #4a90e2"} onClick={ApplyJob} >Apply</Button>
                                                    <Button borderRadius={"2px"} boxSizing="border-box" paddingX={"8"} paddingY="5" color={"white"} bg="#4a90e2" variant={"solid"} >Save</Button>
                                                </HStack>
                                            </VStack>
                                        </Box>
                                    </HStack>
                                    <Divider paddingY={"1"} />
                                    <HStack justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                                        <HStack alignSelf={"start"}>
                                            <HStack>
                                                <Text fontSize={"13"} >Posted :</Text><Text fontWeight={"500"} fontSize={"13px"} >{Math.floor(Math.random() * 5) + 1} days ago</Text>
                                            </HStack>
                                            <Divider orientation="vertical" />
                                            <HStack>
                                                <Text fontSize={"13"} >openings :</Text><Text fontWeight={"500"} fontSize={"13px"} >{Math.floor(Math.random() * 5) + 1}</Text>
                                            </HStack>
                                            <Divider orientation="vertical" />
                                            <HStack>
                                                <Text fontSize={"13"} >Job Applicants :</Text> <Text fontWeight={"500"} fontSize={"13px"} >{Math.floor(Math.random() * 200) + 1}</Text>
                                            </HStack>
                                        </HStack>
                                        <Box alignSelf={"end"}>
                                            <Text fontSize={"15"} fontWeight={"700"} color={"#4a90e2"} >Send me job like these</Text>
                                        </Box>
                                    </HStack>
                                </VStack>
                            </Box>
                            <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                                width={"100%"}
                                maxH={"auto"}
                                bg="#ffffff"
                                borderRadius={"5px"}
                                paddingX={"1"}
                                paddingY={"1"}>
                                <VStack padding={"5"}>
                                    <Box bg={"#f1f7ff"} borderRadius={"10px"} padding={"3"} width={"100%"}>
                                        <Text fontSize={"15"} fontWeight={"500"} > Job Highlights</Text>
                                        <UnorderedList fontSize={"13"} fontWeight={"500"}>
                                            <ListItem>Take part in requirement gathering and need analysis</ListItem>
                                            <ListItem>Candidates with course done on Android development will be preferred</ListItem>
                                            <ListItem>Practical coding experience in android</ListItem>
                                        </UnorderedList>
                                        <Divider paddingY={"2"} />
                                        <Text paddingTop={"2"} fontSize={"15"} fontWeight={"500"} >Your Job Match Scores</Text>
                                        <HStack width={"100%"} padding={"2"}>
                                            <Tag size={"md"} variant='solid' colorScheme='teal'>Early Applicant</Tag>
                                            <Tag size={"md"} variant='solid' colorScheme='teal'>key Skills</Tag>
                                            <Tag size={"md"} variant='solid' colorScheme='teal'>Location</Tag>
                                            <Tag size={"md"} variant='solid' colorScheme='teal'>Work Experience</Tag>
                                        </HStack>
                                    </Box>
                                    <Box padding={"3"} width={"100%"}>
                                        <Text fontSize={"15"} fontWeight={"700"} > Job Details</Text>
                                        <Text fontSize={"14"} decoration={"underline"} fontWeight={"500"} > Job Description :</Text>
                                        <UnorderedList fontSize={"13"} fontWeight={"500"}>
                                            <ListItem>Design and develop mobile application and application components</ListItem>
                                            <ListItem>Develop server-side logic and web services</ListItem>
                                            <ListItem>Write business logic for data integration between various systems</ListItem>
                                            <ListItem>Create data models and database designs for new products</ListItem>
                                            <ListItem>Unit Testing</ListItem>
                                            <ListItem>Conduct peer code reviews across the team</ListItem>
                                            <ListItem>Self Learn and adapt to new technologies in the market</ListItem>
                                            <ListItem>Actively take part in discussions and take responsibility for projects</ListItem>
                                            <ListItem>Monitor team members and help them for technical difficulties</ListItem>
                                            <ListItem>Deploy and release code onto the test server and production server</ListItem>
                                            <ListItem>Maintain daily work progress of the team</ListItem>
                                            <ListItem>Take part in requirement gathering and need analysis</ListItem>
                                        </UnorderedList>
                                        <br />
                                        <Text fontSize={"14"} decoration={"underline"} fontWeight={"500"} > Person Specification :</Text>
                                        <UnorderedList fontSize={"13"} fontWeight={"500"}>
                                            <ListItem>Working knowledge of the general mobile landscape, architectures, trends, and emerging technologies</ListItem>
                                            <ListItem>Solid understanding of the full mobile development life cycle.</ListItem>
                                            <ListItem>Knowledge of JAVA JDK strictly recommended</ListItem>
                                            <ListItem>Knowledge in RESTful APIs</ListItem>
                                            <ListItem>Practical coding experience in android</ListItem>
                                        </UnorderedList>
                                        <br /><br />
                                        <Grid gridTemplateColumns={"20% 50%"} gap={"1"} justifyContent={"flex-start"} alignItems={"flex-start"} fontSize={"13"} fontWeight={"500"}>
                                            <GridItem>
                                                <Text color={"gray"} >Role</Text >
                                                <Text color={"gray"} >Industry Type</Text >
                                                <Text color={"gray"} >Functional Area</Text >
                                                <Text color={"gray"} >Employment Type</Text >
                                                <Text color={"gray"} >Role Category</Text >
                                            </GridItem>
                                            <GridItem>
                                                <Text >{data.Role}</Text>
                                                <Text >{data.Industry}</Text>
                                                <Text >{data.FunctionalArea}</Text>
                                                <Text >Full Time</Text>
                                                <Text >{data.RoleCategory}</Text>
                                            </GridItem>
                                        </Grid>
                                        <br />
                                        <VStack align={"start"} width={"100%"}>
                                            <Text alignSelf={"start"} fontSize={"14"} fontWeight={"500"} > Education :</Text>
                                            <Grid gridTemplateColumns={"20% 100%"} gap={"14"} justifyContent={"flex-start"} alignItems={"flex-start"} fontSize={"13"} fontWeight={"500"}>
                                                <GridItem>
                                                    <Text color={"gray"} >UG:</Text >
                                                    <Text color={"gray"} >PG:</Text >
                                                </GridItem>
                                                <GridItem>
                                                    <Text >B.Sc in Computers, B.Tech/B.E. in Computers, BCA in Computers</Text>
                                                    <Text >MS/M.Sc(Science) in Computers, M.Tech in Computers</Text>
                                                </GridItem>
                                            </Grid>
                                            <Divider />
                                        </VStack>
                                    </Box>
                                </VStack>
                            </Box>
                        </VStack>
                        <VStack justifyContent={"flex-start"} alignItems={"flex-start"} spacing={"1"}>
                            <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                                width={"100%"}
                                maxH={"auto"}
                                marginBottom={"5"}
                                bg="#ffffff"
                                borderRadius={"5px"}
                                paddingX={"5"}
                                paddingY={"5"}>
                                <Text fontWeight={"700"} fontSize={"18px"} >Jobs you might be interested in</Text>
                                <HStack justifyContent={"space-between"} alignItems={"center"} padding={"5"}>
                                    <Box justifyContent={"flex-start"} alignItems={"flex-start"}>
                                        <Text fontWeight={"500"} fontSize={"16px"}> Android Developer</Text>
                                        <HStack maxW={"100%"}>
                                            <Text fontWeight={"500"} fontSize={"15px"}>IT-Software, Software Services</Text>
                                            <Img width={"15px"} src="https://i.ibb.co/wYNNStb/star.png" alt="rating" />
                                            <Text fontWeight={"500"} fontSize={"13px"} color={"blue"}>{Math.floor(Math.random() * 1000) + 1} reviews</Text>
                                        </HStack>
                                        <VStack justifyContent={"flex-start"} alignItems={"flex-start"} >
                                            <HStack>
                                                <Img width={"15px"} src="https://i.ibb.co/zVRsFwP/map-location.png" alt="location" /> <Text fontWeight={"500"} fontSize={"14px"} >Hyderabad</Text>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                    <Box justifyContent={"flex-end"} alignItems={"flex-end"} >
                                        <VStack >
                                            <Img alignSelf={"flex-end"} border={"1px solid gray"} padding={"2"} width={"60px"} src="https://i.ibb.co/dc6hjJN/office-building.png" />

                                        </VStack>
                                    </Box>
                                </HStack>
                                <Divider />
                                <HStack justifyContent={"space-between"} alignItems={"center"} padding={"5"}>
                                    <Box justifyContent={"flex-start"} alignItems={"flex-start"}>
                                        <Text fontWeight={"500"} fontSize={"16px"}> Android Developer</Text>
                                        <HStack maxW={"100%"}>
                                            <Text fontWeight={"500"} fontSize={"15px"}>Bharti Airtel</Text>
                                            <Img width={"15px"} src="https://i.ibb.co/wYNNStb/star.png" alt="rating" />
                                            <Text fontWeight={"500"} fontSize={"13px"} color={"blue"}>{Math.floor(Math.random() * 1000) + 1} reviews</Text>
                                        </HStack>
                                        <VStack justifyContent={"flex-start"} alignItems={"flex-start"} >
                                            <HStack>
                                                <Img width={"15px"} src="https://i.ibb.co/zVRsFwP/map-location.png" alt="location" /> <Text fontWeight={"500"} fontSize={"14px"} >Pune</Text>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                    <Box justifyContent={"flex-end"} alignItems={"flex-end"} >
                                        <VStack >
                                            <Img alignSelf={"flex-end"} border={"1px solid gray"} padding={"2"} width={"60px"} src="https://i.ibb.co/dc6hjJN/office-building.png" />

                                        </VStack>
                                    </Box>
                                </HStack>
                                <Divider />
                                <HStack justifyContent={"space-between"} alignItems={"center"} padding={"5"}>
                                    <Box justifyContent={"flex-start"} alignItems={"flex-start"}>
                                        <Text fontWeight={"500"} fontSize={"16px"}>Urgent Hiring - Sr. Android Developer</Text>
                                        <HStack maxW={"100%"}>
                                            <Text fontWeight={"500"} fontSize={"15px"}>FINTOO</Text>
                                            <Img width={"15px"} src="https://i.ibb.co/wYNNStb/star.png" alt="rating" />
                                            <Text fontWeight={"500"} fontSize={"13px"} color={"blue"}>{Math.floor(Math.random() * 1000) + 1} reviews</Text>
                                        </HStack>
                                        <VStack justifyContent={"flex-start"} alignItems={"flex-start"} >
                                            <HStack>
                                                <Img width={"15px"} src="https://i.ibb.co/zVRsFwP/map-location.png" alt="location" /> <Text fontWeight={"500"} fontSize={"14px"} >Mumbai</Text>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                    <Box justifyContent={"flex-end"} alignItems={"flex-end"} >
                                        <VStack >
                                            <Img alignSelf={"flex-end"} border={"1px solid gray"} padding={"2"} width={"60px"} src="https://i.ibb.co/dc6hjJN/office-building.png" />
                                        </VStack>
                                    </Box>
                                </HStack>
                                <Divider />
                                <Text paddingTop={"3"} fontSize={"15"} fontWeight={"700"} color={"#4a90e2"} >VIEW ALL</Text>
                            </Box>
                            <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                                width={"100%"}
                                maxH={"auto"}
                                bg="#ffffff"
                                marginBottom={"5"}
                                borderRadius={"5px"}
                                paddingX={"5"}
                                paddingY={"5"}>
                                <VStack justifyContent={"flex-start"} alignItems={"flex-start"} >

                                    <Img width={"100px"} src="https://static.naukimg.com/s/4/123/i/ffLogo.png" alt="logo" />
                                    <Box>
                                        <Text fontWeight={"500"} fontSize={"16px"}>Suggested Skills for you</Text>
                                        <Text fontWeight={"300"} fontSize={"13px"}>Make your Resume Stand out. Learn these skills & boost your profile</Text>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={"500"} fontSize={"16px"}>Backend Development</Text>
                                        <Text fontWeight={"300"} fontSize={"13px"}>3740+ courses from top platforms</Text>
                                    </Box>
                                    <Divider paddingY={"1"} />
                                    <Box>
                                        <Text fontWeight={"500"} fontSize={"16px"}>Frontend Development</Text>
                                        <Text fontWeight={"300"} fontSize={"13px"}>3690+ free courses and certifications</Text>
                                    </Box>
                                    <Divider paddingY={"1"} />
                                    <Box>
                                        <Text fontWeight={"500"} fontSize={"16px"}>Fullstack Development</Text>
                                        <Text fontWeight={"300"} fontSize={"13px"}>3680+ top rated courses for career growth</Text>
                                    </Box>
                                    <Divider paddingY={"1"} />

                                    <Text alignSelf={"end"} paddingTop={"3"} fontSize={"15"} fontWeight={"700"} color={"#4a90e2"} >VIEW ALL</Text>
                                </VStack>
                            </Box>
                        </VStack>
                    </Grid>
                    <FooterMain />
                </Box >
            </div >
            {isModalVisible && <>
                <Modal isOpen={isModalVisible} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Congratulations {user.name.split(" ",1)}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>You have Successfully applied for {data.JobTitle} !</Text>
                            <Text>Please wait for Recruiters response... </Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                ok
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>}

        </Container >
    )
}
