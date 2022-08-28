import { Box, Button, Center, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, HStack, Img, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Text, Textarea, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { AuthContext } from "./Context/AuthContext";

let initial = {
    email: "",
    password: ""
}
export function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const toast = useToast()

    const [user, setuser] = useState(initial)
    const navigate = useNavigate()
    // const {isAuth,loginUser,token} = useContext(AppContex)

    const { isAuth, setisAuth, toggleUser } = useContext(AuthContext)
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    const logout = () => {
        setisAuth(false);
        localStorage.removeItem("login")
        localStorage.removeItem("CurrentUser")
        navigate("/")
        // console.log(isAuth,email)
    }
    function myfun() {
        // console.log(isAuth, "isAuth")
        let data = {
            email: user.email,
            password: user.password,
        }
        // console.log(data, "data")
        if (checklogin(data.email, data.password) === true) {
            localStorage.setItem("login", JSON.stringify(data));
            toast({
                title: 'Yes....',
                description: "You are Successfully Logged In.",
                status: 'success',
                duration: 3000,
                position: 'top',
                isClosable: true,
            })
            navigate("/profilePage");
            // let x = user.email.slice(0, 11)
            toggleUser()

        } else {
            toast({
                title: 'Wrong Credentials....',
                description: "Please check your Email ID and Password.",
                status: 'error',
                duration: 3000,
                position: 'top',
                isClosable: true,
            })
        }
    }
    // console.log(userData, "userData")

    function checklogin(email, password) {

        let filter = userData.filter(function (elem) {
            console.log(elem, "elem")
            localStorage.setItem("CurrentUser", JSON.stringify(elem))
            return elem.email === email && elem.password === password;
        })

        if (filter.length > 0) {
            return true;
        } else {
            console.log("working")
            return false;
        }
    }
    const handle = (event) => {
        // event.preventDefault();
        const { name, value } = event.target
        setuser({
            ...user,
            [name]: value
        })
    }
    return (
        <>
            <div className={styles.header}>
                <ul className={styles.navbar}>
                    <div className={styles.image}>
                        <Link to="/"><img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="logo" /></Link>
                    </div>
                    <li className={styles.drop_one}>
                        <span className={styles.spanHead}>JOBS</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_one}>
                                <ul>
                                    <Link to="/SearchPage"><li>Search jobs</li></Link>
                                    <li>Advance searches</li>
                                    <li>Create free job alert</li>
                                    <li>Register now</li>
                                </ul>
                                <ul>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                    <li>Job by location</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_two}>
                        <Link to="/recruiter">   <span className={styles.spanHead}>RECRUITERS</span></Link>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_two}>
                                <ul>
                                    <li>Browse All Recruiters</li>
                                    <li>SPECIAL OFFERS</li>
                                    <li>NEW REDEFINE</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_three}>
                        <span className={styles.spanHead}>COMPANIES</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_three}>
                                <ul>
                                    <li>Browse All Companies</li>
                                    <li>About Companies</li>
                                    <li>Interview Questions</li>
                                    <li>Write Company Reviews</li>
                                    <li>Write Interview Advise</li>
                                    <li>Company Reviews </li>
                                    <li>Company Salaries</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_four}>
                        <span className={styles.spanHead}>TOOLS</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_four}>
                                <ul>
                                    <li>Career Dashboard</li>
                                    <li>Your next Career</li>
                                    <li>Skills Trend</li>
                                    <li>Naukri Lab </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_five}>
                        <span className={styles.spanHead}>SERVICES</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_five}>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_six}>
                        <span className={styles.spanHead}>MORE</span>
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_six}>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                                <ul>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li><h3>Writing Resume</h3></li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                    <li>Text Resume</li>
                                    <li>Visual Resume</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {/* <li><span> {data.length !== 0 ? <Link style={{ color: 'white' }} to="/profile">{data[0].name} </Link> : <Container width={"100%"} maxW={"100%"}>
                <HStack>
                    <Button onClick={onOpen}>Login</Button>
                </HStack>
            </Container>} </span></li> */}

                    <HStack paddingX={"3"} spacing={"5"}>
                        {isAuth ?
                            <Button colorScheme={"#4a90e2"} variant={"outline"} borderRadius="50px" paddingX={"20px"}
                                fontSize={"13px"} color="#4a90e2" onClick={logout}>Logout</Button> :
                            <Button colorScheme={"#4a90e2"}
                                variant={"outline"} borderRadius="50px" paddingX={"20px"} fontSize={"13px"} color="#4a90e2" onClick={onOpen}>
                                Login</Button>}

                        <Link to="/register"><Button bg={"#ff7555"} borderRadius="50px" paddingX={"20px"} fontSize={"13px"} color="white" onClick={onOpen}>Register</Button></Link>
                    </HStack>

                    <li style={{ marginLeft: 60 }} className={styles.drop_seven}>
                        {/* <span ><img style={{ borderRadius: 15 }} src="https://tse1.mm.bing.net/th?id=OIP.NQEEBmeQTCRCgi8AU_n2zQAAAA&pid=Api&P=0&w=30&h=30" alt="Icon" /></span> */}
                        <div className={styles.menu_experiment}>
                            <div className={styles.menu_seven}>
                                <ul>
                                    <li>Job recommendations</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.drop_four}>
                        <span className={styles.spanHead}>FOR EMPLOYERS</span>
                        <div className={styles.menu_experiment}>
                            <div style={{ marginLeft: -70, paddingRight: 85, paddingLeft: 20 }} className={styles.menu_four}>
                                <ul>
                                    <li>Buy Online</li>
                                    <li>Employer Online</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>



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
                                <Input name="email" onChange={handle} value={user.email} type={"email"}
                                    ref={firstField}
                                    id='username'
                                    placeholder='Please enter active EmailID/Username'
                                />
                            </Box>
                            <Box>
                                <FormLabel fontSize={"13px"} htmlFor='password'>Password</FormLabel>
                                <Input name="password" onChange={handle} value={user.password}
                                    type={"password"}
                                    ref={firstField}
                                    id='password'
                                    placeholder='Please enter password'
                                />
                                <Text align={"end"} fontSize={"13px"} color={"blue"} htmlFor='password'>Forget Password ?</Text>

                            </Box>
                            <Box>
                                <Button onClick={() => {
                                    myfun(); onClose();
                                }} width={"100%"} bg={"#457eff"} color={"white"}>
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