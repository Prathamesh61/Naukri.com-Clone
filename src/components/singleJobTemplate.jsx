import { Box, Container, HStack, Img, Text } from "@chakra-ui/react"
export function SingleJObTemplate(props) {
    const { JobTitle, JobSalary, Role, JobExperienceRequired, KeySkills, Location, Industry, towardsJobData } = props;
    let str = { KeySkills };
    // console.log(typeof KeySkills)
    let arr = typeof str === 'string' ? str.split('| ') : '';
    // console.log(arr);
    return (
        <Container maxW={"700px"} pointer onClick={towardsJobData}>
            <Box bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} padding={"7"} width={"100%"}>
                <Text fontWeight={"700"} fontSize={"17px"}>{JobTitle}</Text>
                <HStack>
                    <Text fontWeight={"500"} fontSize={"15px"}>{Industry}</Text>
                    <Img width={"15px"} src="https://i.ibb.co/wYNNStb/star.png" alt="rating" />
                    <Text fontWeight={"500"} fontSize={"13px"} color={"blue"}>{Math.floor(Math.random() * 1000) + 1} reviews</Text>
                </HStack>
                <HStack paddingY={"1"}>
                    <HStack>
                        <Img width={"15px"} src="https://i.ibb.co/tPcmj57/portfolio.png" alt="exp" /> <Text fontWeight={"400"} fontSize={"13px"} >{JobExperienceRequired}</Text>
                    </HStack>
                    <HStack>
                        <Img width={"15px"} src="https://i.ibb.co/KryKW3z/wallet.png" alt="sal" /> <Text fontWeight={"400"} fontSize={"13px"} >{JobSalary}</Text>
                    </HStack>
                    <HStack>
                        <Img width={"15px"} src="https://i.ibb.co/zVRsFwP/map-location.png" alt="location" /> <Text fontWeight={"400"} fontSize={"13px"} >{Location}</Text>
                    </HStack>
                </HStack>
                <HStack paddingY={"1"}>
                    <Img width={"15px"} src="https://i.ibb.co/0sYJmJj/pen-tip.png" alt="doc" /> <Text fontWeight={"400"} fontSize={"13px"} >{Role}</Text>
                </HStack>
                <HStack paddingY={"1"}>
                    <Img width={"15px"} src="https://i.ibb.co/K2PwSb8/google-docs.png" alt="skills" />
                    <Text fontWeight={"400"} fontSize={"12px"}>{KeySkills}</Text>
                </HStack>
                <HStack margin={"1"} bg={"#eeeeee"} paddingX="0.5" width={"fit-content"}>
                    <Img width={"10px"} src="https://i.ibb.co/3rppz9x/anti-clockwise.png" alt="days" />
                    <Text fontWeight={"400"} fontSize={"10px"}> {Math.floor(Math.random() * 10) + 1} days ago </Text>
                </HStack>
            </Box>
        </Container>
    )
}