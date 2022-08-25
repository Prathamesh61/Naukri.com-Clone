import { Box, Button, Center, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, HStack, Img, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Text, Textarea, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";




export function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    return (
        <>
            <Container width={"100%"} maxW={"100%"}>
                <HStack>
                    <Button onClick={onOpen}>Login</Button>
                </HStack>
            </Container>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                size={"sm"}
                onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Login
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Text align={"end"} cursor={"pointer"} color={"blue"}>Register for Free</Text>
                            <Box>
                                <FormLabel fontSize={"13px"} htmlFor='username'>EmailID/Username</FormLabel>
                                <Input type={"email"}
                                    ref={firstField}
                                    id='username'
                                    placeholder='Please enter active EmailID/Username'
                                />
                            </Box>
                            <Box>
                                <FormLabel fontSize={"13px"} htmlFor='password'>Password</FormLabel>
                                <Input
                                    type={"password"}
                                    ref={firstField}
                                    id='password'
                                    placeholder='Please enter password'
                                />
                                <Text align={"end"} fontSize={"13px"} color={"blue"} htmlFor='password'>Forget Password ?</Text>

                            </Box>
                            <Box>
                                <Button width={"100%"} bg={"#457eff"} color={"white"}>
                                    Login
                                </Button>
                            </Box>
                            <Divider width={"90%"} />
                            <Center>
                                <VStack>
                                    <p>or</p>
                                    <br />
                                    <Button width={"fit-content"} leftIcon={<Img width={"20px"} src="https://i.ibb.co/VBNmDCK/google.png" />}>Sign in with Google</Button>
                                </VStack>
                            </Center>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}