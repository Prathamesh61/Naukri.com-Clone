import { Box, Button, Center, Container, Divider, Heading, HStack, Img, Input, Select, SimpleGrid, Slide, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FooterHome } from "../FooterHome";
import { FooterMain } from "../FooterMain";
import { Navbar } from "../Navbar";

import { SliderComponent, SliderComponentFeatured, SliderTopCompanies, SliderTrendingLanding } from "./SliderComponent";

export function InterviewQuestions(props) {
    const { image, title, jobs } = props;
    return (
        <Container centerContent>
            <HStack _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", color: "blue.200" }} justifyContent={"center"} alignContent={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} width={"220px"} height={"80px"} padding={"5"} borderTopLeftRadius={"20"} borderBottomRightRadius={"20"} borderBottomLeftRadius={"5"}
                borderTopRightRadius={"5"} >
                <Img width={"40px"} border={"1px solid #8292b4"} src={image} alt={title} />
                <Box >
                    <Text fontSize={"15px"} fontWeight={"600"}>{title} </Text>
                    <Text fontSize={"13px"}>{jobs} Interviews Jobs
                        &#10095;</Text>
                </Box>
            </HStack>
        </Container>
    )
}
export function PopularJobs(props) {
    const { title, countOfJobs } = props;
    return (
        <Container centerContent>
            <Box _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", color: "blue.200" }} justifyContent={"center"} alignContent={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} width={"220px"} height={"80px"} padding={"5"} borderTopLeftRadius={"20"} borderBottomRightRadius={"20"} borderBottomLeftRadius={"5"}
                borderTopRightRadius={"5"} >
                <Text fontSize={"16px"} fontWeight={"600"}>{title} </Text>
                <Text fontSize={"15px"}>{countOfJobs} Jobs
                    &#10095;</Text>
            </Box>
        </Container>
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
    const featuredCompanies = [
        {
            image: "https://static.ambitionbox.com/alpha/company/photos/logos/accolite.jpg",
            title: "Accolite Digital",
            rating: "4.0",
            reviews: "289",
            description: "Digital transformation services provider."
        },
        {
            image: "https://img.naukimg.com/logo_images/groups/v2/21746.gif",
            title: "FIS",
            rating: "4.1",
            reviews: "3.4k",
            description: "FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer."
        },
        {
            image: "https://img.naukimg.com/logo_images/groups/v2/4264.gif",
            title: "WNS Global Services",
            rating: "3.7",
            reviews: "6.7k",
            description: "Leading business process management company."
        },
        {
            image: "https://img.naukimg.com/logo_images/groups/v2/18850.gif",
            title: "Oracle",
            rating: "3.9",
            reviews: "3.7k",
            description: "Cloud technology company since 1977."
        },
        {
            image: "https://img.naukimg.com/logo_images/groups/v2/9558.gif",
            title: "Nagarro",
            rating: "4.5",
            reviews: "2.4k",
            description: "Leader in digital product engineering."
        },
        {
            image: "https://img.naukimg.com/logo_images/groups/v2/1288.gif",
            title: "Accolite Digital",
            rating: "3.9",
            reviews: "22.6k",
            description: "Global leader in technology services."
        },
        {
            image: "https://img.naukimg.com/logo_images/groups/v2/42932.gif",
            title: "Genpact",
            rating: "4.0",
            reviews: "20k",
            description: "Global professional services firm."
        },
        {
            image: "https://img.naukimg.com/logo_images/groups/v2/2436002.gif",
            title: "Xoriant",
            rating: "4.4",
            reviews: "3.6k",
            description: "Software development & technology services firm."
        },
        {
            image: "https://img.naukimg.com/logo_images/groups/v2/4156.gif",
            title: "Cognizant",
            rating: "4.0",
            reviews: "27.8k",
            description: "Leading ITeS company with global presence."
        },
    ]
    const popularRoles = [
        {
            title: "Full Stack Developer",
            countofJobs: "23.7k+"
        },
        {
            title: "Front End Developer",
            countofJobs: "2.9k+"
        },
        {
            title: "Engineering Manager",
            countofJobs: "1.5k+"
        },
        {
            title: "Mobile/App developer",
            countofJobs: "2.2k+"
        },
        {
            title: "DevOps Engineer",
            countofJobs: "1.7k+"
        },
        {
            title: "Technical Lead",
            countofJobs: "14.2k+"
        }
    ]
    const interviewQuestions = [
        {
            image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png",
            title: "TCS",
            jobs: "2.5k+"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png",
            title: "Byjus",
            jobs: "816"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png",
            title: "Accenture",
            jobs: "2k+"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png",
            title: "Amazon",
            jobs: "1.7k+"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png",
            title: "Flipkart",
            jobs: "488"
        },
        {
            image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png",
            title: "Cognizant",
            jobs: "1.6k+"
        },
    ]


    return (
        <Container bg={"#ffffff"} maxW="auto">
            <Navbar />

            {/* first container start */}
            <Container bg={"#f8f9ff"} zIndex={"0"} position="relative" maxW={"100%"} centerContent>
                <Heading as={"h1"} marginTop="40px">Find your dream job now</Heading>
                <Text margin={"2"}>5 lakh+ jobs for you to explore</Text>
                <br />
                <br />
                <br />
                <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} position={"absolute"} top="150" borderRadius={"120px"} border={"1px solid white"} width={"60%"} bg="#ffffff" paddingX={"4"} paddingY={"3"} justifyContent={"space-evenly"} alignItems={"center"}>
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
                    <Link to="/register"><Button bg={"#ff7555"} borderRadius="50px" paddingX={"20px"} paddingY={"15px"} fontSize={"16px"} color="white" >Register Now</Button></Link>
                </HStack>
            </Container>
            {/* second Conainer end */}
            <br /><br /><br />
            {/* third container start */}
            <Container maxW={"90%"} centerContent padding={"4"}>
                <Heading as={"h4"} margin={"6"}>Trending on Naukri today</Heading>
                <HStack maxW={"90%"} overflow={"auto"} padding={"2"}>
                    <SliderTrendingLanding data={trandingOnNaukri}>
                        {/* {trandingOnNaukri && trandingOnNaukri.map((item) =>
                        <TrendingLanding key={item.title} image={item.image} title={item.title} countOfJobs={item.countOfJobs} />
                    )} */}</SliderTrendingLanding>
                </HStack>
            </Container>
            {/* third container end */}
            <br /><br /><br />
            {/* fourth container start */}
            <Container maxW={"90%"} centerContent padding={"4"}>
                <Heading as={"h4"} margin={"6"}>Explore top companies hiring now</Heading>
                <HStack maxW={"90%"} padding={"2"} >
                    <SliderTopCompanies data={topCompanies}>
                        {/* {topCompanies && topCompanies.map((item) =>
                        <TopCompanies key={item.title} title={item.title} description={item.description} imgarr={item.images} />
                    )} */}</SliderTopCompanies>
                </HStack>
            </Container>
            {/* fourth container end */}
            <br /><br /><br />
            {/* fifth container start */}
            <Container maxW={"90%"} centerContent padding={"4"}>
                <Heading as={"h4"} margin={"6"}>Featured companies actively hiring</Heading>
                <VStack maxW={"90%"} overflow={"auto"} padding={"2"}>
                    <SliderComponentFeatured data={featuredCompanies}>
                        {/* {featuredCompanies && featuredCompanies.map((item) =>
                            <FeaturedCompanies key={item.title} title={item.title} image={item.image} description={item.description} rating={item.rating} reviews={item.reviews} />
                        )} */}
                    </SliderComponentFeatured>

                </VStack>
                <Button borderRadius={"20px"} margin={"6"} variant={"outline"} color={"blue"} outlineColor={"blue"}>View Companies</Button>
            </Container>

            {/* fifth container end */}
            <br /><br /><br /><br />
            {/* sixth start */}
            <Container maxH={"330px"}
                padding={"2"}
                maxW={"80%"}
                bg={"#fef9f4"}
                borderTopLeftRadius={"20"}
                borderBottomRightRadius={"20"}
                borderBottomLeftRadius={"5"}
                borderTopRightRadius={"5"}>
                <HStack position={"relative"} justifyContent={"space-between"}>
                    <VStack justifyContent={"flex-start"} alignItems={"flex-start"} maxW={"40%"} padding={"8"}>
                        <Img width={"120px"} src="https://static.naukimg.com/s/0/0/i/role-collection.png" alt="logo" />
                        <Heading as={"h1"} size={"xl"}>Discover jobs across popular roles</Heading>
                        <p>Select a role and we'll show you relevant jobs for it!</p>
                    </VStack>
                    <SimpleGrid column={[3, 2, 2, 2]} position={"absolute"} right={"50px"} borderTopLeftRadius={"20"} borderBottomRightRadius={"20"} borderBottomLeftRadius={"5"} borderTopRightRadius={"5"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} bg={"white"} columns={"2"} spacing="5" padding={"10"} columnGap={"0"}>
                        {popularRoles && popularRoles.map((item) => {
                            return <PopularJobs key={item.title} title={item.title} countOfJobs={item.countofJobs} />
                        }
                        )}
                    </SimpleGrid>
                </HStack>

            </Container>
            {/* sixth end */}
            <br /><br /><br /><br /><br /><br />
            {/* sevent start */}


            <Container centerContent maxW={"80%"}>
                <HStack>
                    <VStack maxW={"20%"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                        <Heading as="h1" size={"lg"}>Prepare for your next interview</Heading>
                        <Img width={"200px"} src="https://static.naukimg.com/s/0/0/i/ab-interview.png" alt="title" />
                    </VStack>
                    <Box borderTopLeftRadius={"20"}
                        borderBottomRightRadius={"20"}
                        borderBottomLeftRadius={"5"}
                        borderTopRightRadius={"5"}
                        boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}
                        bg={"white"}>
                        <Text fontSize={"18px"} align={"center"} marginY={"3"} fontWeight={"700"}>Interview questions by company</Text>
                        <SimpleGrid bg={"white"} columns={[3, 2, 2, 2]} spacing="5" padding={"5"} columnGap={"0"} >
                            {interviewQuestions && interviewQuestions.map((item) => {
                                return <InterviewQuestions key={item.title} image={item.image} title={item.title} jobs={item.jobs} />
                            }
                            )}
                        </SimpleGrid>
                    </Box>
                    <Box borderTopLeftRadius={"20"}
                        borderBottomRightRadius={"20"}
                        borderBottomLeftRadius={"5"}
                        borderTopRightRadius={"5"}
                        boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}
                        bg={"white"} padding={"5"}>
                        <Text fontSize={"18px"} align={"center"} marginY={"3"} fontWeight={"700"}>Interview questions by Role</Text>

                        <VStack padding={"8"}>
                            <HStack>
                                <Text fontSize={"14px"} fontWeight={"600"}>Software Engineer</Text>
                                <Text fontSize={"13px"}>(7.2k+ Questions)</Text>
                            </HStack>
                            <Divider color={"#8292b4"} />
                            <HStack>
                                <Text fontSize={"14px"} fontWeight={"600"}>Business Analyst</Text>
                                <Text fontSize={"13px"}>(2.8k+ Questions)</Text>
                            </HStack>
                            <Divider color={"#8292b4"} />
                            <HStack>
                                <Text fontSize={"14px"} fontWeight={"600"}>Consultant</Text>
                                <Text fontSize={"13px"}>(2.4k+ Questions)</Text>
                            </HStack>
                            <Divider color={"#8292b4"} />
                            <HStack>
                                <Text fontSize={"14px"} fontWeight={"600"}>Financial Analyst</Text>
                                <Text fontSize={"13px"}>(894 Questions)</Text>
                            </HStack>
                            <Divider color={"#8292b4"} />
                            <HStack>
                                <Text fontSize={"14px"} fontWeight={"600"}>Sales and Marketting</Text>
                                <Text fontSize={"13px"}>(991 Questions)</Text>
                            </HStack>
                            <Divider color={"#8292b4"} />
                            <HStack>
                                <Text fontSize={"14px"} fontWeight={"600"}>Quality Engineer</Text>
                                <Text fontSize={"13px"}>(1.3k+ Questions)</Text>
                            </HStack>

                        </VStack>
                    </Box>
                </HStack>
            </Container>
            {/* sevent end */}
            <br /><br /><br /><br />

            {/* resume banner start */}
            <Container padding={"5"} maxW={"70%"} borderTopLeftRadius={"20"}
                borderBottomRightRadius={"20"}
                borderBottomLeftRadius={"5"}
                borderTopRightRadius={"5"}
                boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} >
                <HStack padding={"5"}>
                    <Img width={"150px"} src="https://static.naukimg.com/s/0/0/i/ff-services.png" alt="logo" />
                    <Box maxW={"60%"}>
                        <Text marginY={"10px"} fontSize={"17px"} fontWeight={"700"}>Accelerate your job search with premium services</Text>
                        <Text marginY={"10px"} fontSize={"15px"} fontWeight={"300"}>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</Text>
                        <HStack marginY={"10px"}>{[{ image: "https://static.naukimg.com/s/0/0/i/ff-services-icon2.png", title: "Resume Writing " }, { image: "https://static.naukimg.com/s/0/0/i/ff-services-icon3.png", title: "Priority Applicant" }, { image: "https://static.naukimg.com/s/0/0/i/ff-services-icon1.png", title: "Resume Display" }].map(item => {
                            return <HStack paddingX={"2"} borderRadius={"50px"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} key={item.title}> <Img width={"12px"} src={item.image} alt="title" /> <Text fontSize={"15px"} >{item.title} </Text> </HStack>
                        })}</HStack>
                    </Box>
                    <Button bg={"#457eff"} borderRadius="50px" paddingX={"30px"} paddingY={"25px"} fontSize={"18px"} color="white">Learn more</Button>
                </HStack>
            </Container>
            {/* resume banner end*/}

            <br /><br /><br /><br />
            {/* career banner start*/}
            <Container maxW={"80%"}  >
                <HStack padding={"5"}>
                    <VStack maxW={"30%"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                        <Heading as="h1" size={"lg"}>Grow your career through learning</Heading>
                        <Img width={"130px"} src="https://static.naukimg.com/s/0/0/i/learn-icon.svg" alt="title" />
                    </VStack>
                    <SimpleGrid columns={[1, 2, 2, 3]} spacing={"2"} padding={"5"} marginY={"10px"}>{[
                        {
                            title: "Data Science",
                            MainTitle: "Artificial Intelligence",
                            desc: "Learn in demand AI skills like Deep learning, NLP, Computer vision and more for career growth across different roles.",
                            courses: [
                                "600 courses", "28 providers"
                            ]
                        },
                        {
                            title: "Cloud Technologies",
                            MainTitle: "AWS",
                            desc: "Get certified for high demand cloud computing skills for Cloud Practitioner, Architect, Developer, and Operations roles.",
                            courses: [
                                "800 courses", "16 providers"
                            ]
                        },
                        {
                            title: "Programming",
                            MainTitle: "Data Structures & Algorithms",
                            desc: "Master DS and Algorithms for entry level engineering roles in product companies and for competitive programming.",
                            courses: [
                                "800 courses", "13 providers"
                            ]
                        }
                    ].map(item => {
                        return <VStack _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} padding={"5"} justifyContent={"flex-start"} alignItems={"flex-start"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} key={item.title}>
                            <Text fontSize={"15px"}>{item.title}</Text>
                            <Text fontWeight={"700"} fontSize={"15px"} >{item.MainTitle} </Text>
                            <Text fontSize={"14px"}>{item.desc} </Text>
                            <HStack>{item.courses.map(ele => <Text padding={"1"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} fontSize={"14"}> {ele} </Text>)}</HStack>
                        </VStack>
                    })}</SimpleGrid>
                </HStack>
            </Container>
            {/* career banner end*/}
            <br /><br /><br />
            <Divider color={"black"} />
            <FooterHome />
            <br /><br />
        </Container >

    )
}