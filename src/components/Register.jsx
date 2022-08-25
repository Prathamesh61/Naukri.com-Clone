import { Box, Button, Center, Checkbox, Container, FormLabel, HStack, Icon, Img, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";

export function Register() {
    return (
        <div>
            <HStack
                justifyContent={"space-around"}
                position={"fixed"}
                zIndex={"1"}
                width={"100%"}
                height={"50px"}
                boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}
                padding={"8"}>
                <Img width={"180px"} src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" />
                <HStack >
                    <Text fontWeight={"300"} fontSize={"16px"} >Alredy Registered ?</Text>
                    <Text fontWeight={"300"} fontSize={"16px"} color="blue">Login here</Text>
                </HStack>
            </HStack>
            <br /><br /><br />

            <HStack margin={"8"} padding={"5"} width={"60%"} position="absolute" right={"100"}>
                <Box border={"1px dashed grey"} bg={"white"} borderRadius={"20px"} padding={"7"} position={"fixed"} left={"100px"} top={"200"} width={"18%"}>
                    <VStack position={"relative"} >
                        <Box width={"150px"} left={"45"} bottom={"235"} position={"absolute"}>
                            <Img src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg" alt="title" />
                        </Box>
                        <br />
                        <Text color={"black"} fontWeight={"700"} fontSize={"20px"}>On registering, you can</Text>
                        <Text color={"black"} >Build your profile and let recruiters find you</Text>
                        <Text color={"black"} >Get job postings delivered right to your email</Text>
                        <Text color={"black"} >Find a job and grow your career</Text>
                    </VStack>
                </Box>

                <VStack zIndex={"0"} padding={"10"} width={"100%"}
                    align={"start"}
                    boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}>
                    <Text fontFamily={"sans-serif"} fontWeight={"900"} fontSize={"4xl"}>Find a job and grow your career</Text>
                    <br />
                    <Box paddingY={"3"}>
                        <FormLabel fontSize={"15px"}>Full Name</FormLabel>
                        <Input type={"name"} size={"lg"} style={{ width: "650px" }}
                            id='name'
                            placeholder='What is your Name ?'
                        />
                    </Box>
                    <Box paddingY={"3"}>
                        <FormLabel fontSize={"15px"} >EmailID</FormLabel>
                        <Input type={"email"} size={"lg"} style={{ width: "650px" }}
                            id='username'
                            placeholder='Tell us your EmailID'
                        />
                    </Box>
                    <Box paddingY={"3"}>
                        <FormLabel fontSize={"15px"} >Password</FormLabel>
                        <Input type={"password"} size={"lg"} style={{ width: "650px" }}
                            id='username'
                            placeholder='Create a password for your account'
                        />
                        <FormLabel fontSize={"13px"}>Minimum 6 Charachter required</FormLabel>
                    </Box>
                    <Box paddingY={"3"}>
                        <FormLabel fontSize={"15px"} >Mobile Number</FormLabel>
                        <InputGroup size={"lg"}>
                            <InputLeftAddon children='+91' />
                            <Input style={{ width: "590px" }} type='tel' placeholder='phone number' />
                        </InputGroup>
                    </Box>
                    <Box paddingY={"3"}>
                        <FormLabel fontSize={"15px"} >Work Status</FormLabel>
                        <HStack>
                            <RadioGroup >
                                <Radio colorScheme='blue' value='1'>
                                    I'm Experienced
                                </Radio>
                                &nbsp;&nbsp;&nbsp;
                                <Radio colorScheme='blue' value=''>
                                    I'm Fresher
                                </Radio>
                            </RadioGroup>
                        </HStack>
                    </Box>
                    <Box paddingY={"3"}>
                        <FormLabel fontSize={"15px"}>Resume</FormLabel>
                        <InputGroup size={"lg"} justifyContent={"center"}>
                            <InputLeftAddon bg={"#ff7555"} color="white" children='Upload File' />
                            <Input style={{ width: "530px", paddingTop: "5px" }} type='File' />
                        </InputGroup>
                        <FormLabel fontSize={"13px"}>Recruiters give first preference to candidates who have a resume</FormLabel>
                    </Box>
                    <Box paddingY={"3"}>
                        <HStack>
                            <Checkbox fontSize={"15px"}>Send me important updates on </Checkbox>
                            <Img width={"15px"} src="https://static.naukimg.com/s/7/104/assets/images/whatsappicon.0011d8c1.png" alt="logo" />
                            <FormLabel >WhatsApp</FormLabel>
                        </HStack>
                    </Box>
                    <p>By clicking Register, you agree to the Terms and Conditions & Privacy Policy of Naukri.com</p>
                    <Box paddingY={"3"}>
                        <Button bg={"#457eff"} borderRadius="50px" paddingX={"30px"} paddingY={"25px"} fontSize={"18px"} color="white">
                            Register Now
                        </Button>
                    </Box>
                </VStack>
            </HStack>
        </div>
    )
}